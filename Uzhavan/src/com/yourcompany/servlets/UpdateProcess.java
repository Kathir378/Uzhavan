package com.yourcompany.servlets;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.PrintWriter;
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
import com.yourcompany.JavaControl.DAO.InvoiceDAO;
import com.yourcompany.JavaView.Invoice;
import javax.servlet.http.HttpServlet;

public class UpdateProcess extends HttpServlet {
	    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)throws ServletException, IOException {
        try {
            StringBuilder sb = new StringBuilder();
            BufferedReader read = request.getReader();
            String line;
            while ((line = read.readLine()) != null) {
                sb.append(line);
            }
            JSONObject jsonData = new JSONObject(sb.toString());
            
            String email = (String)request.getAttribute("email");
            int processCompleted = jsonData.getInt("process");
            String landName = jsonData.getString("farmName");
            JSONObject responseObject = new JSONObject();
            if (email != null && processCompleted != 0 && landName != null && !email.trim().isEmpty()
                    && !landName.trim().isEmpty()) {
                FarmDAO.updateProcess(email,landName,processCompleted);
                responseObject.put("responseCode", "200");
                responseObject.put("message", "Updated Sucessfully vaild data");

            } else {
                responseObject.put("responseCode", "205");
                responseObject.put("message", "Not a vaild data");
            }
            response.setContentType("Application/json");
            response.getWriter().write(responseObject.toString());

            
        } catch (Exception e) {
            JSONObject errorResponse = new JSONObject();
            errorResponse.put("responseCode", "500");
            errorResponse.put("message", "Internal Server Error");
            response.getWriter().write(errorResponse.toString());
        }
    }
}