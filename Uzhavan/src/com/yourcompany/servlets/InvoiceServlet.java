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

import com.yourcompany.JavaControl.DAO.InvoiceDAO;
import com.yourcompany.JavaView.Invoice;

public class InvoiceServlet extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        try {
            StringBuilder sb = new StringBuilder();
            BufferedReader read = request.getReader();
            String line;
            while ((line = read.readLine()) != null) {
                sb.append(line);
            }
            JSONObject jsonData = new JSONObject(sb.toString());

            String landname = jsonData.getString("landName");
            String cropName = jsonData.getString("crop");
            float landArea = jsonData.getFloat("area");
            System.out.println(landname+" "+cropName+" "+landArea);
            JSONObject responseObject = new JSONObject();
            if (landname != null && cropName != null && landArea > 0.0 && !landname.trim().isEmpty()
                    && !cropName.trim().isEmpty()) {
                InvoiceDAO generate = new InvoiceDAO();
                Invoice invoice = generate.getInVoice(cropName, landArea);
                if (invoice != null) {
                    responseObject.put("responseCode", "200");
                    responseObject.put("message", "Invoice generated successful");
                    responseObject.put("Invoice", invoice.toString());
                } else {
                    responseObject.put("responseCode", "204");
                    responseObject.put("message", "The data is missing or unidenfied data");
                }
            } else {
                responseObject.put("responseCode", "205");
                responseObject.put("message", "Not a vaild data");
            }
            response.setContentType("Application/json");
            response.getWriter().write(responseObject.toString());

            
        } catch (Exception e) {
            // Handle any exceptions that might occur during processing
            response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
            JSONObject errorResponse = new JSONObject();
            errorResponse.put("responseCode", "500");
            errorResponse.put("message", "Internal Server Error");
            response.getWriter().write(errorResponse.toString());
        }
    }

}


















    // @Override
    // protected void doPost(HttpServletRequest request, HttpServletResponse
    // response) throws ServletException, IOException {
    // try {
    // StringBuilder sb = new StringBuilder();
    // BufferedReader read = request.getReader();
    // String line;
    // while((line=read.readLine())!=null){
    // sb.append(line);
    // }
    // JSONObject jsonData = new JSONObject(sb.toString());

    // String landname = jsonData.getString("landName");
    // String cropName=jsonData.getString("crop");
    // float landArea=jsonData.getFloat("area");
    // JSONObject responseObject = new JSONObject();
    // if(landname !=null && cropName !=null && landArea >0.0 &&
    // landname.trim().isEmpty() && cropName.trim().isEmpty()){
    // InvoiceDAO generate=new InvoiceDAO();
    // Invoice invoice= generate.getInVoice(cropName, landArea);
    // if(invoice !=null){
    // responseObject.put("responseCode", "200");
    // responseObject.put("message", "Invoice generated successful" );
    // responseObject.put("Invoice",invoice.toString());
    // }
    // else{
    // responseObject.put("responseCode", "204");
    // responseObject.put("message", "The data is missing or unidenfied data");
    // }
    // }
    // else {
    // responseObject.put("responseCode", "205");
    // responseObject.put("message", "Not a vaild data");
    // }
    // response.setContentType("Application/json");
    // response.getWriter().write(responseObject.toString());
    // // super.doPost(req, resp);

    // // response.setContentType("application/json");
    // // response.setCharacterEncoding("UTF-8");

    // // // Read JSON data from request
    // // StringBuilder sb = new StringBuilder();
    // // BufferedReader reader = request.getReader();
    // // String line;
    // // while ((line = reader.readLine()) != null) {
    // // sb.append(line);
    // // }

    // // JSONObject requestData = new JSONObject(sb.toString()); // Parse received
    // JSON
    // // // String pincode = requestData.getString("pincode");
    // // // int maxLandPrep = requestData.getInt("maxLandPrep");

    // // // Prepare response JSON
    // // JSONObject jsonResponse = InvoiceDAO.getJSONInvoice("Rice","3");

    // // PrintWriter out = response.getWriter();
    // // out.print(jsonResponse.toString());
    // // out.flush();

    // }