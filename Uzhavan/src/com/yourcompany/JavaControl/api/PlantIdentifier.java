package com.yourcompany.JavaControl.api;

import org.apache.hc.client5.http.classic.methods.HttpPost;
import org.apache.hc.client5.http.impl.classic.CloseableHttpClient;
import org.apache.hc.client5.http.impl.classic.CloseableHttpResponse;
import org.apache.hc.client5.http.impl.classic.HttpClients;
import org.apache.hc.core5.http.io.entity.StringEntity;
import org.json.JSONObject;

import java.io.File;
import java.nio.file.Files;
import java.util.Base64;

public class PlantIdentifier {
    private static final String API_KEY = "your_api_key_here";
    private static final String API_URL = "https://api.plant.id/v2/identify";

    public static void main(String[] args) {
        String imagePath = "plant.jpg"; // Replace with your image file path
        identifyPlant(imagePath);
    }

    public static void identifyPlant(String imagePath) {
        try (CloseableHttpClient httpClient = HttpClients.createDefault()) {
            HttpPost request = new HttpPost(API_URL);
            request.addHeader("Content-Type", "application/json");
            request.addHeader("Api-Key", API_KEY);

            // Convert image to Base64
            File imageFile = new File(imagePath);
            byte[] imageBytes = Files.readAllBytes(imageFile.toPath());
            String base64Image = Base64.getEncoder().encodeToString(imageBytes);

            // Create JSON payload
            JSONObject jsonPayload = new JSONObject();
            jsonPayload.put("images", new String[]{base64Image});
            jsonPayload.put("organs", new String[]{"leaf", "flower", "fruit"});
            jsonPayload.put("details", new String[]{"common_names", "url", "disease"});

            // Attach JSON to request
            StringEntity entity = new StringEntity(jsonPayload.toString(), org.apache.hc.core5.http.ContentType.APPLICATION_JSON);
            request.setEntity(entity);

            // Execute request
            try (CloseableHttpResponse response = httpClient.execute(request)) {
                String responseString = new String(response.getEntity().getContent().readAllBytes());
                System.out.println("API Response: " + responseString);
            }

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
