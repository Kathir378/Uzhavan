package com.yourcompany.JavaControl.DAO;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Timestamp;
import java.time.Duration;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;

import org.json.JSONArray;
import org.json.JSONObject;

import com.yourcompany.JavaControl.Connection.DbConnection;

 public class NotificationDAO {
// 	   public static void main(String[] args) {
//         Timer timer = new Timer();
//         // Run the task every hour (3600000 milliseconds)
//         timer.schedule(new CheckNotificationsTask(), 0, 3600000);
//     }
// }

// // // Task to check for expired notifications
// class CheckNotificationsTask extends TimerTask {
//     @Override
//     public void run() {
//         try {

//             // SQL query to find expired notifications (older than 1 hour)
//             String query = "SELECT id, user_id, message FROM notifications WHERE TIMESTAMPDIFF(HOUR, created_at, NOW()) >= 1 AND status = 'unread'";
//             PreparedStatement stmt = conn.prepareStatement(query);
//             ResultSet rs = stmt.executeQuery();

//             while (rs.next()) {
//                 int notificationId = rs.getInt("id");
//                 int userId = rs.getInt("user_id");
//                 String message = rs.getString("message");

//                 // Send notification
//                 sendNotification(userId, message);

//                 // Mark notification as read
//                 markAsRead(conn, notificationId);
//             }

//         } catch (SQLException e) {
//             e.printStackTrace();
//         }
//     }

    public static void main(String[] args) {
        // System.out.println(FarmDAO.getFieldId("627601","yyyyo"));
        NotificationDAO l= new NotificationDAO();
        System.out.println(l.notification("admin@gmail.com"));
        // l.createNotification("Wheat", "siva@gmail.com", "627601", "yyyyo");
    //    createNotification("Banana","demo@gmail.com");
    // //    for(int i=0;i<in.length;i++){
    // //     System.err.println(in[i]);
    // //    }
    //    System.out.println(Timestamp.valueOfZonedDateTime.now(ZoneId.of("Asia/Kolkata")));
    }
 public  void createNotification(String cropName, String user,String pincode,String surveyNo) {
    String selectQuery = "SELECT message FROM cropNotification WHERE cropId = (SELECT id FROM Crops WHERE name = ?)";
    String insertQuery = "INSERT INTO notifications (user_id, message, status, created_at,farm_id) VALUES ((SELECT id FROM Users WHERE email = ?), ?, ?, ?,?)";
    int farm_id=FarmDAO.getFieldId(pincode, surveyNo);
    try (Connection connection = DbConnection.getConnection();
         PreparedStatement stmt = connection.prepareStatement(selectQuery);
         PreparedStatement insertStmt = connection.prepareStatement(insertQuery)) {

        // Fetch notification message
        stmt.setString(1, cropName);
        ResultSet rs = stmt.executeQuery();

        if (rs.next()) {
            JSONObject jsonObject = new JSONObject(rs.getString("message"));
            LocalDateTime currentDate = LocalDateTime.now();

            // Iterate through all keys in the JSON object
            for (String key : jsonObject.keySet()) {
                try {
                    int minutesOffset = Integer.parseInt(key); // Convert key to integer (time offset in minutes)
                    String message = jsonObject.getJSONObject(key).toString();
                    Timestamp createdAt =Timestamp.from(ZonedDateTime.now(ZoneId.of("Asia/Kolkata")).plusMinutes(minutesOffset).toInstant()); // Add offset in minutes
                    insertStmt.setString(1, user);
                    insertStmt.setString(2, message);
                    insertStmt.setString(3, "unread");
                    insertStmt.setTimestamp(4, createdAt);
                    insertStmt.setInt(5,farm_id);

                    insertStmt.addBatch(); // Add to batch for efficient insertion
                } catch (NumberFormatException e) {
                    System.err.println("Invalid JSON key format: " + key); // Handle non-integer keys safely
                }
            }
            insertStmt.executeBatch(); // Execute batch insert
        }
        rs.close(); // Close ResultSet

    } catch (SQLException e) {
        e.printStackTrace(); // Print the error
    }
}


     private static String getTimeAgo(Timestamp timestamp) {
        LocalDateTime now = LocalDateTime.now();
        LocalDateTime time = timestamp.toInstant().atZone(ZoneId.systemDefault()).toLocalDateTime();
        Duration duration = Duration.between(time, now);

        long seconds = duration.getSeconds();
        long minutes = seconds / 60;
        long hours = minutes / 60;
        long days = hours / 24;

        if (seconds < 60) {
            return "Just now";
        } else if (minutes < 60) {
            return minutes + " minutes ago";
        } else if (hours < 24) {
            return hours + " hours ago";
        } else if (days == 1) {
            return "Yesterday";
        } else if (days < 7) {
            return days + " days ago";
        } else {
            DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
            return time.format(formatter);
        }
    }
    public void createNotification(JSONObject i,String user,String pincode,String surveyNo){
            String insertQuery = "INSERT INTO notifications (user_id, message, status, created_at,farm_id) VALUES ((SELECT id FROM Users WHERE email = ?), ?, ?, ?,?)";
      try (Connection connection = DbConnection.getConnection()){;
         PreparedStatement insertStmt = connection.prepareStatement(insertQuery);




         //✅ Fixed missing semicolon

        int farm_id = FarmDAO.getFieldId(pincode, surveyNo);
        String message = i.toString();
        Timestamp createdAt = Timestamp.from(ZonedDateTime.now(ZoneId.of("Asia/Kolkata")).toInstant()); // ✅ Fixed Timestamp issue
        System.out.println(createdAt);
        insertStmt.setString(1, user);  // Assuming 'user' is email
        insertStmt.setString(2, message);
        insertStmt.setString(3, "unread");
        insertStmt.setTimestamp(4, createdAt);
        insertStmt.setInt(5, farm_id);
        insertStmt.executeUpdate();
    } catch (SQLException e) {
        e.printStackTrace(); // Consider using a logger instead
    }
    }
    public  JSONArray notification(String userId){
    try(Connection connection=DbConnection.getConnection()){
        
        String query = "SELECT n.*, f.name AS farmland_name ,n.status FROM notifications n JOIN FarmLands f ON n.farm_id = f.id WHERE n.user_id = (SELECT id FROM Users WHERE email = ?) AND  n.created_at <= NOW() + INTERVAL 5 HOUR + INTERVAL 30 MINUTE ORDER BY n.created_at DESC";
        String query1="UPDATE notifications SET status = 'read' WHERE user_id = (SELECT id FROM Users WHERE email = ?) AND status = 'unread' AND created_at <= NOW() + INTERVAL 5 HOUR + INTERVAL 30 MINUTE";
        PreparedStatement stmt = connection.prepareStatement(query);
        PreparedStatement stmt1 = connection.prepareStatement(query1);
        stmt.setString(1, userId); 
        stmt1.setString(1, userId);
        stmt1.executeUpdate();
        ResultSet rs=stmt.executeQuery();
        JSONArray output = new JSONArray();
        
        while(rs.next()){   
            String jsonMessage = rs.getString("message");
            JSONObject message = new JSONObject(jsonMessage);
            message.put("time",getTimeAgo(rs.getTimestamp("created_at")));
            message.put("farm_name",rs.getString("farmland_name"));        
            message.put("status",rs.getString("status"))  ;
            output.put(message);
        }
        return output;
    }
   catch (SQLException e) {
     e.printStackTrace();
     }
     return null;
    }
}