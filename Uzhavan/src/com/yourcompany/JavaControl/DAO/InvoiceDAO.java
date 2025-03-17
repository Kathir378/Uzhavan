package com.yourcompany.JavaControl.DAO;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.LinkedList;

import org.json.JSONObject;

import com.fasterxml.jackson.core.JsonProcessingException;
// import com.fasterxml.jackson.databind.ObjectMapper;
import com.yourcompany.JavaControl.Connection.DbConnection;
import com.yourcompany.JavaView.CropCondition;
import com.yourcompany.JavaView.Invoice;

public class InvoiceDAO {
		static LinkedHashMap<String, Integer> FarmingCost = new LinkedHashMap<>();

	public static Invoice getInVoice(String crop, float landSize) {
		Connection connection = DbConnection.getConnection();
		double maxTotal = 0.0;
		try {
			PreparedStatement pstmt = connection
					.prepareStatement("select * from estimation where cropId = (select id from Crops where Name = ?)");
			pstmt.setString(1, crop);
			System.out.println("FarmingCost");
			ResultSet rs = pstmt.executeQuery();
			if (rs.next()) { // Move cursor to the first row
				FarmingCost.put("Land_Preparation", rs.getInt("Land_Preparation"));
				FarmingCost.put("Seeds", rs.getInt("Seeds"));
				FarmingCost.put("Sowing", rs.getInt("Sowing"));
				FarmingCost.put("Fertilizers", rs.getInt("Fertilizers")); // Removed extra space
				FarmingCost.put("Pesticides_Herbicides", rs.getInt("Pesticides_Herbicides"));
				FarmingCost.put("Irrigation", rs.getInt("Irrigation")); // Removed extra space
				FarmingCost.put("Labor", rs.getInt("Labor"));
				FarmingCost.put("Miscellaneous", rs.getInt("Miscellaneous"));
				FarmingCost.put("Harvesting", rs.getInt("Harvesting"));
			}
			// System.out.println("FarmingCost");
		} catch (SQLException e) {
		}

		LinkedHashMap<String, String> o = new LinkedHashMap<String, String>();
		for (HashMap.Entry<String, Integer> entry : FarmingCost.entrySet()) {
			double i = entry.getValue() * landSize;
			o.put(entry.getKey(), (i - (i * 0.2)) + "-" + (i + (i * 0.2)));
			maxTotal += i;
		}

		o.put("Grand total", (maxTotal - (maxTotal * 0.2)) + "-" + (maxTotal + (maxTotal * 0.2)));
		Invoice i = new Invoice(o.get("Land_Preparation"), o.get("Seeds"), o.get("Sowing"), o.get("Fertilizers"),
				o.get("Pesticides_Herbicides"), o.get("Irrigation"), o.get("Labor"), o.get("Miscellaneous"),
				o.get("Harvesting"), o.get("Grand total"));
		return i;
	}

	public static JSONObject getJSONInvoice(String crop, String area) throws JsonProcessingException {
		float areaSize = Float.parseFloat(area);
		Invoice invoice = getInVoice(crop,areaSize);
		JSONObject jsonObject = new JSONObject();
        jsonObject.put("Land_Preparation", invoice.getLand_Preparation());
        jsonObject.put("Seeds", invoice.getSeeds());
        jsonObject.put("Sowing", invoice.getSowing());
        jsonObject.put("Fertilizers", invoice.getFertilizers());
        jsonObject.put("Pesticides_Herbicides", invoice.getPesticides_Herbicides());
        jsonObject.put("Irrigation", invoice.getIrrigation());
        jsonObject.put("Labor", invoice.getLabor());
        jsonObject.put("Miscellaneous", invoice.getMiscellaneous());
        jsonObject.put("Harvesting", invoice.getHarvesting());
        jsonObject.put("grandTotal", invoice.getGrandTotal());
        return jsonObject;

	}

	public static void main(String[] agr) throws JsonProcessingException {
		// SocketInVoice m=new SocketInVoice();
		System.out.println(getInVoice("Rice",0.1f));
		HashMap<String, Float> crops = getSuitableCrops("Vertisols", "52", "35");
		System.out.println(crops);
		// Invoice invoice = getInVoice("Rice",(float)2);
		// System.out.println(invoice);
		// Create an ObjectMapper instance
        // ObjectMapper objectMapper = new ObjectMapper();

        // Convert the Invoice object to JSON
        // String json = objectMapper.writeValueAsString(invoice);

        // Print the JSON
        // System.out.println(json);

	}

	public static HashMap<String, Float> getSuitableCrops(String soilType, String temperature, String humidity) {
		Connection connection = DbConnection.getConnection();
		HashMap<String, Float> suitableCrops = new HashMap<>();
		LinkedList<CropCondition> listOfCropConditions = new LinkedList<>();
		float temp = Float.parseFloat(temperature);
		float hum = Float.parseFloat(humidity);


		try {
			Statement pstmt = connection.createStatement();
			ResultSet resultOfCondation = pstmt.executeQuery(
					"SELECT c.id AS ConditionID, s.name AS SoilName, cr.name AS CropName,c.minTemp,c.maxTemp,c.minHum,c.maxHum FROM cropIdentifier c LEFT JOIN Soils s ON c.soilId = s.id LEFT JOIN Crops cr ON c.cropId = cr.id");

			while (resultOfCondation.next()) {
				listOfCropConditions.add(new CropCondition(resultOfCondation.getString("SoilName"),
						resultOfCondation.getString("CropName"), resultOfCondation.getInt("minTemp"),
						resultOfCondation.getInt("minTemp"), resultOfCondation.getInt("minHum"),
						resultOfCondation.getInt("maxHum")));
			}

		} catch (Exception e) {
			System.out.println(e);
		}

		for (CropCondition cropCondition : listOfCropConditions) {
			float chance = cropCondition.getMatchPercentage(soilType, temp, hum);

			if (suitableCrops.containsKey(cropCondition.getCropName())) {

				if (chance > suitableCrops.get(cropCondition.getCropName())) {
					suitableCrops.put(cropCondition.getCropName(), chance);
				}
				
			} else if (chance >0) {
				suitableCrops.put(cropCondition.getCropName(), chance);
			}
		}
		return suitableCrops;
	}
}