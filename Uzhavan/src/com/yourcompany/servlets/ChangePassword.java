package com.yourcompany.servlets;

import com.yourcompany.JavaControl.DAO.UserDAO;

import java.io.BufferedReader;
import java.io.IOException;
// import java.util.Enumeration;

// import javax.servlet.ServletConfig;
// import javax.servlet.ServletContext;
import javax.servlet.ServletException;
// import javax.servlet.ServletRequest;
// import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONObject;

public class ChangePassword extends HttpServlet {

    

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        System.out.println("\n\n\nEntered into ChangePassword Endpoint\n\n\n");

        // Initialize response object
        JSONObject response = new JSONObject();

        try {
            // Read the request body
            StringBuilder requestBody = new StringBuilder();
            try (BufferedReader reader = req.getReader()) {
                String line;
                while ((line = reader.readLine()) != null) {
                    requestBody.append(line);
                }
            }

            // Parse the JSON request body
            JSONObject jsonRequest = new JSONObject(requestBody.toString());
            String email = (String) req.getAttribute("email"); // Ensure this is set by a filter or middleware
            if (email == null) {
                throw new ServletException("Email not found in request attributes.");
            }

            String newPass = jsonRequest.getString("newP");
            String oldPass = jsonRequest.getString("oldP");

            // Call the DAO method to change the password
            String changePass = UserDAO.changePass(email, oldPass, newPass);

            // Build the response based on the result
            System.out.println("\n\n\n\nValue of changePass : "+changePass);
            if ("Changed".equals(changePass)) {
                response.put("response", 200);
                response.put("output", "Password successfully changed.");
            } else {
                response.put("response", 400);
                response.put("output", changePass);
            }

        } catch (Exception e) {
            // Log the error and return a meaningful JSON response
            e.printStackTrace();
            response.put("response", 500);
            response.put("output", "An error occurred: " + e.getMessage());
        }

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