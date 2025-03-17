package com.yourcompany.Filter;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;
import com.yourcompany.JavaControl.Connection.DbConnection;
import com.yourcompany.JavaControl.Connection.JwtUtil;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class AuthFilter implements Filter {

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

    @Override
    public void destroy() {
        // TODO Auto-generated method stub
        Filter.super.destroy();
    }

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
            throws IOException, ServletException {

        HttpServletRequest req = (HttpServletRequest) request;
        HttpServletResponse res = (HttpServletResponse) response;
        // req.setAttribute("param1", "value1");
        Cookie[] cookies = req.getCookies();
        String S_id = "";
        if (cookies != null) {
            for (Cookie cookie : cookies) {
                if ("Uzhavan".equals(cookie.getName())) {
                    S_id = cookie.getValue();
                    break;
                }
            }
        }

        if (!S_id.isEmpty()) {
            JwtUtil jwtUtil = JwtUtil.getInstance();
            String token = jwtUtil.validateAndExtendTokeTradeShown(S_id);
            if (!token.isBlank() && token != null) {
                Cookie c = new Cookie("Uzhavan", token);
                c.setHttpOnly(false); // Prevent JavaScript access
                c.setSecure(false); // Disable secure flag for HTTP (enable it in production)
                c.setPath("/");
                res.addCookie(c);
                String email = jwtUtil.getEmail(token);
                req.setAttribute("email", email);
                System.out.println("\n\n\njwt   " + email);
                System.out.println("chain");
                chain.doFilter(request, response);

            }

        } else {
            res.sendError(HttpServletResponse.SC_UNAUTHORIZED, "Unauthorized");
        }
    }

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
        // TODO Auto-generated method stub
        Filter.super.init(filterConfig);
    }

    public static void main(String[] args) {

        JwtUtil jwtUtil = JwtUtil.getInstance();
        String S_id = jwtUtil.generateToken("raesakkiram@gmail.com");
        System.out.println(S_id);
        String token = jwtUtil.validateAndExtendTokeTradeShown(
                "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0QGdtYWlsLmNvbSIsImlhdCI6MTc0MDM5ODcxMSwiZXhwIjoxNzQxMDAzNTExfQ.1H6O0IJf0srkN5QdEEOdNzex6ad4OWR3XlZuX8VgTnc");
        if (!token.isBlank() && token != null) {

            Cookie c = new Cookie("Uzhavan", token);

            System.out.println("chain");

        }
    }
}