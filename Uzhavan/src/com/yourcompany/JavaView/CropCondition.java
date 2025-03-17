package com.yourcompany.JavaView;

public class CropCondition {
    String soilType,cropName;
    float minTemp, maxTemp, minHumidity, maxHumidity;
    
    public CropCondition(String soilType,String cropName, float minTemp, float maxTemp, float minHumidity, float maxHumidity) {
        this.soilType = soilType;
        this.minTemp = minTemp;
        this.maxTemp = maxTemp;
        this.minHumidity = minHumidity;
        this.maxHumidity = maxHumidity;
        this.cropName=cropName;
    }
    
    
    public Float getMatchPercentage(String soil, float temp,float humidity) {
        Float matchPercentage = 0f;
        if (soil.equalsIgnoreCase(soilType)) {
            matchPercentage += 50;
        }
        if (temp >= minTemp && temp <= maxTemp) {
            matchPercentage += 25;
        } 
        else  {
        	if (minTemp>temp) {
        		temp=minTemp-temp;
        	}
        	else {
        		temp-=maxTemp;
        	}
        	if(0<25-temp/0.5) {
        		 matchPercentage += temp/0.5f;
        	}
            
        }
        if (humidity >= minHumidity && humidity <= maxHumidity) {
            matchPercentage += 25;
        } 
        else  {
        	if (minHumidity>humidity) {
        		temp=minHumidity-humidity;
        	}
        	else {
        		temp-=maxTemp;
        	}
        	if(0<25-temp/0.5) {
        		 matchPercentage += temp/0.5f;
        	}
            
        }

        return matchPercentage;
    }


    public String getSoilType() {
        return soilType;
    }


    public String getCropName() {
        return cropName;
    }


    public float getMinTemp() {
        return minTemp;
    }


    public float getMaxTemp() {
        return maxTemp;
    }


    public float getMinHumidity() {
        return minHumidity;
    }


    public float getMaxHumidity() {
        return maxHumidity;
    }
}