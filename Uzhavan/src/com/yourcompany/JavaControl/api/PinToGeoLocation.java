package com.yourcompany.JavaControl.api;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.Scanner;

import org.json.JSONArray;
import org.json.JSONObject;

public class PinToGeoLocation {
    static Scanner sc = new Scanner(System.in);
	public static String[] pinToGeoLocation(String pincode){
        
        String[] geoLocation = new String[4];
        String apiKey = "a718ad0ef4cb4de9a9bebd2014d52ea0";
        String apiUrl = "https://api.opencagedata.com/geocode/v1/json?q=" + pincode + "&key=" + apiKey;

        try {
            // Create a URL object
            URL url = new URL(apiUrl);

            // Open a connection to the URL
            HttpURLConnection connection = (HttpURLConnection) url.openConnection();
            connection.setRequestMethod("GET");

            // Get the response code
            int responseCode = connection.getResponseCode();

            if (responseCode == HttpURLConnection.HTTP_OK) {
                // Read the response
                BufferedReader in = new BufferedReader(new InputStreamReader(connection.getInputStream()));
                String inputLine;
                StringBuilder response = new StringBuilder();

                while ((inputLine = in.readLine()) != null) {
                    response.append(inputLine);
                }
                
                in.close();

                // Parse the JSON response
                JSONObject jsonResponse = new JSONObject(response.toString());
                JSONArray results = jsonResponse.getJSONArray("results");

                if (results.length() > 0) {
                    JSONObject firstResult = results.getJSONObject(0);
                    JSONObject geometry = firstResult.getJSONObject("geometry");
                    JSONObject components = firstResult.getJSONObject("components");

                    String district = components.getString("state_district");
                    String state = components.getString("state");
                    System.out.println("District: " + district);
                    System.out.println("State: " + state);

                    // Extract latitude and longitude
                    double latitude = geometry.getDouble("lat");
                    double longitude = geometry.getDouble("lng");

                    geoLocation[0] = String.valueOf(latitude); // Latitude for demonstration
                    geoLocation[1] = String.valueOf(longitude); // Longitude for demonstration
                    geoLocation[2] = district;
                    geoLocation[3] = state;
                } else {
                    System.out.println("No results found.");
                }
            } else {
                System.out.println("Failed to fetch data. Response code: " + responseCode);
            }
        } catch (Exception e) {
            return null;
        }
        System.out.println("Latitude: "+geoLocation[0]+"  Longitude: "+geoLocation[1]);

        return geoLocation;
    }
    public static void main(String[] args) {
        pinToGeoLocation("627809");
    }
   
    
}


    /**
     * @param args
     api key
     api
     api url
     url Http url connect
     url setReq met
     get stauts
     
     */











