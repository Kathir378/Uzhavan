package com.yourcompany.JavaControl.api;


import org.json.JSONException;
import org.json.JSONObject;

public class FullApi {

    public static JSONObject api(String pincode){
        try{
        JSONObject jsonResponse = new JSONObject();
        String[] latAndLng = PinToGeoLocation.pinToGeoLocation(pincode);
        if(latAndLng==null){
            return null;
        }
        String[] tempAndHum = TemperatureAndHumidity.temperatureAndHumidity(latAndLng[0], latAndLng[1]);
        String soil = SoilFinder.soilFinder(latAndLng[0], latAndLng[1]);
        jsonResponse.put("temperature", tempAndHum[0]);
        jsonResponse.put("humidity", tempAndHum[1]);
        jsonResponse.put("soilType", soil);
        jsonResponse.put("district", latAndLng[2]);
        return jsonResponse;
        }
         catch (JSONException e) {
			return null;
		}
        // System.out.println("Soil : " + soil);
        // System.out.println(Arrays.toString(latAndLng));
        // System.out.println(Arrays.toString(tempAndHum));
        
    }
    public static void main(String[] args) {
        
        System.out.println(api("627809"));
        
        
    }
}