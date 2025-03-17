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
import com.yourcompany.JavaControl.DAO.UserDAO;

public class AddfarmCheck extends HttpServlet {

    @Override
    protected void doDelete(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        // TODO Auto-generated method stub
        super.doDelete(req, resp);
    }

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        // TODO Auto-generated method stub
        super.doGet(req, resp);
    }

    @Override
    protected void doHead(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        // TODO Auto-generated method stub
        super.doHead(req, resp);
    }

    @Override
    protected void doOptions(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        // TODO Auto-generated method stub
        super.doOptions(req, resp);
    }

    @Override
protected void doPost(HttpServletRequest request, HttpServletResponse response)
        throws ServletException, IOException {
    try {
        System.out.println("\n\nEntered into AddFarm Check");
        StringBuilder sb = new StringBuilder();
        BufferedReader reader = request.getReader();
        String line;
        while ((line = reader.readLine()) != null) {
            sb.append(line);
        }
        JSONObject jsonData = new JSONObject(sb.toString());
        String email = (String) request.getAttribute("email");
        System.out.println(email);
        String pincode = jsonData.getString("pinCode");
        String surveyNumber = jsonData.getString("surveyNo");
        UserDAO verify = new UserDAO();
        JSONObject responseObject = new JSONObject();

        if (email != null && !email.trim().isEmpty()
                && pincode != null && !pincode.trim().isEmpty() && surveyNumber != null
                && !surveyNumber.trim().isEmpty() && verify.isExit(email)) {
            if (!(FarmDAO.isExit(pincode, surveyNumber))) {
                responseObject.put("responseCode", "200");
                responseObject.put("message", "The entry is OK");
            } else {
                responseObject.put("responseCode", "101");
                responseObject.put("message", "Pincode and SurveyNo already exist");
            }
        } else {
            responseObject.put("responseCode", "204");
            responseObject.put("message", "Invalid credentials");
        }

        response.setContentType("application/json");
        PrintWriter out = response.getWriter();
        out.write(responseObject.toString());
        out.flush();
        out.close();
    } catch (Exception e) {
        System.out.println(e.getMessage());
        JSONObject errorResponse = new JSONObject();
        errorResponse.put("responseCode", "500");
        errorResponse.put("message", "Internal Server Error: " + e.getMessage());
        response.setContentType("application/json");
        response.getWriter().write(errorResponse.toString());
    }
}

    @Override
    protected void doPut(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        // TODO Auto-generated method stub
        super.doPut(req, resp);
    }

    @Override
    protected void doTrace(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        // TODO Auto-generated method stub
        super.doTrace(req, resp);
    }

    @Override
    protected long getLastModified(HttpServletRequest req) {
        // TODO Auto-generated method stub
        return super.getLastModified(req);
    }

    @Override
    protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        // TODO Auto-generated method stub
        super.service(req, resp);
    }

    @Override
    public void service(ServletRequest req, ServletResponse res) throws ServletException, IOException {
        // TODO Auto-generated method stub
        super.service(req, res);
    }

    @Override
    public void destroy() {
        // TODO Auto-generated method stub
        super.destroy();
    }

    @Override
    public String getInitParameter(String name) {
        // TODO Auto-generated method stub
        return super.getInitParameter(name);
    }

    @Override
    public Enumeration<String> getInitParameterNames() {
        // TODO Auto-generated method stub
        return super.getInitParameterNames();
    }

    @Override
    public ServletConfig getServletConfig() {
        // TODO Auto-generated method stub
        return super.getServletConfig();
    }

    @Override
    public ServletContext getServletContext() {
        // TODO Auto-generated method stub
        return super.getServletContext();
    }

    @Override
    public String getServletInfo() {
        // TODO Auto-generated method stub
        return super.getServletInfo();
    }

    @Override
    public String getServletName() {
        // TODO Auto-generated method stub
        return super.getServletName();
    }

    @Override
    public void init() throws ServletException {
        // TODO Auto-generated method stub
        super.init();
    }

    @Override
    public void init(ServletConfig config) throws ServletException {
        // TODO Auto-generated method stub
        super.init(config);
    }

    @Override
    public void log(String message) {
        // TODO Auto-generated method stub
        super.log(message);
    }

    @Override
    public void log(String message, Throwable t) {
        // TODO Auto-generated method stub
        super.log(message, t);
    }

    @Override
    protected Object clone() throws CloneNotSupportedException {
        // TODO Auto-generated method stub
        return super.clone();
    }

    @Override
    public boolean equals(Object obj) {
        // TODO Auto-generated method stub
        return super.equals(obj);
    }

    @Override
    protected void finalize() throws Throwable {
        // TODO Auto-generated method stub
        super.finalize();
    }

    @Override
    public int hashCode() {
        // TODO Auto-generated method stub
        return super.hashCode();
    }

    @Override
    public String toString() {
        // TODO Auto-generated method stub
        return super.toString();
    }

}