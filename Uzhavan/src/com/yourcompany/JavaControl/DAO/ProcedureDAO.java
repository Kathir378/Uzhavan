package com.yourcompany.JavaControl.DAO;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.HashMap;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.TreeMap;

import org.json.JSONObject;
import com.yourcompany.JavaControl.Connection.DbConnection;
public class ProcedureDAO{
	static Connection connection = DbConnection.getConnection();

    public static void main(String[] args) {
       JSONObject json = getProcedureForCrop(1);
       System.out.println(json);
       LinkedHashMap<String, Integer> sd = getDays();
       System.out.println(sd);
      //  System.out.println(js);
    }
   
   static  public JSONObject getProcedureForCrop(int id){
      String sql = "select cropProcedure from procedureForCrop where id = ?";
      JSONObject jsonObject =null;
       try {
         PreparedStatement stmt = connection.prepareStatement(sql);
         stmt.setInt(1,id);
         ResultSet rs =   stmt.executeQuery();
         if(rs.next()){
             String json =rs.getString(1);
             jsonObject = new JSONObject(json);
            //  System.out.println(jsonObject);
           }
        }
         catch (Exception e) {
           e.getMessage();
        }
        return jsonObject;
   }


   public static LinkedHashMap<String, Integer>  getDays(){
            JSONObject sd = getProcedureForCrop(1);
            Set<String> set = sd.keySet();
            ArrayList<String> arr = new ArrayList<>();
            HashMap<String, Integer> map = new HashMap<>();
            for (String as : set) {
               JSONObject lp = (JSONObject) sd.get(as);
               String days = lp.optString("Days", "0-0");  // Avoid null values
               if (!days.equals("0-0")) {
                  arr.add(days);
                  map.put(as, Integer.valueOf(days.split("-")[1])); // Get the last day
               }
            }
            List<Map.Entry<String, Integer>> entryList = new ArrayList<>(map.entrySet());
            entryList.sort(Comparator.comparing(Map.Entry::getValue));
            LinkedHashMap<String, Integer> sortedMap = new LinkedHashMap<>();
            for (Map.Entry<String, Integer> entry : entryList) {
               sortedMap.put(entry.getKey(), entry.getValue());
            }
            return sortedMap;
      }
}
