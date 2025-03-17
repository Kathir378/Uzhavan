package com.yourcompany.JavaControl.Connection;

import java.util.Date;

import javax.crypto.SecretKey;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.yourcompany.JavaControl.DAO.UserDAO;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
// import models.dao.UserDAO;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;

public class JwtUtil {

	private static final String SECRET = "uLD6znrRh/pz1+pnrgcuSgvNG5rNReeuRBeh+EydeR8=";

	private static final SecretKey SECRET_KEY = Keys.hmacShaKeyFor(Decoders.BASE64.decode(SECRET));
    
	static JwtUtil jwtUtil = null;
	private JwtUtil() {
		
	}
	
	public static JwtUtil getInstance() {
		if(jwtUtil == null) {
			jwtUtil = new JwtUtil();
		}
		return jwtUtil;
	}

        public String generateToken(String email) {
        return Jwts.builder()
                .subject(email) // New method in JJWT 0.12.6
                .issuedAt(new Date()) 
                .expiration(new Date(System.currentTimeMillis() + 7 * 24 * 60 * 60 * 1000)) // 7 days expiry
                .signWith(SECRET_KEY) // Sign with secure key
                .compact();
    }

	public String validateAndExtendTokeTradeShown(String token) {
        try {
            Claims claims = Jwts.parser()
                    .verifyWith(SECRET_KEY)
                    .build()
                    .parseSignedClaims(token)
                    .getPayload();
            String email = claims.getSubject();
            System.out.println(email);
            UserDAO sdb=new UserDAO();
            if(sdb.isExit(email)) {
                // req.setAttribute("email", email);
            	Date expiration = claims.getExpiration();
                long remainingTime = expiration.getTime() - System.currentTimeMillis();
                // If the token is close to expiring (e.g., < 10 minutes left), extend it
                if (remainingTime < 4L * 24 * 60 * 60 * 1000) { 
                    return generateToken(claims.getSubject()); // Generate a new token
                }
                return token;
            }
            else {
            	throw new RuntimeException("Token expired, please log in again.");    
            }
           
            
            
        } catch (ExpiredJwtException e) {
            throw new RuntimeException("Token expired, please log in again.");
            
        } catch (JwtException e) {
            throw new RuntimeException("Invalid token.");
        }
      
    }
    public  String getEmail(String token){
          Claims claims = Jwts.parser()
                    .verifyWith(SECRET_KEY)
                    .build()
                    .parseSignedClaims(token)
                    .getPayload();
            String email = claims.getSubject();
            return email;
    }

}