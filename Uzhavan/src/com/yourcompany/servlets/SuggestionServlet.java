package com.yourcompany.servlets;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashMap;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.json.JSONObject;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.yourcompany.JavaControl.api.FullApi;
import com.yourcompany.JavaControl.DAO.InvoiceDAO;

public class SuggestionServlet extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        System.out.println("Received request at SuggestionServlet");

        // Read JSON data from request
        StringBuilder sb = new StringBuilder();
        BufferedReader reader = request.getReader();
        String line;
        while ((line = reader.readLine()) != null) {
            sb.append(line);
        }

        // Parse received JSON
        JSONObject requestData = new JSONObject(sb.toString());
        String pincode = requestData.getString("pinCode");

        // Fetch data from API
        JSONObject jsonResponse = FullApi.api(pincode);
        String soil = jsonResponse.getString("soilType");
        String temperature = jsonResponse.getString("temperature");
        String humidity = jsonResponse.getString("humidity");

        System.out.println("\n\n\n\nAPI Response: " + jsonResponse);

        // Fetch suitable crops based on conditions
        HashMap<String, Float> crops = InvoiceDAO.getSuitableCrops(soil, temperature, humidity);

        // Convert HashMap to JSON
        ObjectMapper objectMapper = new ObjectMapper();
        String json = objectMapper.writeValueAsString(crops);

        // Set response headers
        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");
        response.setHeader("Access-Control-Allow-Credentials", "true");

        // Send JSON response
        PrintWriter out = response.getWriter();
        out.print(json);
        out.flush();
        out.close();
    }
}
