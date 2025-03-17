package com.yourcompany.JavaControl.api;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

import org.json.JSONObject;

public class SoilFinder {
    
    public static String soilFinder(String latAndLng, String latAndLng2) {
        String soil = "";
        try {
            // API URL with latitude and longitude
            String urlString = "https://api.openepi.io/soil/type?lat="+latAndLng+"&lon="+latAndLng2;

            // Create a URL object
            URL url = new URL(urlString);

            // Open a connection
            HttpURLConnection connection = (HttpURLConnection) url.openConnection();
            connection.setRequestMethod("GET");

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

            // Extract the soil type
            JSONObject soilType = jsonResponse.getJSONObject("properties"); // Replace "soil_type" with the actual key in the
                                                                   // JSON response
            soil = soilType.getString("most_probable_soil_type");

            // Print the soil type
            // System.out.println("Soil Type: " + soil);

        } catch (Exception e) {
            e.printStackTrace();
        }
        return soil;

    }
}