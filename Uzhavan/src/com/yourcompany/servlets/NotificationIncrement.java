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

import com.yourcompany.JavaControl.DAO.NotificationDAO;

public class NotificationIncrement extends HttpServlet {

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
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
         try {
            StringBuilder sb = new StringBuilder();
            BufferedReader read = request.getReader();
            String line;
            while ((line = read.readLine()) != null) {
                sb.append(line);
            }
            JSONObject jsonData = new JSONObject(sb.toString());
            String today = "You completed the task";
            String nextDay = jsonData.getString("nextday");
        String pincode = jsonData.getString("pincode");
            String surveyNumber = jsonData.getString("surveyNo");
           String email = (String) request.getAttribute("email");
           JSONObject jsontoday=new JSONObject();
           jsontoday.put("Producer Notification",today);
           jsontoday.put("title","Task Completed");
           JSONObject jsonNext=new JSONObject();
            jsonNext.put("Producer Notification",nextDay);
           jsonNext.put("title","Today task Completed");
            NotificationDAO noti=new NotificationDAO();
            noti.createNotification(jsontoday, email, pincode, surveyNumber);
            noti.createNotification(jsonNext, email, pincode, surveyNumber);
            JSONObject responseObject = new JSONObject();
            responseObject.put("responseCode", "200");
			responseObject.put("message", "Land added successfully" );
            response.setContentType("application/json");

            response.getWriter().write(responseObject.toString());
            response.getWriter().flush();
    
    }
    catch (Exception e) {
        System.out.println(e);
            // Handle any exceptions that might occur during processing
            // response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
            // JSONObject errorResponse = new JSONObject();
            // errorResponse.put("responseCode", "500");
            // errorResponse.put("message", "Internal Server Error");
            // response.getWriter().write(errorResponse.toString());
        }}

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