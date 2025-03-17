package com.yourcompany.servlets;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONArray;
import org.json.JSONObject;

import com.yourcompany.JavaControl.DAO.FarmDAO;

public class GetField  extends HttpServlet{

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {       
			StringBuilder sb = new StringBuilder();
			BufferedReader reader = request.getReader();
			String line;
			while ((line = reader.readLine()) != null) {
				sb.append(line);
			}
			JSONObject jsonData = new JSONObject(sb.toString());
			String email=(String)request.getAttribute("email");
            System.out.println(email);
            // String email = "admin@gmail.com";

            
            System.out.println("Yes Connected3"+email);        

			JSONObject responseObject = new JSONObject();
            if (email!=null&&!email.isBlank()){
                FarmDAO verfy=new FarmDAO();
                JSONArray output=verfy.getField(email);
                System.out.println("Yes Connected4");        

                if(output!=null){
                  responseObject.put("responseCode", "200");
				  responseObject.put("message", output.toString());          
                }
                else{
                    responseObject.put("responseCode", "202");
				    responseObject.put("message", "Something wrong");
                }
            }
            else{
                responseObject.put("responseCode", "401");
				responseObject.put("message", "the input is invaild");
            }
            System.out.println("Yes Connected final");        

            response.setContentType("application/json");
			PrintWriter out = response.getWriter();
			out.write(responseObject.toString());
			out.flush();
    }

    @Override
    public String toString() {
        // TODO Auto-generated method stub
        return super.toString();
    }
	
}