-- MySQL dump 10.13  Distrib 8.0.40, for Linux (x86_64)
--
-- Host: localhost    Database: agriApp
-- ------------------------------------------------------
-- Server version	8.0.40-0ubuntu0.20.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `CropAdvisor`
--

DROP TABLE IF EXISTS `CropAdvisor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `CropAdvisor` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(70) DEFAULT NULL,
  `phoneNo` varchar(14) DEFAULT NULL,
  `consultant` int DEFAULT NULL,
  `address` varchar(80) DEFAULT NULL,
  `isAvailable` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `role` (`consultant`),
  CONSTRAINT `role` FOREIGN KEY (`consultant`) REFERENCES `advisor` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `CropAdvisor`
--

LOCK TABLES `CropAdvisor` WRITE;
/*!40000 ALTER TABLE `CropAdvisor` DISABLE KEYS */;
INSERT INTO `CropAdvisor` VALUES (1,'Kathiresh','9952181838',1,'28/3 , Tiruvalluvar street , Pudir ,Tirunelveli',0);
/*!40000 ALTER TABLE `CropAdvisor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Crops`
--

DROP TABLE IF EXISTS `Crops`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Crops` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `duration` varchar(80) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Crops`
--

LOCK TABLES `Crops` WRITE;
/*!40000 ALTER TABLE `Crops` DISABLE KEYS */;
INSERT INTO `Crops` VALUES (1,'Rice','4 to 6 months (depending on the variety and season)'),(2,'Ragi (Finger Millet)','3 to 4 months'),(3,'Cholam (Sorghum)','3 to 4 months'),(4,'Cumbu (Pearl Millet)','3 to 4 months'),(5,'Black Gram (Urad Dal)','2 to 3 months'),(6,'Green Gram (Moong Dal)','2 to 3 months'),(7,'Red Gram (Toor Dal)','4 to 5 months'),(8,'Horse Gram','3 to 4 months'),(9,'Sugarcane','12 to 18 months'),(10,'Cotton','5 to 6 months'),(11,'Groundnut','3 to 4 months'),(12,'Sunflower','3 to 4 months'),(13,'Gingelly (Sesame)','3 to 4 months'),(14,'Tea','3 to 4 years to start yielding'),(15,'Coffee','3 to 4 years to begin yielding'),(16,'Rubber','5 to 6 years to begin yielding'),(17,'Coconut','6 to 7 years to start bearing fruit'),(18,'Cashew','3 to 5 years to start bearing'),(19,'Mango','3 to 5 years to start fruiting'),(20,'Banana','9 to 12 months'),(21,'Guava','2 to 3 years to start fruiting'),(22,'Sapota (Chikoo)','3 to 4 years to start fruiting'),(23,'Tamarind','4 to 6 years for initial fruiting'),(24,'Tomato','2 to 3 months');
/*!40000 ALTER TABLE `Crops` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `FarmLands`
--

DROP TABLE IF EXISTS `FarmLands`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `FarmLands` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `size` double DEFAULT NULL,
  `pincode` varchar(10) DEFAULT NULL,
  `district` varchar(40) DEFAULT NULL,
  `state` varchar(30) DEFAULT NULL,
  `crop` varchar(30) DEFAULT NULL,
  `progress` double DEFAULT NULL,
  `invoiceId` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1001 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `FarmLands`
--

LOCK TABLES `FarmLands` WRITE;
/*!40000 ALTER TABLE `FarmLands` DISABLE KEYS */;
INSERT INTO `FarmLands` VALUES (1000,'Admin',1,'627851','Tirunelveli','Tamil Nadu','Wheat',0,1000);
/*!40000 ALTER TABLE `FarmLands` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Soils`
--

DROP TABLE IF EXISTS `Soils`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Soils` (
  `id` smallint NOT NULL AUTO_INCREMENT,
  `name` varchar(40) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Soils`
--

LOCK TABLES `Soils` WRITE;
/*!40000 ALTER TABLE `Soils` DISABLE KEYS */;
INSERT INTO `Soils` VALUES (1,'Acrisols'),(2,'Alisols'),(3,'Andosols'),(4,'Arenosols'),(5,'Calcisols'),(6,'Cambisols'),(7,'Chernozems'),(8,'Cryosols'),(9,'Durisols'),(10,'Ferralsols'),(11,'Fluvisols'),(12,'Gleysols'),(13,'Gypsisols'),(14,'Histosols'),(15,'Kastanozems'),(16,'Leptosols'),(17,'Lixisols'),(18,'Luvisols'),(19,'Nitisols'),(20,'Phaeozems'),(21,'Planosols'),(22,'Plinthosols'),(23,'Podzols'),(24,'Regosols'),(25,'Solonchaks'),(26,'Solonetz'),(27,'Stagnosols'),(28,'Technosols'),(29,'Umbrisols'),(30,'Vertisols');
/*!40000 ALTER TABLE `Soils` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Users`
--

DROP TABLE IF EXISTS `Users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(40) NOT NULL,
  `Phone_No` varchar(15) DEFAULT NULL,
  `password` varchar(18) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Phone_No` (`Phone_No`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Users`
--

LOCK TABLES `Users` WRITE;
/*!40000 ALTER TABLE `Users` DISABLE KEYS */;
INSERT INTO `Users` VALUES (1,'Admin','9952181838','farmer@123'),(2,'Kathir','9150985674','kathir@123'),(3,'JeyaSurya','9790474973','js@123'),(4,'Esaki','9360794065','esaki@123'),(5,'Ram','Hello@2005',' 9498122235'),(6,'ram','9887912871','farmer'),(11,'rfghjm','989912871','farmer');
/*!40000 ALTER TABLE `Users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `advisor`
--

DROP TABLE IF EXISTS `advisor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `advisor` (
  `id` int NOT NULL AUTO_INCREMENT,
  `level` varchar(25) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `advisor`
--

LOCK TABLES `advisor` WRITE;
/*!40000 ALTER TABLE `advisor` DISABLE KEYS */;
INSERT INTO `advisor` VALUES (1,'Junior Advisor'),(2,'Advisor'),(3,'Senior Advisor'),(4,'Principal Advisor'),(5,'chief Advisor');
/*!40000 ALTER TABLE `advisor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `estimation`
--

DROP TABLE IF EXISTS `estimation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `estimation` (
  `eId` int NOT NULL AUTO_INCREMENT,
  `cropId` int DEFAULT NULL,
  `Land_Preparation` int DEFAULT NULL,
  `Seeds` int DEFAULT NULL,
  `Sowing` int DEFAULT NULL,
  `Fertilizers` int DEFAULT NULL,
  `Pesticides_Herbicides` int DEFAULT NULL,
  `Irrigation` int DEFAULT NULL,
  `Labor` int DEFAULT NULL,
  `Miscellaneous` int DEFAULT NULL,
  `Harvesting` int DEFAULT NULL,
  PRIMARY KEY (`eId`),
  KEY `cropId` (`cropId`),
  CONSTRAINT `estimation_ibfk_1` FOREIGN KEY (`cropId`) REFERENCES `Crops` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `estimation`
--

LOCK TABLES `estimation` WRITE;
/*!40000 ALTER TABLE `estimation` DISABLE KEYS */;
INSERT INTO `estimation` VALUES (1,1,7500,3000,1500,2000,1000,2500,3000,1000,5000),(2,2,6500,2500,1200,1800,900,2200,2800,800,5000),(3,3,6000,2000,1000,1500,800,2100,2500,700,5000),(4,4,6500,2500,1200,1800,900,2200,2800,800,5000),(5,5,5000,1500,800,1200,700,2000,2300,600,5000),(6,6,4500,1200,700,1000,600,1800,2000,500,5000),(7,7,6000,2200,1000,1500,900,2200,2500,700,5000),(8,8,5500,1800,900,1300,750,2100,2400,600,5000),(9,9,10000,4000,2500,4000,2000,5000,4500,1500,5000),(10,10,8500,3500,1800,2500,1500,3500,4000,1000,5000),(11,11,7000,2500,1500,2000,1000,2500,3000,900,5000),(12,12,6500,2000,1200,1800,800,2200,2500,700,5000),(13,13,5500,2000,1000,1500,800,2100,2300,600,5000),(14,14,15000,6000,4000,6000,3000,7000,6500,2000,5000),(29,15,14000,5500,3500,5500,2800,6500,6000,1800,5000),(30,16,18000,8000,5000,7500,4500,8500,7000,3000,5000),(31,17,9000,3500,2000,3500,2000,4000,4500,1200,5000),(32,18,12000,5000,3500,5500,2500,5500,6000,2000,5000),(33,19,8000,2500,1500,2000,1200,3500,4000,1000,5000),(34,20,7000,2000,1200,1500,800,2500,3000,700,5000),(35,21,6000,1800,900,1300,700,2000,2500,600,5000),(36,22,6500,2000,1200,1500,800,2200,2800,700,5000),(37,23,7000,2500,1300,2000,1000,2500,3000,800,5000),(38,24,5500,1500,800,1200,700,2000,2300,600,5000);
/*!40000 ALTER TABLE `estimation` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-02-13  8:55:51
