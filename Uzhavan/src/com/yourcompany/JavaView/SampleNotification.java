package com.yourcompany.JavaView;

import java.time.LocalDateTime;  // Import LocalDateTime class
import java.time.format.DateTimeFormatter;

public class SampleNotification {
	public static void main(String[] args) {
        LocalDateTime now = LocalDateTime.now();

        System.out.println(now);
        System.out.println(now.of(2025, 2, 9, 14, 30, 45));
        



    }
}