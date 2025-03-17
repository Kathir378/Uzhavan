package com.yourcompany.servlets;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONObject;

import com.yourcompany.JavaControl.DAO.UserDAO;
import com.yourcompany.JavaControl.Connection.JwtUtil;
import com.yourcompany.JavaView.User;

/**
 * Servlet implementation class LoginServ
 */
public class LogIn extends HttpServlet {

	/**
	 * @see HttpServletHttpServlet()
	 */
	public static void main(String[] args) {

	}



	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
	}


	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		try {
			// Read the request body
			StringBuilder sb = new StringBuilder();
			BufferedReader reader = request.getReader();
			String line;
			while ((line = reader.readLine()) != null) {
				sb.append(line);
			}
			JSONObject jsonData = new JSONObject(sb.toString());
			String password = jsonData.getString("password1");
			String email = jsonData.getString("email1");

			// Prepare the response object
			JSONObject responseObject = new JSONObject();

			// Validate input
			if (password != null && !password.trim().isEmpty() && password.matches("^.{6,}$") &&
				email != null && !email.trim().isEmpty() &&
				email.matches("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$")) {

				// Validate user credentials
				UserDAO db = new UserDAO();
				System.out.println("\n\n\nEmail"+email+"\n"+"password "+password);
				User user = db.validateUser(password, email);

				if (user != null) {
					// Generate a JWT token
					JwtUtil jwtUtil = JwtUtil.getInstance();
					String uniqueID = jwtUtil.generateToken(email);

					// Create and configure the cookie
					Cookie c = new Cookie("Uzhavan", uniqueID);
					c.setHttpOnly(false); // Prevent JavaScript access
					c.setSecure(false); // Disable secure flag for HTTP (enable it in production)
					c.setPath("/"); // Make the cookie accessible across all paths
					// c.setMaxAge(1200); // Set expiration time (20 minutes)

					// Add the cookie to the response
					response.addCookie(c);

					// Debug: Log the cookie details
					System.out.println("\n\n\nCookie set: Name=" + c.getName() + ", Value=" + c.getValue());

					// Build the JSON response
					responseObject.put("responseCode", "200");
					responseObject.put("message", "Login successful! Welcome ");
				} else {
					responseObject.put("responseCode", "204");
					responseObject.put("message", "Invalid credentials.");
				}
			} else {
				responseObject.put("responseCode", "205");
				responseObject.put("message", "Please enter a valid username and password.");
			}

			// Set CORS headers (if needed)
			response.setHeader("Access-Control-Allow-Origin", "https://jsurya-7777-8443.zcodeusers.in/"); // Replace with your frontend URL
			response.setHeader("Access-Control-Allow-Credentials", "true"); // Allow sending cookies

			// Write the JSON response
			response.setContentType("application/json");
			PrintWriter out = response.getWriter();
			out.write(responseObject.toString());
			out.flush();

		} catch (Exception e) {
			// Log any exceptions
			System.out.println("Error in doPost: " + e.getMessage());
			e.printStackTrace();
		}
	}
}
