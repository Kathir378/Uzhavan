package com.yourcompany.servlets;

import java.io.IOException;
import java.util.Random;

import javax.servlet.ServletException;
import javax.servlet.http.*;
import javax.servlet.http.HttpServletRequest;

public class check extends HttpServlet {
    private int secretNumber;
    private int attempts;
    private final int maxAttempts = 10;

    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        System.out.println("This is a sample servlet response");
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String email = (String) request.getAttribute("email");
        // if(){

        // }
    }

}
