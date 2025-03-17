package com.yourcompany.JavaView;

import java.util.Properties;
//import java.util.Random;
//
//import java.util.Properties;
import javax.mail.*;
import javax.mail.internet.*;


public class SendEmail {

   public static void main(String[] args) {

      System.out.println("huj");
      String to = "kathireshv4@gmail.com";
		Properties props = new Properties();
		props.put("mail.smtp.host", "smtp.gmail.com");
		props.put("mail.smtp.socketFactory.port", "465");
		props.put("mail.smtp.socketFactory.class", "javax.net.ssl.SSLSocketFactory");
		props.put("mail.smtp.auth", "true");
		props.put("mail.smtp.port", "465");
		Session session = Session.getDefaultInstance(props, new javax.mail.Authenticator() {
			protected PasswordAuthentication getPasswordAuthentication() {
				return new PasswordAuthentication("uzhavan.office@gmail.com", "gbtd dldv qdzb mhvp");
																								
																								
			}
		});
		
		try {
			MimeMessage message = new MimeMessage(session);
			message.setFrom(new InternetAddress(to));
			message.addRecipient(Message.RecipientType.TO, new InternetAddress(to));
			message.setSubject("This is Uzhavan!!!");
			message.setText("Your OTP is: " +"dummy");
			Transport.send(message);
			System.out.println("message sent successfully");		
		}

		catch (MessagingException e) {
			
			throw new RuntimeException(e);
			
		}
    }
}




