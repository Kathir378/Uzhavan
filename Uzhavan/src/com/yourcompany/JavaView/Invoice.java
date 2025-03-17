package com.yourcompany.JavaView;

import java.time.LocalDate;


public class Invoice {
    private LocalDate date;
    private String Land_Preparation;
    private String Seeds;
    private String Sowing;
    private String Fertilizers;
    private String Pesticides_Herbicides,Irrigation,Labor,Miscellaneous,Harvesting,grandTotal;


    public Invoice(String land_Preparation, String seeds, String sowing, String fertilizers,
            String pesticides_Herbicides, String irrigation, String labor, String miscellaneous, String harvesting,String grandTotal) {
        Land_Preparation = land_Preparation;
        Seeds = seeds;
        Sowing = sowing;
        Fertilizers = fertilizers;
        Pesticides_Herbicides = pesticides_Herbicides;
        Irrigation = irrigation;
        Labor = labor;
        Miscellaneous = miscellaneous;
        Harvesting = harvesting;
        this.grandTotal=grandTotal;
        date=LocalDate.now();
    }
    public Invoice(LocalDate date,String land_Preparation, String seeds, String sowing, String fertilizers,
            String pesticides_Herbicides, String irrigation, String labor, String miscellaneous, String harvesting,String grandTotal) {
        Land_Preparation = land_Preparation;
        Seeds = seeds;
        Sowing = sowing;
        Fertilizers = fertilizers;
        Pesticides_Herbicides = pesticides_Herbicides;
        Irrigation = irrigation;
        Labor = labor;
        Miscellaneous = miscellaneous;
        Harvesting = harvesting;
        this.grandTotal=grandTotal;
        date=LocalDate.now();
        this.date =date;
    }
    
    public LocalDate getDate() {
        return date;
    }
    public String getLand_Preparation() {
        return Land_Preparation;
    }
    public String getSeeds() {
        return Seeds;
    }
    public String getSowing() {
        return Sowing;
    }
    public String getFertilizers() {
        return Fertilizers;
    }
    public String getPesticides_Herbicides() {
        return Pesticides_Herbicides;
    }
    public String getIrrigation() {
        return Irrigation;
    }
    public String getLabor() {
        return Labor;
    }
    public String getMiscellaneous() {
        return Miscellaneous;
    }
    public String getHarvesting() {
        return Harvesting;
    }

    public String getGrandTotal() {
        return grandTotal;
    }

    @Override
public String toString() {
    return "{"
        + "\"Land_Preparation\":\"" + Land_Preparation + "\","
        + "\"Seeds\":\"" + Seeds + "\","
        + "\"Sowing\":\"" + Sowing + "\","
        + "\"Fertilizers\":\"" + Fertilizers + "\","
        + "\"Pesticides_Herbicides\":\"" + Pesticides_Herbicides + "\","
        + "\"Irrigation\":\"" + Irrigation + "\","
        + "\"Labor\":\"" + Labor + "\","
        + "\"Miscellaneous\":\"" + Miscellaneous + "\","
        + "\"Harvesting\":\"" + Harvesting + "\","
        + "\"grandTotal\":\"" + grandTotal + "\","
        + "\"date\":\"" + date + "\""
        + "}";
}

   
}