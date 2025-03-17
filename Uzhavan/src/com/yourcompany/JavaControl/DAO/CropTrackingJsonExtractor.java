package com.yourcompany.JavaControl.DAO;

import java.sql.Connection;
import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.temporal.ChronoUnit;
import java.time.temporal.Temporal;
import java.util.LinkedHashMap;
import java.util.Set;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Comparator;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.TreeMap;

import org.json.JSONObject;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.yourcompany.JavaControl.Connection.DbConnection;

public class CropTrackingJsonExtractor {
    static Connection connection = DbConnection.getConnection();

    static  public JSONObject getProcedureForCrop(String cName){
      String sql = "SELECT dailyProcedure  FROM cropTracking ct JOIN Crops c ON ct.cropId = c.id WHERE c.name = ?;"; // Adjust cropId as needed
      JSONObject jsonObject =null;
       try {
         PreparedStatement stmt = connection.prepareStatement(sql);
         stmt.setString(1,cName);
         ResultSet rs =   stmt.executeQuery();
         if(rs.next()){
             String json =rs.getString(1);
             jsonObject = new JSONObject(json);
           }
        }
         catch (Exception e) {
           e.getMessage();
        }
        return jsonObject;
    }


    private static int FirstNumber(String day) {
        String num = day.replaceAll("\\D+", " ").trim().split(" ")[0];  // Extract first number
        return Integer.parseInt(num);
    }

    static public String getLastDay(String name){
      String lastDay = "Day";
        String sql = "SELECT JSON_KEYS(ct.dailyProcedure, '$.\"Post-Harvest\"') "+"FROM cropTracking ct " +"JOIN Crops c ON ct.cropId = c.id "+"WHERE c.name = ?";
        try {
         PreparedStatement stmt = connection.prepareStatement(sql);
         stmt.setString(1,name);
         ResultSet rs =   stmt.executeQuery();
          if(rs.next()){
            lastDay = rs.getString(1);
           }
          }
         catch (Exception e) {
           e.getMessage();
        }
       return lastDay;
    }
    static  public Date GetUserPlanationDate(String email,String farmName){
      String sql = " select u.name , f.id , f.name , f.plantationDate from FarmLands as f Join Users as u  On u.id = f.userId where u.email = ? && f.name = ?;";
      Date plantationDate = null;
       try {
         PreparedStatement stmt = connection.prepareStatement(sql);
         stmt.setString(1,email);
         stmt.setString(2,farmName);
         ResultSet rs =   stmt.executeQuery();
          if(rs.next()){
             plantationDate =rs.getDate(4);
           }
          }
         catch (Exception e) {
           e.getMessage();
        }
        return plantationDate;
    }
    public static String getDays(String name,long gap){
            String todaysTask = "";
            JSONObject procedureObject = getProcedureForCrop(name);
            Set<String> set = procedureObject.keySet();
            for (String as : set) {
               JSONObject lp = (JSONObject) procedureObject.get(as);
               Set<String> dayKeys =  lp.keySet();
               for(String daykey :dayKeys){ 
                    JSONObject daykey2 = (JSONObject) lp.get(daykey);
                    String days = daykey.split(" ")[1];
                    int initalDay = Integer.valueOf(days.split("-")[0]);
                    int endDay = Integer.valueOf(days.split("-")[1]);
                    if(gap>=initalDay && gap<=endDay){
                        JSONObject dayDivision = (JSONObject) lp.get(daykey);
                        Set<String> eachDay = dayDivision.keySet(); 
                         for(String each : eachDay){
                             String days2 = each.split(" ")[1];
                             if(!days2.contains("-")){ 
                                  int lessthanTen = Integer.valueOf(days2);
                                  if(gap==lessthanTen){
                                      // System.out.println(dayDivision.get(each));
                                      todaysTask+=(String)days2+" Date";
                                      todaysTask+= (String) dayDivision.get(each);
                                  }
                             }
                             else{
                               int initalDay2 = Integer.valueOf(days2.split("-")[0]);
                               int endDay2 = Integer.valueOf(days2.split("-")[1]);
                               if(gap>=initalDay2 && gap<=endDay2){
                                   todaysTask+=(String)days2+" Date ";
                                   todaysTask+= (String) dayDivision.get(each);
                               }
                             }
                         }
                    }
               }
            }
            return todaysTask;   
    }

    @SuppressWarnings("null")
    public static JSONObject getTotalProcedure(String cropName , int currentDay){
          JSONObject finalAnswer = new JSONObject();
          JSONObject answer = new JSONObject();
          JSONObject procedureObject = getProcedureForCrop(cropName);
          Set<String> procedureKeys = procedureObject.keySet();
          for(String pKey:procedureKeys){
            JSONObject innerProcedure = (JSONObject) procedureObject.get(pKey);
            Set<String> keyForInnerProcedure = innerProcedure.keySet();
            for(String day:keyForInnerProcedure){
              JSONObject thirdLayer = (JSONObject) innerProcedure.get(day);
              Set<String> thirdLayerKeys = thirdLayer.keySet();
              for(String Tkey : thirdLayerKeys){
                int procedureday = Integer.valueOf(Tkey.replaceAll("-"," ").split(" ")[1]);
                if(procedureday<=currentDay+4){
                  answer.put(Tkey,thirdLayer.get(Tkey));
                }
              }
            }
          }
          Set<String> outputKeys =answer.keySet();
          ArrayList<String> forSort = new ArrayList<>();
          for(String key : outputKeys){
            forSort.add(key);
          }
          for(String orderKey:forSort){
            finalAnswer.put( orderKey,answer.get(orderKey));
          }
          return finalAnswer;
    }

    public static void main(String[] args) {
        JSONObject answer = getTotalProcedure("Wheat",5);
        ArrayList<String> a = sortedArray(answer);
        System.out.println(a);
    }

    static public ArrayList<String> sortedArray(JSONObject answer){
       Set<String> outputKeys = answer.keySet();
       ArrayList<String> forSort = new ArrayList<>();
       for(String key : outputKeys){
            forSort.add(key);
       }
       forSort.sort(Comparator.comparingInt(CropTrackingJsonExtractor::FirstNumber));
       return forSort;
    }
}












//               for(String s:arr){
//                 System.out.println(s);
//                 forSort.add(s);
//               }







       // JSONObject obj = getProcedureForCrop(20);
        // Date date = GetUserPlanationDate("admin@gmail.com", "JS");
        // LocalDate plantationDate = date.toLocalDate();
        // LocalDate curDate = LocalDate.now();
        // LocalDate futureDate = curDate.plusDays(4);
        // String as = getLastDay("Banana");
        // System.out.println(as.split("-")[1]);

        // String procedure = getDays("Wheat", 12);
        // System.out.println(procedure);
