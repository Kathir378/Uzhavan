package com.yourcompany.JavaControl.DAO;

import java.sql.DriverManager;
import com.yourcompany.JavaView.User;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Base64;
import com.yourcompany.JavaControl.Connection.DbConnection;

public class UserDAO {

    public static String encryptPass(String pass) {
        String encodedString = Base64.getMimeEncoder().encodeToString(pass.getBytes());
        return encodedString;
    }

    public static User validateUser(String password, String email) {
        System.out.println("\n\n\nEntered into validateUser\nEmail: " + email + "  Pass: " + password + "\n\n\n");
        Connection connection = DbConnection.getConnection();
        password = encryptPass(password);
        try {
            PreparedStatement stmt = connection.prepareStatement("select * from Users where email = ? && password = ?");
            stmt.setString(1, email);
            stmt.setString(2, password);
            ResultSet m = stmt.executeQuery();
            if (m.next()) {
                System.out.println(m.getString(2));
                User user = new User(m.getString(2), m.getString(3), m.getString(4), m.getString(5));
                return user;
            }
            return null;
        } catch (SQLException e) {
            System.out.println(" validation Sql");
        }

        return null;
    }

    public static boolean boolValidation(String pass, String email) {
        try {
            System.out.println("\n\n\nEntered into boolvalidation\nEmail: " + email + "  Pass: " + pass + "\n\n\n");
            User u = validateUser(pass, email);
            if (u.getName() != null) {
                return true;
            }
            return false;
        } catch (Exception e) {
            e.printStackTrace();
            // System.out.println();
        }
        return false;
    }

    public User getUser(String email) {
        Connection connection = DbConnection.getConnection();
        try {
            PreparedStatement stmt = connection.prepareStatement("select * from Users where email = ?");
            stmt.setString(1, email);
            ResultSet m = stmt.executeQuery();
            if (m.next()) {
                System.out.println(m.getString(2));
                User user = new User(m.getString(2), m.getString(3), m.getString(4), m.getString(5));
                return user;
            }
            return null;
        } catch (SQLException e) {
            System.out.println(" validation Sql");
        }

        return null;
    }

    public boolean isExit(String email) {
        Connection connection = DbConnection.getConnection();
        try {
            PreparedStatement isExit = connection.prepareStatement("select email from Users where email=?");
            isExit.setString(1, email);
            ResultSet m = isExit.executeQuery();
            if (m.next()) {
                return true;
            }
        } catch (SQLException e) {
            System.out.println("exception while checking is user Eixt Sql");
        }
        return false;
    }

    public boolean addUser(String userName, String password, String phoneNo, String email) {
        Connection connection = DbConnection.getConnection();
        password = encryptPass(password);

        if (connection == null) {
            System.out.println("The Servlet is Not working ");
        }
        try {
            PreparedStatement add = connection
                    .prepareStatement("insert into Users (Name, password, Phone_No,email) VALUES (?, ?, ?, ?)");
            add.setString(1, userName);
            add.setString(2, password);
            add.setString(3, phoneNo);
            add.setString(4, email);
            System.out.println("checking");
            int i = add.executeUpdate();
            System.out.println("User added SuccessFully");
            if (i > 0) {
                return true;
            }
        } catch (SQLException e) {
            System.out.println(" Exception while adding user Sql");
        }
        return false;
    }

    public static String[] retrieveUserDetails(String email) {
        System.out.println("\n\n\nEntered into DAO");
        String query = "SELECT Name, Phone_No FROM Users WHERE email = ?";
        String[] strArr = new String[2]; // Array to hold name and phone number

        try (Connection connection = DbConnection.getConnection();
                PreparedStatement preparedStatement = connection.prepareStatement(query)) {

            preparedStatement.setString(1, email);

            // Execute the query and handle ResultSet
            try (ResultSet resultSet = preparedStatement.executeQuery()) {
                if (resultSet.next()) {
                    String name = resultSet.getString("Name");
                    String phoneNo = resultSet.getString("Phone_No");
                    strArr[0] = name;
                    strArr[1] = phoneNo;

                    // Log the retrieved data for debugging
                    System.out.println("\n\n\nName: " + name + ", Phone: " + phoneNo + ", Email: " + email + "\n\n\n");
                } else {
                    System.out.println("No user found for email: " + email);
                }
            }
        } catch (SQLException e) {
            System.err.println("SQL Error: " + e.getMessage());
        }
        return strArr;
    }

    public static String changePass(String email, String oldPass, String newPass) {
        newPass = encryptPass(newPass);
        // oldPass = encryptPass(oldPass);
        System.out.println("\n\n\nEntered into DAO PassChange\n\n\n");
        String query = "update Users set password = ? where email = ?";

        if (boolValidation(oldPass, email)) {
            try (Connection connection = DbConnection.getConnection();
                    PreparedStatement preparedStatement = connection.prepareStatement(query)) {

                preparedStatement.setString(1, newPass);
                preparedStatement.setString(2, email);

                // Execute the query and handle ResultSet
                
                    int resultSet = preparedStatement.executeUpdate();
                    if (resultSet>0) {
                        System.out.println("\n\n\nName: " + email + "\n\n\nPassChanged");
                        return "Changed";
                    } else {
                        System.out.println("No user found for email: " + email);
                        return "no user found";
                    }
                
            } catch (SQLException e) {
                System.err.println("SQL Error: " + e.getMessage());
            }
        } else {
            return "Old Password is not correct";
        }
        return "vera etho prblm";
    }

    public static void main(String[] args) {
        // changePass("demo@gmail.com", "aaaaaaaaa", "ppppppppp");
    }
}

// package com.yourcompany.JavaControl.DAO;

// import java.sql.Connection;
// import java.sql.PreparedStatement;
// import java.sql.ResultSet;
// import java.sql.SQLException;
// import java.util.Base64;

// import com.yourcompany.JavaView.User;
// import com.yourcompany.JavaControl.Connection.DbConnection;

// public class UserDAO {

// // Encrypt password using Base64 (replace with a secure hashing algorithm)
// public static String encryptPass(String pass) {
// return Base64.getEncoder().encodeToString(pass.getBytes());
// }

// // Validate user credentials
// public static User validateUser(String password, String email) {
// System.out.println("\n\n\nEntered into validateUser\nEmail: " + email + "
// Pass: " + password + "\n\n\n");
// password = encryptPass(password);
// String query = "SELECT * FROM Users WHERE email = ? AND password = ?";
// try (Connection connection = DbConnection.getConnection();
// PreparedStatement stmt = connection.prepareStatement(query)) {
// stmt.setString(1, email);
// stmt.setString(2, password);
// ResultSet rs = stmt.executeQuery();
// if (rs.next()) {
// return new User(rs.getString("Name"), rs.getString("password"),
// rs.getString("Phone_No"), rs.getString("email"));
// }
// } catch (SQLException e) {
// System.err.println("Validation SQL Error: " + e.getMessage());
// }
// return null;
// }

// // Boolean validation for old password
// public static boolean boolValidation(String pass, String email) {
// System.out.println("\n\n\nEntered into boolValidation\nEmail: " + email + "
// Pass: " + pass + "\n\n\n");
// try {
// // String encryptedPass = encryptPass(pass);
// String query = "SELECT COUNT(*) FROM Users WHERE email = ? AND password = ?";
// try (Connection connection = DbConnection.getConnection();
// PreparedStatement stmt = connection.prepareStatement(query)) {
// stmt.setString(1, email);
// stmt.setString(2, pass);
// ResultSet rs = stmt.executeQuery();
// if (rs.next()) {
// return rs.getInt(1) > 0; // Return true if a match is found
// }
// }
// } catch (SQLException e) {
// System.err.println("Validation SQL Error: " + e.getMessage());
// }
// return false;
// }

// // Change user password
// public static String changePass(String email, String oldPass, String newPass)
// {
// String encryptedOldPass = encryptPass(oldPass);
// String encryptedNewPass = encryptPass(newPass);

// System.out.println("\n\n\nEntered into DAO PassChange\n\n\n");

// if (!boolValidation(encryptedOldPass, email)) {
// return "Old password is incorrect.";
// }

// String query = "UPDATE Users SET password = ? WHERE email = ?";
// try (Connection connection = DbConnection.getConnection();
// PreparedStatement stmt = connection.prepareStatement(query)) {
// stmt.setString(1, encryptedNewPass);
// stmt.setString(2, email);

// int rowsAffected = stmt.executeUpdate();
// if (rowsAffected > 0) {
// System.out.println("\n\n\nPassword changed successfully for email: " + email
// + "\n\n\n");
// return "Changed";
// } else {
// System.out.println("No user found for email: " + email);
// return "No user found.";
// }
// } catch (SQLException e) {
// System.err.println("SQL Error: " + e.getMessage());
// return "An error occurred while updating the password.";
// }
// }

// // Retrieve user details
// public static String[] retrieveUserDetails(String email) {
// System.out.println("\n\n\nEntered into DAO");
// String query = "SELECT Name, Phone_No FROM Users WHERE email = ?";
// String[] strArr = new String[2]; // Array to hold name and phone number

// try (Connection connection = DbConnection.getConnection();
// PreparedStatement stmt = connection.prepareStatement(query)) {
// stmt.setString(1, email);
// ResultSet rs = stmt.executeQuery();

// if (rs.next()) {
// strArr[0] = rs.getString("Name");
// strArr[1] = rs.getString("Phone_No");
// System.out.println("\n\n\nName: " + strArr[0] + ", Phone: " + strArr[1] + ",
// Email: " + email + "\n\n\n");
// } else {
// System.out.println("No user found for email: " + email);
// }
// } catch (SQLException e) {
// System.err.println("SQL Error: " + e.getMessage());
// }
// return strArr;
// }

// // Main method for testing
// public static void main(String[] args) {
// String result = changePass("demo@gmail.com", "aaaaaaaaa", "ppppppppp");
// System.out.println("Change Password Result: " + result);
// }
// }