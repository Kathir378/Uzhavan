package com.yourcompany.JavaControl.api;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

// import org.json.JSONArray;
import org.json.JSONObject;

public class TemperatureAndHumidity {
    public static String[] temperatureAndHumidity(String latAndLng, String latAndLng2) {
        String[] tempAndHum = new String[2];
        try {
            // API URL
            String urlString = "https://api.openweathermap.org/data/2.5/weather?lat="+latAndLng+"&lon="+latAndLng2+"&appid=54b3a6fee7ff0223bde24d3ecd3c536c&units=metric";

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

            // Extract temperature and humidity from the "main" object
            JSONObject main = jsonResponse.getJSONObject("main");
            // String district = jsonResponse.getString("name");
            // System.out.println("District: " + district);
            double temperature = main.getDouble("temp");
            double humidity = main.getDouble("humidity");

            // Store temperature and humidity in a double array
            tempAndHum[0] = String.valueOf(temperature);
            tempAndHum[1] = String.valueOf(humidity);

        } catch (Exception e) {
            e.printStackTrace();
        }
        // System.out.println("Temperature: "+tempAndHum[0]+"  Humidity"+tempAndHum[1]);
        return tempAndHum;
    }
}