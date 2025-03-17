package com.yourcompany.JavaControl.DAO;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.time.LocalDateTime;
import java.sql.Timestamp;
import org.json.JSONArray;

import com.yourcompany.JavaControl.Connection.DbConnection;
import com.yourcompany.JavaView.Farm_Land;



public class FarmDAO {
	public boolean addfield(String farmName, double size, String pincode, String district, String state, String crop, float progress,String email,String surveyNumber){
        System.out.println("enter");
        Connection connection=DbConnection.getConnection();
        System.out.println("enter");
        if(!isExit(pincode, surveyNumber)){
        try{
            Timestamp currentTimestamp = Timestamp.valueOf(LocalDateTime.now()); 
            PreparedStatement stmt = connection.prepareStatement("INSERT INTO FarmLands (name, size, pincode, district, state, crop, progress,surveyNumber, userId,plantationDate) VALUES( ?,?,?,?,?,?,?,?, (SELECT id FROM Users WHERE email = ?),?)");
            Farm_Land fl=new Farm_Land(farmName, size, pincode, district, state, crop, progress,surveyNumber);
            stmt.setString(1, fl.getFarmName());
            stmt.setDouble(2, fl.getSize());
            stmt.setString(3,fl.getPincode());
            stmt.setString(4,fl.getDistrict());
            stmt.setString(5,fl.getState());
            stmt.setString(6,crop);
            stmt.setFloat(7,progress);
            stmt.setString(8,surveyNumber);
            stmt.setString(9,email);
          
            stmt.setTimestamp(10, currentTimestamp); 
            System.out.println("no");
            int change=stmt.executeUpdate();
            if(change>0){
                return true;
            }
            System.out.println("no");
        }
        catch(SQLException e){
            System.out.println(" validation Sql");
        }
        }
        return false;

    }

    public static int getFieldId(String pincode ,String surveyNo){
        
    try(Connection connection=DbConnection.getConnection()){
        System.out.println("\n\n\nEntered into IsExist \nPin: "+pincode+"   SurveyNo: "+surveyNo);
        PreparedStatement stmt = connection.prepareStatement("select id from FarmLands where pincode=? and surveyNumber=?");
        
        stmt.setString(1, pincode);
        stmt.setString(2, surveyNo);
        ResultSet i=stmt.executeQuery();

        if(i.next()){
            System.out.println("is");
            return i.getInt("id");
        }
        System.out.println("isnot");
        return 0;
    }
    catch(SQLException e){
        System.out.println("validation Sql");
    }
    return 0;
    }


    public static int getFarmName(String pincode ,String surveyNo){
        
    try(Connection connection=DbConnection.getConnection()){
        System.out.println("\n\n\nEntered into IsExist \nPin: "+pincode+"   SurveyNo: "+surveyNo);
        PreparedStatement stmt = connection.prepareStatement("select farm_id from FarmLands where pincode=? and surveyNumber=?");
        
        stmt.setString(1, pincode);
        stmt.setString(2, surveyNo);
        ResultSet i=stmt.executeQuery();

        if(i.next()){
            System.out.println("is");
            return i.getInt("id");
        }
        System.out.println("isnot");
        return 0;
    }
    catch(SQLException e){
        System.out.println("validation Sql");
    }
    return 0;
    }
    public static void updateProcess(String email,String farmname,int process){
        System.out.println("enter");
        Connection connection=DbConnection.getConnection();
            try{
                PreparedStatement stmt = connection.prepareStatement("UPDATE FarmLands  SET  progress = ?  WHERE userId = (SELECT id FROM Users WHERE email = ?) && name =?;");
                stmt.setInt(1,process);
                stmt.setString(2, email);
                stmt.setString(3, farmname);
                int change=stmt.executeUpdate();
                if(change>0){
                }
                System.out.println("process Changed Sucess");
            }
            catch(SQLException e){
                System.out.println("Error while update the Process");
            }
    }

    public boolean renameFiled(String email,String pincode,String newName,String surveyNo){
   
    
    try( Connection connection=DbConnection.getConnection()){
        if(isExit(pincode, surveyNo)){
        PreparedStatement stmt = connection.prepareStatement("update FarmLands set name =? where pincode=? and surveyNumber=? and userId= (SELECT id FROM Users WHERE email = ?)");
        stmt.setString(1, newName);
        stmt.setString(2, pincode);
        stmt.setString(3, surveyNo);
        stmt.setString(4, email);
        int change=stmt.executeUpdate();
        if(change>0){
            return true;
        }
    }
        
     
        return false;
    }
    catch(SQLException e){
        System.out.println(" validation Sql");
    }
    return false;

    }
    public JSONArray getField(String email){
        JSONArray output=new JSONArray();
        Connection connection=DbConnection.getConnection();
       try{
        PreparedStatement stmt = connection.prepareStatement("SELECT f.size, f.name, f.pincode, f.district,f.state,f.progress,f.surveyNumber,f.crop FROM FarmLands as f JOIN Users as u ON f.userId = u.id  where email = ?;");
        stmt.setString(1, email);
        ResultSet rs=stmt.executeQuery();
        System.out.println(rs);
       while(rs.next()){        
        Farm_Land land = new Farm_Land(
            rs.getString("name"),
            rs.getDouble("size"),
            rs.getString("pincode"),
            rs.getString("district"),
            rs.getString("state"),
            rs.getString("crop"),
            rs.getDouble("progress"),
            rs.getString("surveyNumber")
            );
         output.put(land.toString());
       }
        return output;
       }
       catch(SQLException e){
          System.out.println("GetFeild ");
       }
    return output;
    }



    public static boolean isExit(String pincode ,String surveyNo){
             
    try(Connection connection=DbConnection.getConnection()){
        System.out.println("\n\n\nEntered into IsExist \nPin: "+pincode+"   SurveyNo: "+surveyNo);
        PreparedStatement stmt = connection.prepareStatement("Select * from FarmLands where pincode=? and surveyNumber=?");
        
        stmt.setString(1, pincode);
        stmt.setString(2, surveyNo);
        ResultSet i=stmt.executeQuery();

        if(i.next()){
            System.out.println("is");
            return true;
        }
        System.out.println("isnot");
        return false;
    }
    catch(SQLException e){
        System.out.println("validation Sql");
    }
    return false;
    }
    public boolean deleteField(String pincode ,String surveyNo){
               
               
    try(Connection connection=DbConnection.getConnection()){
        PreparedStatement stmt1 = connection.prepareStatement("DELETE FROM notifications WHERE farm_id =?");
        PreparedStatement stmt = connection.prepareStatement("DELETE FROM FarmLands WHERE pincode =? AND surveyNumber=?");
        int id=FarmDAO.getFieldId(pincode,surveyNo);
        stmt1.setInt(1,id);

        stmt.setString(1, pincode);
        stmt.setString(2, surveyNo);
        stmt1.executeUpdate();
        int i=stmt.executeUpdate();

        if(i>0){
          
            return true;
        }
        System.out.println("isnot");
        return false;
    }
    catch(SQLException e){
        System.out.println("validation Sql");
    }
        return false;
    }



    public static void main(String[] args) {
        // boolean is = isExit("627809", "mrjsa");
        // System.out.println(is);
       FarmDAO d= new FarmDAO ();
       System.out.println(d.deleteField("627851", "5432"));
    //    updateProcess("admin@gmail.com","Admin",12);
    // update FarmLands set name ="king" where pincode="627851" and surveyNumber="122/32" and userId= (SELECT id FROM Users WHERE email = "admin@gmail.com")
       //System.out.println(d.getField("admin@gmail.com").toString());
    //    System.out.println(d.addfield("ramfiel", 9.8, "627601", "tenkasi", "tamilnadu", "Apple", 0, "admin@gmail.com", "627A/23"));
    //    INSERT INTO FarmLands (name, size, pincode, district, state, crop, progress,surveyNumber, userId) VALUES ( ramfiel,9.9,"607621","tenkasi","Apple","627A/23", (SELECT id FROM Users WHERE email = "admin@gmail.com"))
    }
}