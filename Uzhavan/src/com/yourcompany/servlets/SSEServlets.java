// package com.yourcompany.servlets;

// import java.io.IOException;
// import java.io.PrintWriter;
// import java.text.SimpleDateFormat;
// import java.util.ArrayList;
// import java.util.Date;
// import java.util.List;
// import java.util.concurrent.CopyOnWriteArrayList;
// import java.util.concurrent.Executors;
// import java.util.concurrent.ScheduledExecutorService;
// import java.util.concurrent.TimeUnit;
// import javax.servlet.ServletException;
// import javax.servlet.annotation.WebServlet;
// import javax.servlet.http.HttpServlet;
// import javax.servlet.http.HttpServletRequest;
// import javax.servlet.http.HttpServletResponse;
// import javax.servlet.AsyncContext;

// // Uncomment this if using @WebServlet annotation
// // @WebServlet("/scheduled-notifications")
// public class SSEServlets extends HttpServlet {
//     private static final CopyOnWriteArrayList<PrintWriter> clients = new CopyOnWriteArrayList<>();
//     private static final List<String> messageHistory = new ArrayList<>();
//     private static final ScheduledExecutorService scheduler = Executors.newScheduledThreadPool(1);

//     @Override
//     public void init() throws ServletException {
//         super.init();
        
//         // Schedule Notifications
//         scheduleNotification("Scheduled Alert: Water your plants!", "2025-02-23 17:19:00");
//         scheduleNotification("Scheduled Alert: Check the weather!", "2025-02-23 17:18:00");
//         scheduleNotification("Scheduled Alert: Water your plants!", "2025-02-23 17:20:00");
//         scheduleNotification("Scheduled Alert: Check the weather!", "2025-02-23 17:22:00");
//     }

//     @Override
//     protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
//         response.setContentType("text/event-stream");
//         response.setCharacterEncoding("UTF-8");
//         response.setHeader("Cache-Control", "no-cache");
//         response.setHeader("Connection", "keep-alive");

//         // ✅ Allow CORS (Important if frontend is on a different domain)
//         response.setHeader("Access-Control-Allow-Origin", "*");
//         response.setHeader("Access-Control-Allow-Methods", "GET");
//         response.setHeader("Access-Control-Allow-Headers", "Content-Type");

//         PrintWriter out = response.getWriter();
//         clients.add(out);
//         out.flush(); // ✅ Ensure immediate connection

//         // ✅ Send all missed messages
//         synchronized (messageHistory) {
//             for (String message : messageHistory) {
//                 out.write("data: " + message + "\n\n");
//                 out.flush();
//             }
//         }

//         // ✅ Handle Asynchronous Processing (No Infinite Loop)
//         final AsyncContext asyncContext = request.startAsync();
//         asyncContext.setTimeout(0); // Keep connection open indefinitely
//     }

//     // ✅ Schedule a message at a specific date & time
//     private void scheduleNotification(String message, String dateTime) {
//         try {
//             SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
//             Date targetDate = dateFormat.parse(dateTime);
//             long delay = targetDate.getTime() - System.currentTimeMillis();

//             if (delay > 0) {
//                 scheduler.schedule(() -> sendNotification(message), delay, TimeUnit.MILLISECONDS);
//             }
//         } catch (Exception e) {
//             e.printStackTrace();
//         }
//     }

//     // ✅ Sends message to all connected clients & stores for offline users
//     public static void sendNotification(String message) {
//         synchronized (messageHistory) {
//             messageHistory.add(message); // Store missed messages
//         }

//         for (PrintWriter client : clients) {
//             try {
//                 client.write("data: " + message + "\n\n");
//                 client.flush();
//             } catch (Exception e) {
//                 clients.remove(client); // ✅ Remove disconnected clients
//             }
//         }
//     }
// }
