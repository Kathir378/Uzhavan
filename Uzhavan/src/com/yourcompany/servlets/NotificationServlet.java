package com.yourcompany.servlets;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONArray;
import org.json.JSONObject;

import com.yourcompany.JavaControl.DAO.NotificationDAO;

public class NotificationServlet extends HttpServlet {

    

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse response) throws ServletException, IOException {
       
        String email= (String)req.getAttribute("email");
        JSONObject responseObject = new JSONObject();
        if(email!=null&&!email.isBlank()){
            NotificationDAO sender=new NotificationDAO();
            JSONArray j=sender.notification(email);
            responseObject.put("responseCode", "200");
			responseObject.put("message",j.toString());
        }
        else{
             responseObject.put("responseCode", "404");
			responseObject.put("message","Something went wrong");
        }
             response.setContentType("application/json");
			PrintWriter out = response.getWriter();
			out.write(responseObject.toString());
			out.flush();
       // super.doPost(req, resp);
    }

    @Override
    protected void doPut(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        // TODO Auto-generated method stub
        super.doPut(req, resp);
    }

 
	
}