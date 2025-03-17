package com.yourcompany.servlets;

import java.io.BufferedReader;
import java.io.IOException;
import java.util.Enumeration;

import javax.servlet.ServletConfig;
import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONObject;

import com.yourcompany.JavaControl.DAO.FarmDAO;
import com.yourcompany.JavaControl.DAO.UserDAO;

public class RenameLand extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        try {
            System.out.println("enter the rename ");
            StringBuilder sb = new StringBuilder();
            BufferedReader reader = request.getReader();
            String line;
            while ((line = reader.readLine()) != null) {
                sb.append(line);
            }
            JSONObject jsonData = new JSONObject(sb.toString());
            String email = (String) request.getAttribute("email");
            System.out.println(email);
            System.out.println("enter the email ");
            String pincode = jsonData.getString("pincode");
            String surveyNumber = jsonData.getString("surveyNo");
            String name = jsonData.getString("name");
            UserDAO verify = new UserDAO();
            JSONObject responseObject = new JSONObject();
            if (email != null && !email.trim().isEmpty()
                    && pincode != null && !pincode.trim().isEmpty() && surveyNumber != null
                    && !surveyNumber.trim().isEmpty() && verify.isExit(email)) {
                FarmDAO farm = new FarmDAO();
                // System.out.println(farmName+size+pincode+district+state+crop+email+surveyNumber+"\n\n\n\n\n\n");
                if (farm.renameFiled(email, pincode, name, surveyNumber)) {

                    responseObject.put("responseCode", "200");
                    responseObject.put("message", "Land added successfully");
                } else {
                    responseObject.put("responseCode", "101");
                    responseObject.put("message", "the land is already register");

                }

            } else {
                responseObject.put("responseCode", "204");
                responseObject.put("message", "Invalid credentials");

            }

            response.setContentType("application/json");
            response.getWriter().write(responseObject.toString());
            response.getWriter().flush();
        }

        catch (Exception e) {
            System.out.println(e.getMessage());
        }
        super.doPost(request, response);
    }

    @Override
    public String toString() {
        // TODO Auto-generated method stub
        return super.toString();
    }

}