package com.yourcompany.servlets;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.PrintWriter;
// import java.util.HashMap;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONObject;

// import com.fasterxml.jackson.databind.ObjectMapper;
// import com.yourcompany.JavaControl.DAO.InvoiceDAO;
import com.yourcompany.JavaControl.api.FullApi;

public class DetailedAPI extends HttpServlet {
	@Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        System.out.println("\n\n\nReceived request at DetailedAPI\n");

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
        String district = jsonResponse.getString("district");

        JSONObject json = new JSONObject();

        System.out.println("\n\n\n\nAPI Response: " + jsonResponse);

        json.put("soilType",soil);
        json.put("temperature",temperature);
        json.put("humidity",humidity);
        json.put("district",district);


        // Fetch suitable crops based on conditions
        

        // Set response headers
        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");
        response.setHeader("Access-Control-Allow-Credentials", "true");

        // Send JSON response
        PrintWriter out = response.getWriter();
        System.out.println("\n\n\nJSON of Detail "+json.toString());
        out.print(json.toString());
        out.flush();
        out.close();
    }
}