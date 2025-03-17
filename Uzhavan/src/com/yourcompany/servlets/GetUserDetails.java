package com.yourcompany.servlets;

import com.yourcompany.JavaControl.DAO.UserDAO;

import java.io.BufferedReader;
import java.io.IOException;
// import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.json.JSONObject;



public class GetUserDetails extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        System.out.println("\n\n\nEntered into GetUserDetails\n\n\n");

        // Read the request body
        StringBuilder requestBody = new StringBuilder();
        try (BufferedReader reader = req.getReader()) {
            String line;
            while ((line = reader.readLine()) != null) {
                requestBody.append(line);
            }
        }

        // Parse the JSON request body
        // JSONObject jsonRequest = new JSONObject(requestBody.toString());
        // String email = jsonRequest.optString("email"); // Use optString to avoid
        // exceptions if "email" is missing
        // String email = (String) req.getAttribute("email");

        String email = (String) req.getAttribute("email");
        System.out.println("\n\n\n\nEmail: " + email);

        // Validate the email
        if (email == null || email.trim().isEmpty()) {
            resp.setStatus(HttpServletResponse.SC_BAD_REQUEST);
            JSONObject errorResponse = new JSONObject();
            errorResponse.put("error", "Email is required");
            resp.setContentType("application/json");
            resp.setCharacterEncoding("UTF-8");
            resp.getWriter().print(errorResponse.toString());
            return;
        }

        // Fetch user details from the database
        String[] arr = UserDAO.retrieveUserDetails(email);

        // Check if user exists
        if (arr == null || arr.length < 2) {
            resp.setStatus(HttpServletResponse.SC_BAD_REQUEST);
            JSONObject errorResponse = new JSONObject();
            errorResponse.put("error", "User not found");
            resp.setContentType("application/json");
            resp.setCharacterEncoding("UTF-8");
            resp.getWriter().print(errorResponse.toString());
            return;
        }

        // Create a JSON object to hold the response
        JSONObject response = new JSONObject();
        response.put("name", arr[0]);
        response.put("mobileNo", arr[1]);
        response.put("email", email); // Include the email in the response
        System.out.println("\n\n\nResponse : " + response.toString());

        // Set the response content type and write the JSON response
        resp.setContentType("application/json");
        resp.setCharacterEncoding("UTF-8");
        resp.getWriter().print(response.toString());
    }

    @Override
    public String toString() {
        // TODO Auto-generated method stub
        return super.toString();
    }

}