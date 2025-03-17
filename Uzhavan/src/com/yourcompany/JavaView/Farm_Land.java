package com.yourcompany.JavaView;

import org.json.JSONObject;

public class Farm_Land {
  public static void main(String[] args) {
     Farm_Land myFarm = new Farm_Land("Green Acres", 150.5, "123456", "Springfield", "Illinois", "Wheat", 75.0,"fghj");
     System.out.println(myFarm.toString());
  }
	String farmName;
    double size;
    String pincode;
    String district;
    String state;
    String crop;
    double progress;
    String surveyNumber;
 
    // int id;

    public Farm_Land(String farmName, double size, String pincode, String district, String state, String crop,double progress,String surveyNumber) {
        this.farmName = farmName;
        this.size = size;
        this.pincode = pincode;
        this.district = district;
        this.state = state;
        this.crop = crop;
        this.progress = progress;
        this.surveyNumber=surveyNumber;
    }

    public Farm_Land(int id,String farmName, double size, String pincode, String district, String state, String crop,
        float progress,String surveyNumber) {
        this.farmName = farmName;
        this.size = size;
        this.pincode = pincode;
        this.district = district;
        this.state = state;
        this.crop = crop;
        this.progress = progress;
        this.surveyNumber=surveyNumber;
      
        // this.id = id;
    }

   
    public String getFarmName() {
        return farmName;
    }
    public void setFarmName(String farmName) {
        this.farmName = farmName;
    }
    public double getSize() {
        return size;
    }
    public void setSize(double size) {
        this.size = size;
    }
    public String getPincode() {
        return pincode;
    }
    public void setPincode(String pincode) {
        this.pincode = pincode;
    }
    public String getDistrict() {
        return district;
    }
    public void setDistrict(String district) {
        this.district = district;
    }
    public String getState() {
        return state;
    }
    public void setState(String state) {
        this.state = state;
    }
    public String getCrop() {
        return crop;
    }
    public void setCrop(String crop) {
        this.crop = crop;
    }
    public double getProgress() {
        return progress;
    }
    public void setProgress(float progress) {
        this.progress = progress;
    }
    @Override
public String toString() {
    JSONObject json = new JSONObject();
    json.put("farmName", farmName);
    json.put("size", size);
    json.put("pincode", pincode);
    json.put("district", district);
    json.put("state", state);
    json.put("crop", crop);
    json.put("progress", progress);
    System.out.println(surveyNumber);
    json.put("surveyNumber", surveyNumber);
    return json.toString();
}

    public String getSurveyNumber() {
        return surveyNumber;
    }

  
}