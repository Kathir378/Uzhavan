package com.yourcompany.JavaControl.api;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

import org.apache.tomcat.util.json.JSONParser;
import org.json.JSONObject;

// import org.json.simple.JSONObject;
// import org.json.simple.parser.JSONParser;
public class Weatherapi {

	JSONObject getWeather(String city) {
		 try {
	            String url = "https://api.openweathermap.org/data/2.5/forecast?q="+city+"&appid=54b3a6fee7ff0223bde24d3ecd3c536c";
	            HttpClient client = HttpClient.newHttpClient();
	            HttpRequest request = HttpRequest.newBuilder()
	                    .uri(URI.create(url))
	                    .GET()
	                    .build();
	            HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
	            return (JSONObject)new JSONParser(response.body()).parse();
	        } catch (Exception e) {
	            e.printStackTrace();
	        }
		return null; 
	}
    public static void main(String[] args) {
    	try {
            // Define the API URL
            String url = "https://api.openweathermap.org/data/2.5/forecast?q=tenkasi&appid=6b4afc1245af36f7d650ab7821599469";

            // Create the HttpClient
            HttpClient client = HttpClient.newHttpClient();

            // Create the HttpRequest
            HttpRequest request = HttpRequest.newBuilder()
                    .uri(URI.create(url))
                    .GET()
                    .build();

            // Send the request and get the response
            HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());

            // Print the response JSON
            System.out.println("Response JSON: " + response.body());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}

