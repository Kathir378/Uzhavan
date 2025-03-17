package com.yourcompany.servlets;
import java.io.BufferedReader;
import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONObject;

import com.yourcompany.JavaControl.DAO.UserDAO;
public class SignUp extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        super.doGet(req, resp);
    }

 

 
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        try {
			
			StringBuilder sb=new StringBuilder();
			BufferedReader read=request.getReader();
			String line;
			while((line=read.readLine())!=null) {
				sb.append(line);
			}
            UserDAO db =new UserDAO();
            JSONObject jsonData=new JSONObject(sb.toString());
            System.out.println("Connection 1");
            String username=jsonData.getString("username1");
			String password=jsonData.getString("password1");
            
			String phoneNumber=jsonData.getString("phoneNumber1");
            String email=jsonData.getString("email1");
// && !username.trim().isEmpty() &&username.matches("^.{,40}$") && password != null && !password.trim().isEmpty()&&password.matches("^.{6,10}$")&& phoneNumber != null && !phoneNumber.trim().isEmpty() && phoneNumber.matches("^[6-9]\\d{9}$")

            JSONObject responseObject=new JSONObject();
            System.out.println("Connection 2");
            
            if (username != null && !username.trim().isEmpty() && // Username is not null and not empty
                password != null && !password.trim().isEmpty() && password.matches("^.{6,}$") && // Password is not null, not empty, and at least 6 characters
                phoneNumber != null && !phoneNumber.trim().isEmpty() && phoneNumber.matches("^[6-9]\\d{9}$") && // Phone number is valid (10 digits starting with 6-9)
                email != null && !email.trim().isEmpty() && email.matches("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$") // Email is valid
            ){
                			
                if (db.isExit(email)){
                    System.out.println(username+" "+password+" "+phoneNumber);
                 responseObject.put("responseCode", "121");
				 responseObject.put("message", "User have already exit");
               			
                }
                else{
                   db.addUser(username, password, phoneNumber,email);
                   responseObject.put("responseCode", "200");
                   responseObject.put("message", "User successfully registered");
                System.err.println(username+" "+password+" "+phoneNumber);

                //    responseObject.put("responseCode", "200");
				// 	responseObject.put("message", "Login successful! Welcome, "+ user); 
                }
                  
            }
            else{
                responseObject.put("responseCode", "205");
				responseObject.put("message", "Please enter a valid username and password.");
            }
            response.setContentType("Application/json");
		response.getWriter().write(responseObject.toString());

       // super.doPost(request, resp);
    }
    catch(Exception e){}
  
	
}
}






