package com.yourcompany.servlets;
import java.io.BufferedReader;
import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONObject;

import com.yourcompany.JavaControl.DAO.FarmDAO;
import com.yourcompany.JavaControl.DAO.NotificationDAO;
import com.yourcompany.JavaControl.DAO.UserDAO;
import com.yourcompany.JavaControl.api.PinToGeoLocation;

public class FieldAddServlet extends HttpServlet {


    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
       try {
			System.out.println("Yes Connected1");
			// String email=(String)request.getAttribute("email");
			StringBuilder sb = new StringBuilder();

			BufferedReader read = request.getReader();
			String line;
            while((line=read.readLine())!=null){
                sb.append(line);
			}

           
			JSONObject jsonData = new JSONObject(sb.toString());
			String email=(String)request.getAttribute("email");
            // String email = jsonData.getString("email");
			String farmName = jsonData.getString("farmName");
            float size = jsonData.getFloat("landSize");
			String pincode = jsonData.getString("pinCode");

            String crop= jsonData.getString("crop");
            String surveyNumber = jsonData.getString("surveyNo");

            String[] stateAndDistrict = PinToGeoLocation.pinToGeoLocation(pincode);
			String district = stateAndDistrict[2];
            String state= stateAndDistrict[3];
            System.out.println("     " +farmName+size+pincode+district+state+crop+email+surveyNumber);
			JSONObject responseObject = new JSONObject();
            UserDAO verify=new UserDAO();
			if (farmName != null && !farmName.trim().isEmpty() && email != null && !email.trim().isEmpty()
			      && pincode != null && !pincode.trim().isEmpty() && district  != null && !district.trim().isEmpty()&&verify.isExit(email) ) {
                    FarmDAO farm =new FarmDAO();
                    System.out.println(farmName+size+pincode+district+state+crop+email+surveyNumber+"\n\n\n\n\n\n");
                if(farm.addfield(farmName, size, pincode, district, state, crop, 0, email, surveyNumber)){
					// NotificationDAO note=new NotificationDAO();
					// note.createNotification(crop, email,pincode,surveyNumber); 
					responseObject.put("responseCode", "200");
					responseObject.put("message", "Land added successfully" );
                }
                else {
					responseObject.put("responseCode", "101");
					responseObject.put("message", "the land is already register");

				}

				}
			    else {
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
        //super.doPost(req, resp);
    }	
}