package com.yourcompany.servlets;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Date;
import java.time.LocalDate;
import java.time.temporal.ChronoUnit;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONObject; 

import com.yourcompany.JavaControl.DAO.CropTrackingJsonExtractor;

public class Procedure extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        System.out.println("POST request received");

        try {
            // Read JSON request body
            StringBuilder sb = new StringBuilder();
            String line;
            BufferedReader reader = req.getReader();
            while ((line = reader.readLine()) != null) {
                sb.append(line);
            }
            String requestBody = sb.toString();
            System.out.println("Received JSON: " + requestBody);

            JSONObject request = new JSONObject(requestBody);

            // Validate and extract email
            String email = (String) req.getAttribute("email");
            if (email == null || email.isEmpty()) {
                System.out.println("Error: Email attribute is missing in the request");
                resp.sendError(HttpServletResponse.SC_BAD_REQUEST, "Email is required.");
                return;
            }

            // Extract parameters from request JSON
            String farmName = request.optString("farmName", "");
            String cropName = request.optString("cropName", "");
            int dayForProcedure = request.optInt("day", 0);

            if (farmName.isEmpty() || cropName.isEmpty() || dayForProcedure <= 0) {
                System.out.println("Error: Missing or invalid parameters");
                resp.sendError(HttpServletResponse.SC_BAD_REQUEST, "Invalid input parameters.");
                return;
            }

            // Get plantation date from database
            Date date = CropTrackingJsonExtractor.GetUserPlanationDate(email, farmName);
            LocalDate plantationDate = date.toLocalDate();
            LocalDate curDate = LocalDate.now();
            LocalDate futureDate = curDate.plusDays(dayForProcedure);
            long daysGap = Math.abs(ChronoUnit.DAYS.between(plantationDate, futureDate));

            // Get days and completed work
            String day = CropTrackingJsonExtractor.getDays(cropName, daysGap);
            String completedWork = CropTrackingJsonExtractor.getLastDay(cropName);
            if (completedWork == null) {
                completedWork = "No work completed yet";
            }

            // Get task order
            JSONObject answer = CropTrackingJsonExtractor.getTotalProcedure(cropName, (int) daysGap);
            ArrayList<String> taskOrder = CropTrackingJsonExtractor.sortedArray(answer);

            // Build response JSON
            JSONObject responseJson = new JSONObject();
            responseJson.put("status", "success");
            responseJson.put("days", day);
            responseJson.put("completedWork", completedWork);
            responseJson.put("tasks", answer);
            responseJson.put("taskOrder", taskOrder);

            // Send JSON response
            resp.setContentType("application/json");
            resp.setCharacterEncoding("UTF-8");
            PrintWriter out = resp.getWriter();
            out.print(responseJson.toString());
            out.flush();

        } catch (Exception e) {
            e.printStackTrace();
            resp.setContentType("application/json");
            resp.setCharacterEncoding("UTF-8");
            PrintWriter out = resp.getWriter();
            JSONObject errorJson = new JSONObject();
            errorJson.put("status", "error");
            errorJson.put("message", e.getMessage());
            out.print(errorJson.toString());
            out.flush();
        }
    }
}
