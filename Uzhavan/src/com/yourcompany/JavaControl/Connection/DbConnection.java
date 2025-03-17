package com.yourcompany.JavaControl.Connection;

import java.sql.Connection;
import java.sql.DriverManager;

public class DbConnection {
    static public Connection connection  = null;

    private DbConnection(){
        
    }
    public static void create (String url,String user,String password){ 

        try {
          Class.forName("com.mysql.cj.jdbc.Driver");
        } catch (ClassNotFoundException e) {
           System.out.println("Driver not found");
        }       
            try {
                connection = DriverManager.getConnection(url, user, password);  
            } catch (Exception e) {
                System.out.println(e.getMessage());
            }
    }

    public static Connection getConnection(){
        try {
                connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/agriApp", "root", "farmer");  
            } catch (Exception e) {
                System.out.println(e.getMessage());
            }
        return connection;
    }
}