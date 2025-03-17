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
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `CropAdvisor`
--

LOCK TABLES `CropAdvisor` WRITE;
/*!40000 ALTER TABLE `CropAdvisor` DISABLE KEYS */;
INSERT INTO `CropAdvisor` VALUES (1,'Kathiresh','9952181838',1,'28/3 , Tiruvalluvar street , Pudur ,Tirunelveli',0),(2,'Jeyasurya','9790474973',5,'1/144 Amman Kovil Street, Piranoor Border, Shenkottai, Tenkasi',1);
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
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Crops`
--

LOCK TABLES `Crops` WRITE;
/*!40000 ALTER TABLE `Crops` DISABLE KEYS */;
INSERT INTO `Crops` VALUES (1,'Rice','4 to 6 months'),(2,'Ragi (Finger Millet)','3 to 4 months'),(3,'Cholam (Sorghum)','3 to 4 months'),(4,'Cumbu (Pearl Millet)','3 to 4 months'),(5,'Black Gram (Urad Dal)','2 to 3 months'),(6,'Green Gram (Moong Dal)','2 to 3 months'),(7,'Red Gram (Toor Dal)','4 to 5 months'),(8,'Horse Gram','3 to 4 months'),(9,'Sugarcane','12 to 18 months'),(10,'Cotton','5 to 6 months'),(11,'Groundnut','3 to 4 months'),(12,'Sunflower','3 to 4 months'),(13,'Gingelly (Sesame)','3 to 4 months'),(14,'Tea','36 to 48 months '),(15,'Coffee','36 to 48 months '),(16,'Rubber','60 to 72 months '),(17,'Coconut','72 to 84 months '),(18,'Cashew','36 to 60 months '),(19,'Mango','36 to 60 months'),(20,'Banana','9 to 12 months'),(21,'Guava','24 to 36 months'),(22,'Sapota (Chikoo)','36 to 48 months'),(23,'Tamarind','48 to 72 months'),(24,'Tomato','2 to 3 months'),(25,'Wheat','4 to 6 months');
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
  `userId` int DEFAULT NULL,
  `surveyNumber` varchar(20) DEFAULT NULL,
  `plantationDate` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_user` (`userId`),
  CONSTRAINT `fk_user` FOREIGN KEY (`userId`) REFERENCES `Users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1029 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `FarmLands`
--

LOCK TABLES `FarmLands` WRITE;
/*!40000 ALTER TABLE `FarmLands` DISABLE KEYS */;
INSERT INTO `FarmLands` VALUES (1,'Admin',1,'627851','Tirunelveli','Tamil Nadu','Wheat',10,1,'5432','2025-02-20'),(1001,'kathir',9.9,'607621','tenkasi','TamilNadu','Apple',0,2,'627A/23','2025-02-18'),(1002,'ramfiel',9.8,'627601','tenkasi','tamilnadu','Apple',0,1,'627A/23','2025-02-19'),(1003,'JS',21,'643001','Nilgiris','Nilgiris','Banana',0,1,'123/d','2025-02-23'),(1004,'Demo',490,'643002','Nilgiris','Nilgiris','Tomato',0,1,'113/d','2025-02-24'),(1005,'venkatesh',2,'627851','Tenkasi','Tamil Nadu','Mango',0,1,'87653','2025-02-19'),(1008,'js',3,'627804','Tenkasi','Tamil Nadu','Tomato',0,28,'121/a','2025-02-25'),(1009,'Check12',3,'627851','Tenkasi','Tamil Nadu','Tomato',0,1,'12/2','2025-02-25'),(1010,'JS',23,'627809','Tenkasi','Tamil Nadu','Rice',0,28,'qw/23','2025-02-25'),(1011,'dfgh',2,'627601','Tirunelveli','Tamil Nadu','Rice',0,1,'uexw',NULL),(1012,'qq',23,'627601','Tirunelveli','Tamil Nadu','Coconut',0,1,'is93',NULL),(1013,'Demo',1,'627809','Tenkasi','Tamil Nadu','Tomato',0,28,'mrjsa',NULL),(1014,'Demo',1,'627809','Tenkasi','Tamil Nadu','Tomato',0,28,'ghtfgu','2025-02-26'),(1015,'js',1,'627804','Tenkasi','Tamil Nadu','Cotton',0,1,'ghtfgu','2025-02-26'),(1016,'hacker\'s farm',2312,'627809','Tenkasi','Tamil Nadu','Mango',0,31,'hacker','2025-02-26'),(1017,'HackerDemo',1,'627804','Tenkasi','Tamil Nadu','Tomato',0,31,'asdf','2025-02-26'),(1018,'note',6,'627601','Tirunelveli','Tamil Nadu','Rubber',0,1,'sdfgh','2025-02-26'),(1019,'sample',4,'627851','Tenkasi','Tamil Nadu','Tamarind',0,1,'12/3','2025-02-26'),(1020,'Esakki Thottam',1,'627601','Tirunelveli','Tamil Nadu','Banana',0,38,'134567','2025-02-26'),(1021,'Jeya farm',100,'627809','Tenkasi','Tamil Nadu','Wheat',0,38,'3434','2025-02-26'),(1022,'Eden garden',10,'627811','Tenkasi','Tamil Nadu','Tomato',0,1,'mrjsa','2025-02-26'),(1023,'ram',7,'627601','Tirunelveli','Tamil Nadu','Wheat',0,41,'5ydy','2025-02-26'),(1024,'ygh',1,'627601','Tirunelveli','Tamil Nadu','Wheat',0,41,'dfgh','2025-02-26'),(1025,'jj',1,'627601','Tirunelveli','Tamil Nadu','Tomato',0,41,'rtyuio','2025-02-26'),(1026,'ugfcv',6,'627601','Tirunelveli','Tamil Nadu','Tomato',0,41,'9u82','2025-02-26'),(1027,'ramreal',8,'627601','Tirunelveli','Tamil Nadu','Wheat',0,41,'fvghuj','2025-02-26'),(1028,'ramreal',20,'627601','Tirunelveli','Tamil Nadu','Wheat',0,41,'yyyyo','2025-02-26');
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
  `email` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Users`
--

LOCK TABLES `Users` WRITE;
/*!40000 ALTER TABLE `Users` DISABLE KEYS */;
INSERT INTO `Users` VALUES (1,'Admin','9952181838','ZmFybWVyQDEyMw==','admin@gmail.com'),(2,'Kathir','9150985674','a2F0aGlyQDEyMw==','kathireshv@gmail.com'),(17,'Esakki ram','6380234183','UkFNQDIwMDU=','raesakkiram@gmail.com'),(25,'Jeya','9787898798','MTIzNDU2Nzg5','abcd@gmail.com'),(26,'Mathimithra','8144917444','TUB0aGkxMjY=','mathimithra.md@gmail.com'),(27,'Kabil','7904434344','a2FiaWxAMTIz','kabilvisuvanathan@gmail.com'),(28,'Testing','8765432190','cHBwcHBwcHBw','demo@gmail.com'),(29,'Demo','8888888888','cXdlcnR5dWlvcA==','test@gmail.com'),(30,'Moorthi','9876543210','TUB0aGkxMjYyMg==','moorthi@gmila.com'),(31,'RedHat','6666666666','cXdlcnR5dWlvcA==','redhathacker@gmail.com'),(34,'DemoUser','7777777777','cXdlcnR5dWlvcA==','this@gmail.com'),(35,'sabari','9876543212','c2FiYXJpQDEyMw==','sabari@gmail.com'),(38,'Arun','8870610968','QXJ1bkAxMjM0','arun@gmail.com'),(41,'siva','9498122239','cmFtQDEyMw==','siva@gmail.com'),(42,'js','9876543210','YXNkZmdoamts','js@gmail.com');
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
-- Table structure for table `cropIdentifier`
--

DROP TABLE IF EXISTS `cropIdentifier`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cropIdentifier` (
  `id` int NOT NULL AUTO_INCREMENT,
  `minTemp` int DEFAULT NULL,
  `maxTemp` int DEFAULT NULL,
  `minHum` int DEFAULT NULL,
  `maxHum` int DEFAULT NULL,
  `soilId` smallint DEFAULT NULL,
  `cropId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `soilId` (`soilId`),
  KEY `cropId` (`cropId`),
  CONSTRAINT `cropIdentifier_ibfk_1` FOREIGN KEY (`soilId`) REFERENCES `Soils` (`id`),
  CONSTRAINT `cropIdentifier_ibfk_2` FOREIGN KEY (`cropId`) REFERENCES `Crops` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=70 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cropIdentifier`
--

LOCK TABLES `cropIdentifier` WRITE;
/*!40000 ALTER TABLE `cropIdentifier` DISABLE KEYS */;
INSERT INTO `cropIdentifier` VALUES (1,10,25,50,70,7,20),(2,12,26,50,75,20,20),(3,10,24,45,70,18,20),(4,10,27,40,65,6,20),(5,8,25,40,60,15,20),(6,15,30,50,80,30,20),(7,12,28,30,55,5,20),(8,10,25,40,60,24,20),(9,8,22,50,75,21,20),(10,10,25,50,70,7,25),(11,12,26,50,75,20,25),(12,10,24,45,70,18,25),(13,10,27,40,65,6,25),(14,8,25,40,60,15,25),(15,15,30,50,80,30,25),(16,12,28,30,55,5,25),(17,10,25,40,60,24,25),(18,8,22,50,75,21,25),(19,20,35,70,90,11,1),(20,22,35,80,95,12,1),(21,20,34,75,90,21,1),(22,18,32,80,95,27,1),(23,22,36,70,85,22,1),(24,22,38,65,85,30,1),(25,22,38,65,85,4,17),(26,22,36,75,90,11,17),(27,24,38,80,95,12,17),(28,24,37,60,80,5,17),(29,20,34,65,85,18,17),(30,24,38,65,85,30,17),(31,20,35,50,70,4,11),(32,18,34,45,65,18,11),(33,15,32,40,60,6,11),(34,20,38,50,75,30,11),(35,18,36,40,60,5,11),(36,18,34,40,60,24,11),(37,18,32,50,70,18,24),(38,15,30,45,65,6,24),(39,18,35,50,70,11,24),(40,20,35,45,70,30,24),(41,20,35,40,65,5,24),(42,18,32,50,70,24,24),(43,20,35,50,70,30,10),(44,22,37,45,65,2,10),(45,20,38,50,75,6,10),(46,25,40,30,55,5,10),(47,22,35,50,70,17,10),(48,20,36,45,65,24,10),(49,20,38,50,80,2,19),(50,22,40,55,85,17,19),(51,18,37,60,85,6,19),(52,20,38,50,75,30,19),(53,22,40,55,80,24,19),(54,24,38,60,85,10,19),(60,25,38,50,80,18,23),(61,22,40,45,75,24,23),(62,24,39,50,85,10,23),(63,23,38,55,80,22,23),(64,25,40,50,75,30,23),(65,25,35,75,90,22,16),(66,24,36,70,90,18,16),(67,25,35,75,85,10,16),(68,24,34,80,95,11,16),(69,26,36,75,90,30,16);
/*!40000 ALTER TABLE `cropIdentifier` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cropNotification`
--

DROP TABLE IF EXISTS `cropNotification`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cropNotification` (
  `cropId` int DEFAULT NULL,
  `message` json DEFAULT NULL,
  KEY `cropId` (`cropId`),
  CONSTRAINT `cropNotification_ibfk_1` FOREIGN KEY (`cropId`) REFERENCES `Crops` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cropNotification`
--

LOCK TABLES `cropNotification` WRITE;
/*!40000 ALTER TABLE `cropNotification` DISABLE KEYS */;
INSERT INTO `cropNotification` VALUES (20,'{\"1\": {\"title\": \"Land Preparation\", \"Site Selection\": \"Choose a well-drained area with ample sunlight.\", \"Producer Notification\": \"Test soil quality, check for drainage, and clear unwanted vegetation.\"}, \"2\": {\"title\": \"Land Preparation\", \"Plowing\": \"Loosen soil to prepare for planting.\", \"Producer Notification\": \"Use a plow or tractor to break up compacted soil.\"}, \"3\": {\"title\": \"Land Preparation\", \"Fertilization\": \"Enhance soil nutrients with compost.\", \"Producer Notification\": \"Apply organic compost or well-rotted manure to improve fertility.\"}, \"4\": {\"title\": \"Land Preparation\", \"Soil Leveling\": \"Ensure even distribution of nutrients.\", \"Producer Notification\": \"Smooth out the soil surface for even water absorption.\"}, \"5\": {\"title\": \"Land Preparation\", \"Final Soil Check\": \"Confirm soil is ready for planting.\", \"Producer Notification\": \"Check for proper aeration and moisture before planting.\"}, \"6\": {\"title\": \"Planting\", \"Seedling Selection\": \"Choose disease-resistant banana suckers.\", \"Producer Notification\": \"Select healthy suckers and prepare them for planting.\"}, \"120\": {\"title\": \"Vegetative Growth\", \"Support Structures\": \"Provide support for tall plants.\", \"Producer Notification\": \"Use bamboo stakes or ropes to prevent plants from falling.\"}, \"270\": {\"title\": \"Harvesting\", \"Maturity Check\": \"Confirm bananas are ready for harvest.\", \"Producer Notification\": \"Harvest bananas when they are full-sized but still green for longer shelf life.\"}, \"362\": {\"title\": \"Post-Harvest\", \"Producer Notification\": \"Sort bananas based on size and ripeness before selling.\", \"Selling & Distribution\": \"Prepare bananas for market.\"}}'),(25,'{\"1\": {\"title\": \"Land Preparation\", \"Site Selection\": \"Choose well-drained, fertile soil with good organic content.\", \"Producer Notification\": \"Test soil for nutrients, ensure proper drainage, and remove weeds.\"}, \"2\": {\"title\": \"Land Preparation\", \"Plowing\": \"Loosen and aerate the soil to enhance root penetration.\", \"Producer Notification\": \"Use deep plowing and harrowing to break compact soil.\"}, \"3\": {\"title\": \"Land Preparation\", \"Fertilization\": \"Improve soil fertility with organic or chemical fertilizers.\", \"Producer Notification\": \"Apply nitrogen, phosphorus, and potassium based on soil test results.\"}, \"4\": {\"title\": \"Planting\", \"Seed Selection\": \"Choose high-yield, drought-resistant wheat varieties.\", \"Producer Notification\": \"Use certified seeds suited to local climate conditions.\"}, \"5\": {\"title\": \"Planting\", \"Sowing Method\": \"Use broadcasting, drilling, or dibbling methods.\", \"Producer Notification\": \"Ensure proper seed depth and spacing for uniform germination.\"}, \"30\": {\"title\": \"Vegetative Growth\", \"Irrigation Management\": \"Maintain soil moisture at critical growth stages.\", \"Producer Notification\": \"Apply irrigation at tillering, jointing, and heading stages.\"}, \"45\": {\"title\": \"Vegetative Growth\", \"Weed Control\": \"Suppress weed competition for nutrients and sunlight.\", \"Producer Notification\": \"Use mechanical weeding, herbicides, or crop rotation methods.\"}, \"75\": {\"title\": \"Flowering Stage\", \"Producer Notification\": \"Apply recommended fungicides, pesticides, and maintain field hygiene.\", \"Pest & Disease Control\": \"Monitor for rust, aphids, and fungal infections.\"}, \"100\": {\"title\": \"Grain Filling\", \"Nutrient Management\": \"Apply final nitrogen dose to enhance grain quality.\", \"Producer Notification\": \"Ensure proper fertilization to promote full grain development.\"}, \"130\": {\"title\": \"Harvesting\", \"Maturity Check\": \"Confirm grains are hard and moisture is 12-14%.\", \"Producer Notification\": \"Harvest with combine harvesters or manually, avoiding shattering losses.\"}, \"140\": {\"title\": \"Post-Harvest\", \"Storage & Processing\": \"Reduce moisture and store properly to prevent spoilage.\", \"Producer Notification\": \"Dry grains thoroughly and store in airtight, ventilated storage.\"}}'),(19,'{\"1\": {\"title\": \"Land Preparation\", \"Site Selection\": \"Choose a warm, frost-free region with well-drained soil.\", \"Producer Notification\": \"Test soil pH (5.5-7.5), ensure good drainage, and remove weeds.\"}, \"2\": {\"title\": \"Land Preparation\", \"Pit Preparation\": \"Dig planting pits of appropriate size for tree growth.\", \"Producer Notification\": \"Prepare pits (1m x 1m x 1m), fill with organic manure and soil mix.\"}, \"3\": {\"title\": \"Planting\", \"Variety Selection\": \"Choose high-yield, disease-resistant mango varieties.\", \"Producer Notification\": \"Select grafted varieties like Alphonso, Kesar, or Dasheri suited to the region.\"}, \"4\": {\"title\": \"Planting\", \"Producer Notification\": \"Maintain 8-10m spacing, plant saplings at the onset of the monsoon.\", \"Spacing & Planting Method\": \"Ensure adequate spacing for tree growth.\"}, \"30\": {\"title\": \"Early Growth\", \"Irrigation Management\": \"Provide adequate water for young saplings.\", \"Producer Notification\": \"Irrigate every 2-3 days in dry weather, avoid waterlogging.\"}, \"90\": {\"title\": \"Vegetative Growth\", \"Pruning & Training\": \"Shape tree structure for better fruiting.\", \"Producer Notification\": \"Remove weak branches, ensure open canopy for sunlight penetration.\"}, \"180\": {\"title\": \"Flowering Stage\", \"Producer Notification\": \"Use neem oil, organic pesticides, or recommended chemical treatments.\", \"Pest & Disease Control\": \"Monitor for mango hoppers, mealybugs, and anthracnose.\"}, \"240\": {\"title\": \"Fruit Development\", \"Nutrient Management\": \"Boost fruit size and quality with proper fertilization.\", \"Producer Notification\": \"Apply nitrogen, phosphorus, and potassium fertilizers as per tree requirements.\"}, \"300\": {\"title\": \"Maturity & Harvesting\", \"Harvest Timing\": \"Pick mangoes at the right maturity stage for better shelf life.\", \"Producer Notification\": \"Harvest when fruits attain proper color and firmness; use hand-picking or poles.\"}, \"310\": {\"title\": \"Post-Harvest\", \"Producer Notification\": \"Store at 12-14C, use ethylene treatment for uniform ripening, and package carefully for transportation.\", \"Storage & Market Preparation\": \"Ensure proper ripening and storage conditions.\"}}'),(16,'{\"1\": {\"title\": \"Land Preparation\", \"Site Selection\": \"Choose tropical areas with well-drained, deep, loamy soil.\", \"Producer Notification\": \"Ensure annual rainfall of 2000-2500 mm and soil pH 4.5-6.0.\"}, \"2\": {\"title\": \"Land Preparation\", \"Pit Preparation\": \"Prepare planting pits for rubber saplings.\", \"Producer Notification\": \"Dig pits (75cm x 75cm x 75cm) and fill with organic manure.\"}, \"3\": {\"title\": \"Planting\", \"Variety Selection\": \"Choose high-yield, disease-resistant clones.\", \"Producer Notification\": \"Use RRII 105, PB 260, or GT1 varieties suited for the region.\"}, \"4\": {\"title\": \"Planting\", \"Producer Notification\": \"Maintain 3m x 7m spacing and plant saplings in early monsoon.\", \"Spacing & Planting Method\": \"Ensure optimal spacing for healthy tree growth.\"}, \"180\": {\"title\": \"Early Growth\", \"Producer Notification\": \"Use manual weeding, mulch, and organic pest control methods.\", \"Weed & Pest Management\": \"Keep plantation weed-free and control pests.\"}, \"365\": {\"title\": \"Vegetative Growth\", \"Pruning & Training\": \"Shape trees for better latex production.\", \"Producer Notification\": \"Remove weak shoots and maintain a single strong trunk.\"}, \"1460\": {\"title\": \"Maturity & Tapping\", \"Tapping Start\": \"Begin latex tapping when trees mature (5-7 years).\", \"Producer Notification\": \"Use half-spiral tapping, follow early morning tapping routine.\"}, \"1500\": {\"title\": \"Latex Harvesting\", \"Latex Collection\": \"Collect latex in controlled conditions for high yield.\", \"Producer Notification\": \"Use proper tapping knives, maintain 2-3 days tapping intervals.\"}, \"1520\": {\"title\": \"Post-Harvest\", \"Processing & Storage\": \"Coagulate and dry latex for market sale.\", \"Producer Notification\": \"Use formic acid for coagulation, dry sheets in smokehouses or sunlight.\"}}'),(17,'{\"1\": {\"title\": \"Land Preparation\", \"Site Selection\": \"Choose coastal or tropical regions with sandy loam soil.\", \"Producer Notification\": \"Ensure soil pH of 5.2-8.0 and adequate water supply.\"}, \"2\": {\"title\": \"Land Preparation\", \"Pit Preparation\": \"Prepare large pits for coconut saplings.\", \"Producer Notification\": \"Dig pits (1m x 1m x 1m), fill with compost and soil mix.\"}, \"3\": {\"title\": \"Planting\", \"Variety Selection\": \"Select high-yielding, disease-resistant coconut varieties.\", \"Producer Notification\": \"Use dwarf, hybrid, or tall varieties like Chowghat Orange Dwarf or Tiptur Tall.\"}, \"4\": {\"title\": \"Planting\", \"Producer Notification\": \"Maintain 7.5m x 7.5m spacing for tall varieties.\", \"Spacing & Planting Method\": \"Ensure proper spacing for better root development.\"}, \"90\": {\"title\": \"Early Growth\", \"Irrigation Management\": \"Provide adequate water for young plants.\", \"Producer Notification\": \"Irrigate weekly in dry seasons and mulch to retain moisture.\"}, \"180\": {\"title\": \"Vegetative Growth\", \"Weed & Pest Control\": \"Protect young trees from pests and weeds.\", \"Producer Notification\": \"Use manual weeding, mulching, and organic pest repellents.\"}, \"1095\": {\"title\": \"Flowering & Pollination\", \"Flowering Start\": \"Coconut trees begin flowering in 3-4 years.\", \"Producer Notification\": \"Ensure proper pollination through natural agents like wind and insects.\"}, \"1460\": {\"title\": \"Fruit Development\", \"Nutrient Management\": \"Apply fertilizers for better nut development.\", \"Producer Notification\": \"Use nitrogen, phosphorus, and potassium fertilizers based on soil tests.\"}, \"1825\": {\"title\": \"Harvesting\", \"Maturity Check\": \"Coconuts mature in 12-13 months after flowering.\", \"Producer Notification\": \"Harvest mature nuts every 45-60 days using climbing tools.\"}, \"1850\": {\"title\": \"Post-Harvest\", \"Processing & Storage\": \"Dry and store coconuts properly for sale.\", \"Producer Notification\": \"Sun-dry copra, store in ventilated areas, and package for market.\"}}'),(11,'{\"1\": {\"title\": \"Land Preparation\", \"Site Selection\": \"Choose well-drained sandy loam soil with a pH of 6.0-7.5.\", \"Producer Notification\": \"Test soil, remove weeds, and ensure proper tilth.\"}, \"2\": {\"title\": \"Land Preparation\", \"Producer Notification\": \"Use deep plowing and harrowing for fine tilth.\", \"Plowing & Bed Preparation\": \"Loosen soil for better root penetration.\"}, \"3\": {\"title\": \"Planting\", \"Seed Selection\": \"Choose high-yield, disease-resistant groundnut varieties.\", \"Producer Notification\": \"Use certified seeds like TMV 2, K-6, or ICGV 91114.\"}, \"4\": {\"title\": \"Planting\", \"Sowing Method\": \"Ensure proper seed depth and spacing.\", \"Producer Notification\": \"Sow seeds 5-6 cm deep with 30 cm row spacing.\"}, \"25\": {\"title\": \"Early Growth\", \"Weed Control\": \"Prevent weeds from competing for nutrients.\", \"Producer Notification\": \"Use pre-emergence herbicides or manual weeding.\"}, \"40\": {\"title\": \"Flowering Stage\", \"Producer Notification\": \"Apply gypsum and irrigate at flowering and pegging stages.\", \"Irrigation & Nutrient Management\": \"Ensure water availability for flowering.\"}, \"80\": {\"title\": \"Pod Formation\", \"Producer Notification\": \"Use recommended fungicides and integrated pest management.\", \"Pest & Disease Management\": \"Monitor for leaf spot, rust, and aphids.\"}, \"110\": {\"title\": \"Harvesting\", \"Maturity Check\": \"Ensure pods are fully developed and mature.\", \"Producer Notification\": \"Harvest when 70-80% of pods have hardened shells.\"}, \"120\": {\"title\": \"Post-Harvest\", \"Drying & Storage\": \"Reduce moisture content for safe storage.\", \"Producer Notification\": \"Dry pods to 8-10% moisture and store in a dry, cool place.\"}}'),(23,'{\"1\": {\"title\": \"Land Preparation\", \"Site Selection\": \"Choose well-drained, loamy soil with good organic content.\", \"Producer Notification\": \"Ensure pH 5.5-7.5 and annual rainfall of 750-1500 mm.\"}, \"2\": {\"title\": \"Land Preparation\", \"Pit Preparation\": \"Prepare deep pits for tamarind trees.\", \"Producer Notification\": \"Dig 1m x 1m x 1m pits and fill with organic manure.\"}, \"3\": {\"title\": \"Planting\", \"Variety Selection\": \"Select high-yielding grafted tamarind varieties.\", \"Producer Notification\": \"Use improved varieties like PKM 1 or indigenous types.\"}, \"4\": {\"title\": \"Planting\", \"Producer Notification\": \"Maintain 8m x 8m spacing for proper canopy development.\", \"Spacing & Planting Method\": \"Ensure adequate spacing for tree growth.\"}, \"365\": {\"title\": \"Vegetative Growth\", \"Producer Notification\": \"Water regularly in dry seasons, use mulch, and manually weed.\", \"Irrigation & Weed Control\": \"Provide adequate water for young plants.\"}, \"1460\": {\"title\": \"Flowering & Fruiting\", \"Producer Notification\": \"Encourage natural pollinators and use organic pest control.\", \"Pollination & Pest Control\": \"Ensure proper fruit set and protection.\"}, \"2555\": {\"title\": \"Harvesting\", \"Maturity Check\": \"Harvest when pods turn brown and dry naturally.\", \"Producer Notification\": \"Collect tamarind manually or shake branches for ripe fruit.\"}, \"2600\": {\"title\": \"Post-Harvest\", \"Processing & Storage\": \"Properly store tamarind for longer shelf life.\", \"Producer Notification\": \"Remove seeds, dry pulp, and store in airtight containers.\"}}'),(10,'{\"1\": {\"title\": \"Land Preparation\", \"Site Selection\": \"Choose well-drained, sandy loam soil with pH 6.0-7.5.\", \"Producer Notification\": \"Test soil for nutrient levels and remove weeds.\"}, \"2\": {\"title\": \"Land Preparation\", \"Producer Notification\": \"Deep plow and level the land, ensuring good moisture retention.\", \"Plowing & Bed Preparation\": \"Prepare the land for sowing cotton.\"}, \"3\": {\"title\": \"Planting\", \"Seed Selection\": \"Choose high-yield, pest-resistant cotton varieties.\", \"Producer Notification\": \"Use Bt cotton or hybrid varieties suited for local climate.\"}, \"4\": {\"title\": \"Planting\", \"Sowing Method\": \"Use proper spacing for optimal growth.\", \"Producer Notification\": \"Sow seeds 3-5 cm deep with 60-75 cm row spacing.\"}, \"30\": {\"title\": \"Early Growth\", \"Weed Management\": \"Prevent weeds from reducing crop yield.\", \"Producer Notification\": \"Use herbicides or mechanical weeding.\"}, \"50\": {\"title\": \"Vegetative Growth\", \"Producer Notification\": \"Apply nitrogen, phosphorus, and potassium fertilizers based on soil tests.\", \"Irrigation & Fertilization\": \"Ensure proper nutrition and water availability.\"}, \"75\": {\"title\": \"Flowering & Boll Formation\", \"Producer Notification\": \"Use biological control methods and selective pesticides.\", \"Pest & Disease Control\": \"Protect cotton from bollworms, aphids, and fungal infections.\"}, \"130\": {\"title\": \"Boll Maturity\", \"Producer Notification\": \"Reduce irrigation to avoid fiber quality deterioration.\", \"Water & Nutrient Management\": \"Ensure optimal conditions for fiber development.\"}, \"160\": {\"title\": \"Harvesting\", \"Maturity Check\": \"Pick cotton when bolls are fully open and dry.\", \"Producer Notification\": \"Harvest manually or with mechanical pickers, ensuring minimal contamination.\"}, \"170\": {\"title\": \"Post-Harvest\", \"Processing & Storage\": \"Ensure proper handling for quality cotton fibers.\", \"Producer Notification\": \"Ginning, cleaning, and storing cotton in dry, ventilated warehouses.\"}}'),(1,'{\"1\": {\"title\": \"Land Preparation\", \"Site Selection\": \"Choose a lowland or well-irrigated area with fertile soil.\", \"Producer Notification\": \"Test soil quality, ensure proper drainage, and remove weeds.\"}, \"2\": {\"title\": \"Land Preparation\", \"Plowing\": \"Loosen and aerate the soil to prepare for planting.\", \"Producer Notification\": \"Use a plow or rotavator to break up compacted soil.\"}, \"3\": {\"title\": \"Land Preparation\", \"Fertilization\": \"Boost soil nutrients with organic or chemical fertilizers.\", \"Producer Notification\": \"Apply compost, manure, or recommended fertilizers based on soil tests.\"}, \"4\": {\"title\": \"Land Preparation\", \"Soil Leveling\": \"Ensure uniform water distribution for better crop growth.\", \"Producer Notification\": \"Use leveling tools or machines to smooth out the field.\"}, \"5\": {\"title\": \"Planting\", \"Seed Selection\": \"Choose high-yield, disease-resistant rice varieties.\", \"Producer Notification\": \"Select certified seeds and prepare for sowing.\"}, \"6\": {\"title\": \"Planting\", \"Sowing Method\": \"Use direct seeding or transplanting methods.\", \"Producer Notification\": \"Broadcast seeds or plant seedlings in prepared fields.\"}, \"45\": {\"title\": \"Vegetative Growth\", \"Water Management\": \"Maintain optimal water levels in the field.\", \"Producer Notification\": \"Control irrigation and drainage based on rice growth stages.\"}, \"60\": {\"title\": \"Vegetative Growth\", \"Weed Control\": \"Prevent weed competition for nutrients and water.\", \"Producer Notification\": \"Use manual weeding, herbicides, or integrated weed management.\"}, \"90\": {\"title\": \"Flowering Stage\", \"Producer Notification\": \"Apply pesticides, fungicides, or biological control as needed.\", \"Pest & Disease Management\": \"Monitor for pests like stem borers and diseases like blast.\"}, \"120\": {\"title\": \"Grain Development\", \"Nutrient Boost\": \"Apply final fertilizer dose for grain filling.\", \"Producer Notification\": \"Use potassium and phosphorus fertilizers to improve grain quality.\"}, \"150\": {\"title\": \"Harvesting\", \"Maturity Check\": \"Ensure grains are fully developed and moisture content is optimal.\", \"Producer Notification\": \"Harvest when 80-90% of grains turn golden yellow.\"}, \"160\": {\"title\": \"Post-Harvest\", \"Drying & Storage\": \"Reduce grain moisture for safe storage.\", \"Producer Notification\": \"Dry grains to 12-14% moisture and store in a well-ventilated area.\"}}'),(24,'{\"1\": {\"title\": \"Land Preparation\", \"Site Selection\": \"Choose well-drained loamy soil with good organic matter.\", \"Producer Notification\": \"Test soil pH (6.0-7.0), remove weeds, and ensure proper drainage.\"}, \"2\": {\"title\": \"Land Preparation\", \"Plowing\": \"Loosen and aerate the soil to enhance root penetration.\", \"Producer Notification\": \"Use a plow or rotavator to break up compacted soil.\"}, \"3\": {\"title\": \"Land Preparation\", \"Fertilization\": \"Improve soil fertility with organic and chemical fertilizers.\", \"Producer Notification\": \"Apply compost, manure, or recommended fertilizers based on soil test results.\"}, \"4\": {\"title\": \"Land Preparation\", \"Bed Preparation\": \"Create raised beds or ridges for better drainage and root growth.\", \"Producer Notification\": \"Prepare beds with proper spacing (75-100 cm apart) for planting rows.\"}, \"5\": {\"title\": \"Planting\", \"Seed Selection\": \"Use high-yield, disease-resistant tomato varieties.\", \"Producer Notification\": \"Select hybrid or indigenous seeds suitable for local climate.\"}, \"6\": {\"title\": \"Planting\", \"Seedling Preparation\": \"Raise seedlings in a nursery before transplanting.\", \"Producer Notification\": \"Sow seeds in seed trays or nursery beds and water regularly.\"}, \"25\": {\"title\": \"Transplanting\", \"Producer Notification\": \"Transplant seedlings at 45-60 cm spacing in moist soil.\", \"Seedling Transplanting\": \"Move healthy seedlings to the main field after 25-30 days.\"}, \"35\": {\"title\": \"Vegetative Growth\", \"Water Management\": \"Ensure consistent moisture for healthy growth.\", \"Producer Notification\": \"Irrigate regularly but avoid waterlogging to prevent diseases.\"}, \"45\": {\"title\": \"Vegetative Growth\", \"Weed Control\": \"Keep the field free from weeds to prevent competition.\", \"Producer Notification\": \"Use manual weeding, mulch, or herbicides as necessary.\"}, \"55\": {\"title\": \"Flowering Stage\", \"Support & Pruning\": \"Provide staking for plants and remove excess shoots.\", \"Producer Notification\": \"Use bamboo stakes or trellises and prune for better airflow.\"}, \"70\": {\"title\": \"Fruit Development\", \"Producer Notification\": \"Apply pesticides, neem oil, or biological controls as needed.\", \"Pest & Disease Control\": \"Monitor for common pests like aphids and fruit borers.\"}, \"90\": {\"title\": \"Harvesting\", \"Maturity Check\": \"Harvest tomatoes at the breaker or full-ripe stage.\", \"Producer Notification\": \"Pick fruits every 3-4 days to ensure quality and continuous yield.\"}, \"100\": {\"title\": \"Post-Harvest\", \"Sorting & Storage\": \"Sort tomatoes by size and ripeness before selling.\", \"Producer Notification\": \"Store in a cool place or transport immediately to markets.\"}}');
/*!40000 ALTER TABLE `cropNotification` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cropTracking`
--

DROP TABLE IF EXISTS `cropTracking`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cropTracking` (
  `id` int NOT NULL AUTO_INCREMENT,
  `cropId` int DEFAULT NULL,
  `dailyProcedure` json DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `cropId` (`cropId`),
  CONSTRAINT `cropTracking_ibfk_1` FOREIGN KEY (`cropId`) REFERENCES `Crops` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cropTracking`
--

LOCK TABLES `cropTracking` WRITE;
/*!40000 ALTER TABLE `cropTracking` DISABLE KEYS */;
INSERT INTO `cropTracking` VALUES (8,1,'{\"Sowing\": {\"Days 11-30\": {\"Day 11\": \"Select high-yield rice seeds suitable for the region.\", \"Day 12\": \"Soak seeds in water for 24 hours to encourage germination.\", \"Day 13\": \"Drain and incubate seeds for another 24 hours.\", \"Day 14\": \"Broadcast sprouted seeds evenly across the field.\", \"Day 15\": \"Maintain shallow flooding to support seedling growth.\", \"Day 16\": \"Monitor germination progress and adjust water levels.\", \"Day 17\": \"Apply light fertilizers to support early growth.\", \"Day 18\": \"Ensure proper spacing by thinning out excess seedlings.\", \"Day 19\": \"Check for early pest infestations and apply treatments.\", \"Day 20\": \"Maintain field moisture levels.\"}}, \"Ripening\": {\"Days 181-210\": {\"Day 181\": \"Gradually reduce irrigation to dry the field.\", \"Day 190\": \"Monitor grain color change from green to golden yellow.\", \"Day 200\": \"Test grain moisture content (ideal 20-25%).\", \"Day 210\": \"Prepare for harvesting.\"}}, \"Harvesting\": {\"Days 211-240\": {\"Day 211\": \"Harvest when grains reach full maturity.\", \"Day 220\": \"Use mechanical or manual harvesting techniques.\", \"Day 230\": \"Dry harvested grains to reduce moisture.\", \"Day 240\": \"Store in moisture-free conditions.\"}}, \"Early Growth\": {\"Days 31-90\": {\"Day 31\": \"Monitor for weeds and apply selective herbicides.\", \"Day 45\": \"Apply nitrogen fertilizers to boost growth.\", \"Day 60\": \"Ensure water depth remains at optimal levels.\", \"Day 75\": \"Check for signs of pests and diseases, applying treatment as needed.\", \"Day 90\": \"Reduce water levels gradually to encourage strong roots.\"}}, \"Post-Harvest\": {\"Days 241-270\": {\"Day 241\": \"Clean and sort harvested rice grains.\", \"Day 250\": \"Store in proper silos or packaging.\", \"Day 260\": \"Process for distribution or milling.\", \"Day 270\": \"Transport to markets or processing centers.\"}}, \"Land Preparation\": {\"Days 1-10\": {\"Day 1\": \"Select a well-drained field with good sunlight.\", \"Day 2\": \"Conduct soil testing for pH and nutrients.\", \"Day 3\": \"Clear the land of weeds and debris.\", \"Day 4\": \"Apply organic compost or manure to enrich the soil.\", \"Day 5\": \"Level the soil and prepare for flooding.\", \"Day 6\": \"Flood the field with 5-10 cm of water.\", \"Day 7\": \"Plow the field while submerged to create a soft bed.\", \"Day 8\": \"Ensure proper drainage and leveling.\", \"Day 9\": \"Allow the field to settle before planting.\", \"Day 10\": \"Check for any necessary pest control measures.\"}}, \"Vegetative Growth\": {\"Days 91-150\": {\"Day 91\": \"Maintain proper water management.\", \"Day 120\": \"Apply phosphorus and potassium-based fertilizers.\", \"Day 135\": \"Monitor plant height and tillering.\", \"Day 150\": \"Prepare for panicle initiation.\"}}, \"Flowering & Grain Filling\": {\"Days 151-180\": {\"Day 151\": \"Ensure continuous water supply for flowering.\", \"Day 160\": \"Monitor pollination and grain formation.\", \"Day 170\": \"Reduce nitrogen application to avoid excessive vegetative growth.\", \"Day 180\": \"Check for grain maturity signs.\"}}}'),(14,20,'{\"Planting\": {\"Days 6-10\": {\"Day 6\": \"Choose a suitable variety, buy disease-free banana suckers.\", \"Day 7\": \"Dig planting holes (30-40cm deep, 40cm wide).\", \"Day 8\": \"Place suckers in holes upright, cover roots gently.\", \"Day 9\": \"Water newly planted suckers immediately.\", \"Day 10\": \"Inspect plants for stress, remove weak suckers.\"}}, \"Harvesting\": {\"Days 270-320\": {\"Day 270-280\": \"Harvest mature bunches (full-sized but green).\", \"Day 281-290\": \"Use sharp tools to cut carefully, store in shade.\", \"Day 291-300\": \"Handle fruits carefully to avoid bruising.\", \"Day 301-310\": \"Continue harvesting as more bananas ripen.\", \"Day 311-320\": \"Remove old plants, prepare for new ones.\"}}, \"Early Growth\": {\"Days 11-60\": {\"Day 11-20\": \"Apply organic mulch to conserve water, begin manual weeding.\", \"Day 21-30\": \"First nitrogen fertilizer dose, water 5-10L per plant weekly.\", \"Day 31-40\": \"Monitor pests, remove diseased leaves.\", \"Day 41-50\": \"Consistent watering, remove competing small suckers.\", \"Day 51-60\": \"Adjust watering/fertilization, continue weed management.\"}}, \"Post-Harvest\": {\"Days 321-350\": {\"Day 321-330\": \"Sort bananas by size and quality for market.\", \"Day 331-340\": \"Clean and package bananas properly for storage.\", \"Day 341-350\": \"Transport bananas carefully to avoid damage.\"}}, \"Land Preparation\": {\"Days 1-5\": {\"Day 1\": \"Identify a well-drained field and conduct a soil test.\", \"Day 2\": \"Remove weeds and debris, clear planting rows.\", \"Day 3\": \"Apply organic compost evenly to improve fertility.\", \"Day 4\": \"Plow and till soil, mix phosphorus fertilizers.\", \"Day 5\": \"Level soil, mark planting spots with proper spacing.\"}}, \"Flowering & Fruiting\": {\"Days 121-180\": {\"Day 121-130\": \"Remove excess suckers for strong plant growth.\", \"Day 131-140\": \"First signs of flowering, continue watering.\", \"Day 141-150\": \"Thin weaker bunches, maintain nutrients.\", \"Day 151-160\": \"Look for early fruit formation, remove malformed fruits.\", \"Day 161-170\": \"Ensure good pollination, avoid stress.\", \"Day 171-180\": \"Strengthen pest control, keep soil moist but not waterlogged.\"}}}'),(15,24,'{\"Planting\": {\"Days 6-15\": {\"Day 6\": \"Select high-yielding tomato varieties and healthy seedlings.\", \"Day 7\": \"Prepare nursery trays or seedbeds with fine soil and compost.\", \"Day 8\": \"Sow seeds in nursery trays, keep moist but not waterlogged.\", \"Day 9\": \"Cover seeds lightly with soil and provide partial shade.\", \"Day 10\": \"Water gently and monitor for germination.\", \"Day 11\": \"Apply a light dose of organic fertilizer.\", \"Day 12\": \"Harden seedlings by gradually exposing them to sunlight.\", \"Day 13\": \"Prepare main field by spacing rows 60-75 cm apart.\", \"Day 14\": \"Transplant 4-6 week old seedlings into the main field.\", \"Day 15\": \"Water immediately after transplanting to reduce stress.\"}}, \"Harvesting\": {\"Days 101-130\": {\"Day 101-110\": \"Harvest first mature tomatoes (firm, fully colored).\", \"Day 111-120\": \"Use sharp tools to cut fruits, avoid damaging stems.\", \"Day 121-130\": \"Continue harvesting regularly as fruits ripen.\"}}, \"Early Growth\": {\"Days 16-60\": {\"Day 16-25\": \"Apply mulch to retain soil moisture, begin manual weeding.\", \"Day 26-35\": \"Apply first round of nitrogen-rich fertilizer, monitor for pests.\", \"Day 36-45\": \"Stake and support plants to prevent bending.\", \"Day 46-55\": \"Prune lower leaves for better airflow and disease prevention.\", \"Day 56-60\": \"Ensure proper irrigation and weed control.\"}}, \"Post-Harvest\": {\"Days 131-140\": {\"Day 131-135\": \"Sort tomatoes by size and quality for market.\", \"Day 136-138\": \"Pack in ventilated crates to avoid crushing.\", \"Day 139-140\": \"Transport carefully to maintain freshness.\"}}, \"Land Preparation\": {\"Days 1-5\": {\"Day 1\": \"Select a well-drained field and conduct a soil test.\", \"Day 2\": \"Clear weeds, rocks, and debris from the land.\", \"Day 3\": \"Plow and till the soil to a depth of 20-30 cm.\", \"Day 4\": \"Apply well-rotted compost and mix phosphorus fertilizers.\", \"Day 5\": \"Level the soil and create raised beds for proper drainage.\"}}, \"Flowering & Fruiting\": {\"Days 61-100\": {\"Day 61-70\": \"First flowers appear, avoid overwatering to prevent blossom drop.\", \"Day 71-80\": \"Apply potassium-rich fertilizer to enhance fruit development.\", \"Day 81-90\": \"Monitor for pests (aphids, whiteflies), apply organic pesticides.\", \"Day 91-100\": \"Prune excess leaves to improve sunlight exposure.\"}}}'),(16,25,'{\"Planting\": {\"Days 7-12\": {\"Day 7\": \"Select high-yielding, disease-resistant wheat varieties suitable for local climate. Ensure seeds are certified and treated with fungicides (e.g., Thiram or Carbendazim) to prevent seed-borne diseases. Use only high-germination seeds for better yield.\", \"Day 8\": \"Sow seeds using a seed drill or by broadcasting method. Maintain proper depth (3-5 cm) to ensure good germination. Space seeds 20-25 cm apart in rows. Ensure an optimal seeding rate of 100-120 kg per hectare.\", \"Day 9\": \"After sowing, ensure proper soil contact by rolling the field with a light roller. This prevents seeds from being eaten by birds and improves germination. In dry conditions, provide light irrigation to encourage early seed growth.\", \"Day 10\": \"Apply pre-emergence herbicides (Pendimethalin or Clodinafop) to prevent early weed growth. Monitor for soil moisture and adjust irrigation if needed. Check seed placement to ensure uniform depth and spacing.\", \"Day 11\": \"Start monitoring for early pest attacks, such as termites and seed-eating insects. Apply organic or chemical pest control if necessary. Maintain moisture levels to aid uniform germination and seedling development.\", \"Day 12\": \"Inspect germination across the field and note any patches with poor emergence. If necessary, replant missing areas to maintain uniform crop stand. Adjust irrigation to prevent soil crusting, which can hinder seedling emergence.\"}}, \"Harvesting\": {\"Days 101-120\": {\"Day 101-110\": \"Wheat grains turn golden brown, indicating physiological maturity. Test moisture content (should be around 20%) before harvesting. Avoid early harvesting to prevent shriveled grains and yield loss.\", \"Day 111-120\": \"Harvest using a combine harvester or sickle. Thresh and clean grains properly to remove chaff. Store grains in moisture-free conditions to avoid fungal growth. Ensure proper ventilation in storage areas.\"}}, \"Early Growth\": {\"Days 13-30\": {\"Day 13-18\": \"Monitor seedlings for uniform growth and early disease symptoms. If gaps exist, consider light overseeding. Ensure irrigation is adequate but avoid overwatering, which can lead to root rot. Start light hoeing to break soil crust and aerate roots.\", \"Day 19-24\": \"Apply first nitrogen fertilizer (Urea: 40 kg/ha) to promote vegetative growth. Begin mechanical or manual weeding to remove competition for nutrients. Maintain optimal moisture levels for steady plant development. Monitor for cutworms and aphids, applying necessary control measures.\", \"Day 25-30\": \"Assess tillering stage; wheat begins producing multiple shoots. Proper nitrogen management is essential for strong tillers. Continue weed control using post-emergence herbicides if needed. Ensure plants are receiving sufficient sunlight and airflow for healthy growth.\"}}, \"Post-Harvest\": {\"Days 121-140\": {\"Day 121-130\": \"Sort and grade grains based on size and quality. Remove any broken or immature grains. Ensure grains are completely dry before bagging for storage.\", \"Day 131-140\": \"Transport grains carefully to market or storage facilities. Store in airtight bins to protect from pests and moisture. Conduct periodic quality checks to ensure stored grains remain in good condition.\"}}, \"Land Preparation\": {\"Days 1-6\": {\"Day 1\": \"Select a suitable field with well-drained loamy soil. Conduct soil testing to analyze nutrient levels and pH balance. Ideal pH range for wheat is 6.0-7.5. Ensure the field is free from previous crop residues to prevent pests and diseases.\", \"Day 2\": \"Plow the field to a depth of 15-20 cm to loosen compacted soil. This improves aeration and root penetration. Use a disc plow or moldboard plow depending on soil condition. Remove any large rocks or debris that could hinder seed germination.\", \"Day 3\": \"Harrow the field twice to break large soil clumps and create a fine tilth. Well-prepared soil ensures uniform seed distribution. Ensure moisture retention by avoiding excessive tilling. Level the field to facilitate proper irrigation and prevent waterlogging.\", \"Day 4\": \"Apply well-decomposed farmyard manure (10-15 tons per hectare) to enrich soil fertility. Incorporate phosphorus (DAP: 100 kg/ha) to support early root development. Use a rotavator to mix the fertilizers evenly into the soil. Ensure the field is well-drained to prevent fungal diseases.\", \"Day 5\": \"Create furrows or ridges if using furrow irrigation. Ensure appropriate spacing of 20-25 cm between rows. If using a zero-till method, ensure stubble is managed properly. Check for weeds and remove any unwanted vegetation before sowing.\", \"Day 6\": \"Ensure proper moisture levels before sowing. Use light irrigation if necessary to achieve optimal seedbed conditions. Mark the field for seed broadcasting or drill sowing. Ensure uniform distribution of nutrients before planting.\"}}, \"Flowering & Grain Filling\": {\"Days 71-100\": {\"Day 71-80\": \"Wheat enters the flowering stage, where pollen is released for fertilization. Maintain soil moisture but avoid overwatering, as wet conditions can lead to fungal infections. Protect the crop from heat stress by applying light irrigation during hot weather.\", \"Day 81-90\": \"Grain filling begins; the kernels start developing inside the wheat head. Ensure plants receive adequate potassium and phosphorus for strong grain formation. Monitor for grain diseases like Fusarium head blight and apply appropriate fungicides if needed.\", \"Day 91-100\": \"Grain hardening phase begins; chlorophyll content in leaves starts decreasing. Avoid excessive nitrogen application at this stage. Reduce irrigation frequency to prevent fungal issues. Monitor weather forecasts, as sudden rainfall can affect grain quality.\"}}, \"Stem Elongation & Booting\": {\"Days 31-70\": {\"Day 31-40\": \"Apply second round of nitrogen fertilizer (Urea: 60 kg/ha) to support tiller growth. Ensure sufficient irrigation at this stage, as water stress can reduce yield. Monitor plants for fungal diseases (e.g., rust, powdery mildew) and apply fungicides if needed.\", \"Day 41-50\": \"Wheat begins elongating as internodes stretch. Support healthy stem development with potassium-rich fertilizer (MOP: 30 kg/ha). Avoid excessive irrigation to prevent lodging (falling over of plants). Conduct pest scouting for aphids and rust fungus.\", \"Day 51-60\": \"Booting stage begins, where the grain head starts forming inside the stem. Monitor plants closely for any nutrient deficiencies. If leaf yellowing occurs, apply foliar sprays of micronutrients like zinc and iron. Keep an eye on weather conditions, as excessive rain can increase disease risk.\", \"Day 61-70\": \"Final leaf (flag leaf) emerges, which is crucial for grain filling. Protect it from fungal diseases using fungicides like Propiconazole. Ensure proper irrigation, as water stress at this stage can reduce grain formation. Avoid nitrogen application beyond this point to prevent excessive vegetative growth.\"}}}'),(17,19,'{\"Planting\": {\"Days 11-20\": {\"Day 11\": \"Select high-yielding, disease-resistant mango varieties like Alphonso, Kesar, or Dasheri. Ensure the saplings are healthy, around 1-2 years old, and 60-100 cm in height.\", \"Day 12\": \"Before planting, prune any damaged roots and dip them in a fungicide solution (Carbendazim 2g/L) to prevent fungal infections. Soak roots in a biofertilizer solution (Azospirillum or Mycorrhiza) for better nutrient uptake.\", \"Day 13\": \"Transplant saplings in the prepared pits. Place the sapling upright, ensuring the graft union is at least 5-10 cm above the soil surface. Cover the roots firmly with soil to prevent air pockets.\", \"Day 14\": \"Water the plants immediately after transplanting to settle the soil and remove air gaps. Apply 5-10 liters of water per pit. Ensure proper mulching around the base to retain soil moisture and suppress weeds.\", \"Day 15\": \"Provide staking support for young plants to prevent wind damage. Use bamboo stakes and tie saplings loosely with soft cloth or jute ropes to avoid stem injury.\", \"Day 16\": \"Check for signs of transplant shock such as leaf wilting. If necessary, provide shade using dry grass or plastic nets to reduce direct sun exposure.\", \"Day 17\": \"Apply organic mulch (dry leaves or straw) around the base to regulate soil temperature and conserve moisture. Avoid piling mulch directly against the stem to prevent rot.\", \"Day 18\": \"Monitor soil moisture levels daily. Watering frequency depends on weather conditions, but avoid overwatering as mango roots are sensitive to waterlogging.\", \"Day 19\": \"Inspect for early signs of pests such as mango hoppers and mealybugs. Use neem oil spray (5ml/L) as a preventive measure.\", \"Day 20\": \"Apply a light dose of nitrogen fertilizer (20g of urea per plant) to boost initial growth. Ensure uniform application and avoid direct contact with the stem.\"}}, \"Harvesting\": {\"Days 181-200\": {\"Day 181-190\": \"Check fruit maturity indicators like color change and aroma. Ideal harvesting stage is when fruits turn from green to yellowish with a slight firmness.\", \"Day 191-200\": \"Harvest using a picking pole or handpicking method to avoid bruising. Handle fruits carefully and place them in soft, ventilated containers to prevent damage.\"}}, \"Post-Harvest\": {\"Days 201-220\": {\"Day 201-210\": \"Sort and grade mangoes based on size, shape, and ripeness. Remove any damaged or diseased fruits.\", \"Day 211-220\": \"Store harvested mangoes in a cool, dry place. Maintain proper humidity levels to extend shelf life. Transport mangoes carefully to market or processing centers.\"}}, \"Land Preparation\": {\"Days 1-10\": {\"Day 1\": \"Select a well-drained site with sandy loam soil. Conduct soil testing to check pH (ideal range: 5.5-7.5) and nutrient levels. Mango trees prefer deep, fertile soil with good aeration. Ensure the location has proper sunlight exposure for optimal growth.\", \"Day 2\": \"Clear land of weeds, stones, and debris. Remove any unwanted vegetation that may compete for nutrients. If necessary, use herbicides or manual weeding methods. Avoid planting mango trees in areas with frequent waterlogging, as this can lead to root rot.\", \"Day 3\": \"Plow the field to a depth of 60-90 cm to loosen the soil and improve aeration. Deep plowing helps in breaking hardpan layers and ensures better root penetration. Use a disc plow or moldboard plow depending on the soil type. Allow the soil to aerate for 1-2 days after plowing.\", \"Day 4\": \"Apply organic manure (10-15 kg per pit) and mix it well into the soil. Organic matter such as compost or farmyard manure improves soil fertility and water retention. If the soil is deficient in essential nutrients, apply phosphorus (SSP 250g per pit) and potassium.\", \"Day 5\": \"Dig planting pits of 1m x 1m x 1m dimensions at a spacing of 8-10 meters apart. Proper spacing prevents overcrowding and ensures enough airflow between trees, reducing disease risks. The size of the pit helps in root expansion and nutrient absorption.\", \"Day 6\": \"Leave pits open for 1-2 weeks to allow sunlight exposure, which helps in sterilizing the soil and reducing soil-borne pathogens. This also allows soil structure to stabilize before planting.\", \"Day 7\": \"Fill pits with a mixture of topsoil, compost, and well-decomposed manure. Add neem cake (500g per pit) to prevent soil-borne pests. Ensure the pits are filled up to 3/4th level to allow proper root establishment after planting.\", \"Day 8\": \"Install a drainage system if necessary. Ensure water does not accumulate around pits. If planting on a slope, contour bunding or trenching should be done to prevent soil erosion.\", \"Day 9\": \"Irrigate the field lightly to improve moisture levels before planting. Avoid waterlogging. Check that the pits remain firm and well-prepared for sapling transplantation.\", \"Day 10\": \"Prepare for sapling transplantation by selecting high-quality grafted mango saplings. Ensure they are disease-free and of a recommended variety suited to the local climate.\"}}, \"Fruit Development\": {\"Days 121-180\": {\"Day 121-140\": \"Apply calcium nitrate (20g per tree) to strengthen fruit skin and prevent cracking. Provide protective netting to avoid bird and fruit fly attacks.\", \"Day 141-160\": \"As fruits develop, reduce irrigation frequency to improve sweetness. Avoid excessive nitrogen, as it may lead to poor fruit quality.\", \"Day 161-180\": \"Mature fruits start changing color based on variety. Stop irrigation 10-15 days before harvest to improve fruit taste and shelf life.\"}}, \"Vegetative Growth\": {\"Days 21-60\": {\"Day 21-30\": \"Mango saplings establish their root system. Regularly water the plants but avoid excessive moisture. Apply farmyard manure (2 kg per tree) every 15 days to promote strong growth.\", \"Day 31-40\": \"Start training and pruning to develop a strong tree structure. Remove any weak, diseased, or crisscrossing branches to ensure better light penetration.\", \"Day 41-50\": \"Apply second dose of fertilizer (50g urea, 50g SSP, and 50g MOP per plant) to support vegetative growth. Keep weeds under control through manual weeding or light hoeing.\", \"Day 51-60\": \"Monitor for fungal diseases like anthracnose. If detected, spray copper-based fungicides like Bordeaux mixture (1%) to prevent disease spread.\"}}, \"Flowering & Fruiting\": {\"Days 61-120\": {\"Day 61-80\": \"Mango trees start forming flower buds. Apply potassium-rich fertilizer (MOP 50g per tree) to improve flower quality. Reduce nitrogen application to avoid excessive vegetative growth.\", \"Day 81-100\": \"Ensure proper pollination by allowing bee activity. Avoid insecticide sprays during flowering to protect pollinators. Light irrigation helps in good flower retention.\", \"Day 101-120\": \"Fruit setting begins. Monitor for pests like mango hoppers and fruit borers. Use biological control methods like Trichogramma parasitoids for eco-friendly pest management.\"}}}'),(18,17,'{\"Planting\": {\"Days 6-15\": {\"Day 6\": \"Select high-quality coconut seedlings from a certified nursery. Choose seedlings that are 8-12 months old, with at least 6 healthy leaves and a strong root system. Avoid seedlings with damaged roots or weak stems. Transport seedlings carefully to prevent root disturbance.\", \"Day 7\": \"Prepare the seedlings by soaking the root ball in a mild fungicide solution to prevent root diseases. Trim off any damaged or excessively long roots before planting. Allow the seedlings to air dry for a few hours before transplanting. Ensure the seedlings remain moist but not waterlogged.\", \"Day 8\": \"Transplant the seedlings into the prepared pits, ensuring the base is at ground level. Position the nut (seed) slightly above the soil surface to prevent rotting. Cover the roots gently with soil, pressing lightly to remove air pockets. Water the seedlings immediately after planting to settle the soil around the roots.\", \"Day 9\": \"Apply a layer of mulch (coconut husks, dried leaves, or straw) around the base of the seedlings to retain moisture. Avoid piling mulch too close to the stem to prevent fungal growth. Monitor soil moisture levels and water daily if conditions are dry. Check for signs of transplant shock like wilting or yellowing leaves.\", \"Day 10\": \"Install temporary shade using coconut fronds or other natural materials to protect young plants from intense sunlight. Keep the surrounding area weed-free to prevent competition for nutrients and water. Start planning irrigation methods like drip irrigation for efficient water management. Apply organic compost around the plants to support early root development.\", \"Day 11-15\": \"Continue daily watering and monitor plant health. Begin light weeding to prevent competition for nutrients. Apply a balanced fertilizer (NPK 10:10:10) in small doses to support early growth. If pest attacks (like termites or beetles) are noticed, use organic pest control methods.\"}}, \"Harvesting\": {\"Days 1001-1500\": {\"Day 1001-1200\": \"Coconuts mature and develop hard shells. Check for signs of ripeness, such as a brown husk and dry fibers. Use skilled labor or mechanical climbers to safely harvest nuts. Avoid harvesting too early, as immature nuts have lower oil content.\", \"Day 1201-1350\": \"Harvest nuts every 45-60 days to ensure continuous production. Collect fallen nuts and inspect for quality. Separate tender coconuts for fresh consumption and mature coconuts for processing. Transport harvested nuts carefully to avoid bruising.\", \"Day 1351-1500\": \"Continue scheduled harvesting. Remove old, unproductive palms and replace them with new seedlings. Maintain soil fertility by applying compost and organic matter after each harvest cycle. Ensure proper storage and drying of harvested coconuts before processing.\"}}, \"Early Growth\": {\"Days 16-100\": {\"Day 16-30\": \"Monitor plant growth and continue weed removal. Ensure proper drainage around the plants to prevent root rot. Apply organic manure (vermicompost or cow dung) once every two weeks. Start periodic pest monitoring for early detection of insect attacks.\", \"Day 31-50\": \"Introduce a light dose of nitrogen-rich fertilizer (like urea) to support leaf and root development. Continue mulching to maintain soil moisture and temperature. Check for fungal diseases and apply bio-fungicides if necessary. Ensure seedlings receive adequate sunlight for strong growth.\", \"Day 51-75\": \"Begin forming a watering schedule based on seasonal needs. Support young trees with temporary wooden stakes in areas prone to strong winds. Check for signs of nutrient deficiency (yellowing leaves, stunted growth) and apply corrective fertilizers if needed. Remove any damaged or weak seedlings to improve the overall plantation strength.\", \"Day 76-100\": \"Maintain regular irrigation and weed control. Introduce potassium-based fertilizers to enhance disease resistance and improve early plant vigor. Monitor for common coconut pests like rhinoceros beetles and red palm weevils. Adjust fertilizer and watering schedules based on rainfall patterns.\"}}, \"Post-Harvest\": {\"Days 1501-1600\": {\"Day 1501-1550\": \"Sort coconuts based on size, weight, and quality. Discard any damaged or diseased nuts. Store mature coconuts in a dry, ventilated area to prevent fungal growth. For copra production, cut coconuts and dry them under the sun.\", \"Day 1551-1575\": \"Transport coconuts to market or processing units using cushioned crates to prevent cracking. Tender coconuts should be transported in cool conditions to retain freshness. Process mature coconuts into oil, fiber, or desiccated coconut as per market demand.\", \"Day 1576-1600\": \"Evaluate the productivity of the plantation and make improvements for the next cycle. Replenish soil nutrients and prepare for the next round of seedlings. Maintain records of yield and revenue for better farm management.\"}}, \"Land Preparation\": {\"Days 1-5\": {\"Day 1\": \"Select a well-drained field with deep, sandy loam soil rich in organic matter. Ensure the site has good sunlight and proper air circulation. Conduct a soil test to check pH (ideal: 5.5-7.5) and nutrient availability. Based on results, plan soil amendments like lime for pH correction or organic matter for nutrient enrichment.\", \"Day 2\": \"Clear the land by removing weeds, bushes, and stones to prepare a clean planting area. Avoid using chemical herbicides; manual clearing is recommended for better soil health. Remove old tree stumps and ensure proper drainage to prevent waterlogging. Create contour bunds if planting in sloped areas to reduce soil erosion.\", \"Day 3\": \"Plow the land to a depth of 50-60 cm to loosen compacted soil and improve root penetration. Mix in organic compost (well-rotted farmyard manure) to enhance soil fertility. Allow the soil to rest for a day for better aeration and decomposition of organic matter. If the land is prone to termite attacks, apply neem cake as a natural pesticide.\", \"Day 4\": \"Dig planting pits of 1m x 1m x 1m dimensions for better root establishment. Space the pits at 7-10 meters apart for proper growth and air circulation. Leave the pits open for 2-3 weeks to allow harmful soil gases to escape. Fill the pits with a mixture of topsoil, compost, and phosphorus fertilizers (single superphosphate) to boost root development.\", \"Day 5\": \"Level the field and ensure all pits are filled with the prepared soil mixture. If the area has poor water retention, consider adding coir pith or organic mulches. Mark the planting spots clearly for accurate seedling placement. Install temporary windbreaks (like banana or areca plants) in open fields to protect young plants from strong winds.\"}}, \"Flowering & Fruiting\": {\"Days 101-1000\": {\"Day 101-300\": \"Encourage strong root development by applying phosphate-based fertilizers. Ensure trees receive sufficient water, especially during dry seasons. Introduce organic pest repellents to protect young leaves. Observe early signs of flowering and maintain proper nutrient balance.\", \"Day 301-600\": \"First signs of inflorescence (flowering) appear. Monitor pollination success and bee activity. If necessary, hand-pollinate to improve fruit set. Continue providing balanced nutrition to support flower and fruit development. Avoid excessive nitrogen application as it can reduce fruit yield.\", \"Day 601-900\": \"Developing nuts become visible. Protect young nuts from insect damage using organic sprays. Avoid excessive water stress, as it can cause premature fruit drop. Remove weak or diseased trees to focus nutrients on healthy plants. Continue mulching and fertilization.\", \"Day 901-1000\": \"Coconuts start reaching full size but remain immature. Reduce nitrogen application and focus on potassium and magnesium fertilizers. Maintain regular irrigation, particularly during drought conditions. Watch for fruit pests like coconut mites and implement control measures if necessary.\"}}}');
/*!40000 ALTER TABLE `cropTracking` ENABLE KEYS */;
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
  `Total_Estimation` int DEFAULT '0',
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
INSERT INTO `estimation` VALUES (1,1,7500,3000,1500,2000,1000,2500,3000,1000,5000,26500),(2,2,6500,2500,1200,1800,900,2200,2800,800,5000,23700),(3,3,6000,2000,1000,1500,800,2100,2500,700,5000,21600),(4,4,6500,2500,1200,1800,900,2200,2800,800,5000,23700),(5,5,5000,1500,800,1200,700,2000,2300,600,5000,19100),(6,6,4500,1200,700,1000,600,1800,2000,500,5000,17300),(7,7,6000,2200,1000,1500,900,2200,2500,700,5000,22000),(8,8,5500,1800,900,1300,750,2100,2400,600,5000,20350),(9,9,10000,4000,2500,4000,2000,5000,4500,1500,5000,38500),(10,10,8500,3500,1800,2500,1500,3500,4000,1000,5000,31300),(11,11,7000,2500,1500,2000,1000,2500,3000,900,5000,25400),(12,12,6500,2000,1200,1800,800,2200,2500,700,5000,22700),(13,13,5500,2000,1000,1500,800,2100,2300,600,5000,20800),(14,14,15000,6000,4000,6000,3000,7000,6500,2000,5000,54500),(29,15,14000,5500,3500,5500,2800,6500,6000,1800,5000,50600),(30,16,18000,8000,5000,7500,4500,8500,7000,3000,5000,66500),(31,17,9000,3500,2000,3500,2000,4000,4500,1200,5000,34700),(32,18,12000,5000,3500,5500,2500,5500,6000,2000,5000,47000),(33,19,8000,2500,1500,2000,1200,3500,4000,1000,5000,28700),(34,20,7000,2000,1200,1500,800,2500,3000,700,5000,23700),(35,21,6000,1800,900,1300,700,2000,2500,600,5000,20800),(36,22,6500,2000,1200,1500,800,2200,2800,700,5000,22700),(37,23,7000,2500,1300,2000,1000,2500,3000,800,5000,25100),(38,24,5500,1500,800,1200,700,2000,2300,600,5000,19600);
/*!40000 ALTER TABLE `estimation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `fertilizer`
--

DROP TABLE IF EXISTS `fertilizer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `fertilizer` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(80) DEFAULT NULL,
  `initialPrice` int DEFAULT NULL,
  `finalPrice` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=55 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fertilizer`
--

LOCK TABLES `fertilizer` WRITE;
/*!40000 ALTER TABLE `fertilizer` DISABLE KEYS */;
INSERT INTO `fertilizer` VALUES (1,'Zinc Sulfate (21% Zn)',125,200),(2,'Magnesium Sulfate (Epsom Salt)',125,225),(3,'Sulphur (Elemental)',100,150),(4,'Boron (Soluble Borax)',400,600),(5,'Humic Acid',200,500),(6,'Potassium Nitrate (13-0-46)',200,300),(7,'Copper Sulfate',225,300),(8,'Iron Chelate (Fe-EDTA)',5000,12500),(9,'Manganese Sulfate',150,250),(10,'Organic Manure (Farmyard Manure)',8,20),(11,'Vermicompost',100,250),(12,'Neem Cake',75,150),(13,'Seaweed Extract Fertilizer',250,1000),(14,'Bio-pesticides (e.g., Trichoderma, Beauveria)',1250,3000),(15,'Lime (Dolomitic, Agricultural Lime)',12,25),(16,'Rock Phosphate',100,150),(17,'Potassium Sulfate (SOP, 0-0-50)',250,350),(18,'Algae Extract',250,800),(19,'Urea (46-0-0)',100,175),(20,'Ammonium Nitrate (34-0-0)',125,200),(21,'DAP (Diammonium Phosphate, 18-46-0)',175,275),(22,'MOP (Muriate of Potash, 0-0-60)',150,225),(23,'Superphosphate (Single Super Phosphate, 0-20-0)',125,200),(24,'NPK Fertilizers (e.g., 10-26-26, 20-20-0, etc.)',125,225),(25,'Calcium Ammonium Nitrate (CAN)',150,225),(26,'Gypsum (Calcium Sulfate)',15,40),(27,'Potash',150,225),(28,'Fish Meal Fertilizer',350,750),(29,'Bio-fertilizers (e.g., Rhizobium, Azotobacter)',100,300),(30,'Compost (Organic)',10,30),(31,'Ammonium Nitrate (33-0-0)',150,225),(32,'Superphosphate (Single Superphosphate - SSP)',50,75),(33,'Urea Phosphate (17-44-0)',125,175),(34,'Gypsum',15,30),(35,'Calcium Nitrate',200,250),(36,'Humic and Fulvic Acids',5000,15000),(37,'Magnesium Oxide',125,175),(38,'Potash (Muriate of Potash - MOP)',150,250),(39,'Borax (Boron Supplement)',1500,4000),(40,'Ammonium Sulphate (21% Nitrogen, 24% Sulfur)',125,175),(41,'Ferrous Sulfate',175,250),(42,'Magnesium Sulfate (MgSO)',150,225),(43,'Potassium Chloride (Muriate of Potash - MOP)',150,225),(44,'Vermiwash',50,150),(45,'Biological Fertilizers (Rhizobium, Azotobacter)',1000,3000),(46,'Micronutrient Mix (Zn, Fe, Mn, Cu)',500,2000),(47,'Ammonium Polyphosphate (APP)',125,200),(48,'Magnesium Sulfate Heptahydrate',150,250),(49,'Biochar',250,1000),(50,'Compost (Organic Fertilizer)',15,25),(51,'Bone Meal Fertilizer',1000,2500),(52,'Fish Meal (Organic Fertilizer)',1250,5000),(53,'Potassium Magnesium Sulfate',150,200),(54,'Chelated Iron Fertilizer',7500,15000);
/*!40000 ALTER TABLE `fertilizer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `invoiceForFarmLand`
--

DROP TABLE IF EXISTS `invoiceForFarmLand`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `invoiceForFarmLand` (
  `id` int NOT NULL AUTO_INCREMENT,
  `landPreparation` varchar(40) DEFAULT NULL,
  `seed` varchar(40) DEFAULT NULL,
  `sowing` varchar(40) DEFAULT NULL,
  `fertilizer` varchar(40) DEFAULT NULL,
  `pesticides` varchar(40) DEFAULT NULL,
  `irrigation` varchar(40) DEFAULT NULL,
  `forLabor` varchar(30) DEFAULT NULL,
  `miscellaneous` varchar(30) DEFAULT NULL,
  `farmLandId` int DEFAULT NULL,
  `totalPrice` double DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `invoiceForFarmLand`
--

LOCK TABLES `invoiceForFarmLand` WRITE;
/*!40000 ALTER TABLE `invoiceForFarmLand` DISABLE KEYS */;
/*!40000 ALTER TABLE `invoiceForFarmLand` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `notifications`
--

DROP TABLE IF EXISTS `notifications`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `notifications` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `message` json NOT NULL,
  `status` enum('unread','read') DEFAULT 'unread',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `farm_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `ui` (`farm_id`),
  CONSTRAINT `notifications_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `Users` (`id`),
  CONSTRAINT `ui` FOREIGN KEY (`farm_id`) REFERENCES `FarmLands` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=150 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `notifications`
--

LOCK TABLES `notifications` WRITE;
/*!40000 ALTER TABLE `notifications` DISABLE KEYS */;
INSERT INTO `notifications` VALUES (139,41,'{\"title\": \"Land Preparation\", \"Site Selection\": \"Choose well-drained, fertile soil with good organic content.\", \"Producer Notification\": \"Test soil for nutrients, ensure proper drainage, and remove weeds.\"}','unread','2025-02-26 12:33:40',1028),(140,41,'{\"title\": \"Vegetative Growth\", \"Weed Control\": \"Suppress weed competition for nutrients and sunlight.\", \"Producer Notification\": \"Use mechanical weeding, herbicides, or crop rotation methods.\"}','unread','2025-02-26 13:17:40',1028),(141,41,'{\"title\": \"Grain Filling\", \"Nutrient Management\": \"Apply final nitrogen dose to enhance grain quality.\", \"Producer Notification\": \"Ensure proper fertilization to promote full grain development.\"}','unread','2025-02-26 14:12:40',1028),(142,41,'{\"title\": \"Land Preparation\", \"Plowing\": \"Loosen and aerate the soil to enhance root penetration.\", \"Producer Notification\": \"Use deep plowing and harrowing to break compact soil.\"}','unread','2025-02-26 12:34:40',1028),(143,41,'{\"title\": \"Land Preparation\", \"Fertilization\": \"Improve soil fertility with organic or chemical fertilizers.\", \"Producer Notification\": \"Apply nitrogen, phosphorus, and potassium based on soil test results.\"}','unread','2025-02-26 12:35:40',1028),(144,41,'{\"title\": \"Planting\", \"Seed Selection\": \"Choose high-yield, drought-resistant wheat varieties.\", \"Producer Notification\": \"Use certified seeds suited to local climate conditions.\"}','unread','2025-02-26 12:36:40',1028),(145,41,'{\"title\": \"Planting\", \"Sowing Method\": \"Use broadcasting, drilling, or dibbling methods.\", \"Producer Notification\": \"Ensure proper seed depth and spacing for uniform germination.\"}','unread','2025-02-26 12:37:40',1028),(146,41,'{\"title\": \"Vegetative Growth\", \"Irrigation Management\": \"Maintain soil moisture at critical growth stages.\", \"Producer Notification\": \"Apply irrigation at tillering, jointing, and heading stages.\"}','unread','2025-02-26 13:02:40',1028),(147,41,'{\"title\": \"Post-Harvest\", \"Storage & Processing\": \"Reduce moisture and store properly to prevent spoilage.\", \"Producer Notification\": \"Dry grains thoroughly and store in airtight, ventilated storage.\"}','unread','2025-02-26 14:52:40',1028),(148,41,'{\"title\": \"Flowering Stage\", \"Producer Notification\": \"Apply recommended fungicides, pesticides, and maintain field hygiene.\", \"Pest & Disease Control\": \"Monitor for rust, aphids, and fungal infections.\"}','unread','2025-02-26 13:47:40',1028),(149,41,'{\"title\": \"Harvesting\", \"Maturity Check\": \"Confirm grains are hard and moisture is 12-14%.\", \"Producer Notification\": \"Harvest with combine harvesters or manually, avoiding shattering losses.\"}','unread','2025-02-26 14:42:40',1028);
/*!40000 ALTER TABLE `notifications` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `procedureForCrop`
--

DROP TABLE IF EXISTS `procedureForCrop`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `procedureForCrop` (
  `id` int NOT NULL AUTO_INCREMENT,
  `cropProcedure` json DEFAULT NULL,
  `cropId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `cropId` (`cropId`),
  CONSTRAINT `procedureForCrop_ibfk_1` FOREIGN KEY (`cropId`) REFERENCES `Crops` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `procedureForCrop`
--

LOCK TABLES `procedureForCrop` WRITE;
/*!40000 ALTER TABLE `procedureForCrop` DISABLE KEYS */;
INSERT INTO `procedureForCrop` VALUES (1,'{\"Planting\": {\"Days\": \"6-10\", \"Planting\": \"Space banana plants 2-3 meters apart.\", \"Watering\": \"Water immediately after planting.\", \"Choose Variety\": \"Select banana variety suited for your climate.\", \"Planting Depth\": \"Ensure roots are covered and the stem is upright.\"}, \"Ripening\": {\"Days\": \"181-270\", \"Disease Check\": \"Ensure fruits are not infected with fungal diseases.\", \"Protect Fruits\": \"Wrap bunches in cloth bags to protect from pests.\", \"Reduce Watering\": \"Slightly reduce watering to avoid over-saturation.\"}, \"Harvesting\": {\"Days\": \"270-360\", \"Timing\": \"Harvest when fruits are full-sized but still green (for long shelf-life).\", \"Cutting\": \"Use a sharp knife to cut the entire bunch from the plant.\", \"NewInfo\": \"Handle with care\", \"Ripening\": \"Allow bananas to ripen off the plant.\"}, \"Early Growth\": {\"Days\": \"11-60\", \"Mulch\": \"Apply organic mulch to retain moisture and control weeds.\", \"Fertilize\": \"Apply nitrogen-rich fertilizer (organic or chemical).\", \"Weed Control\": \"Remove weeds manually or use herbicides.\", \"Water Regularly\": \"Ensure soil remains consistently moist.\"}, \"Post-Harvest\": {\"Days\": \"361-400\", \"Storage\": \"Store bananas in a cool place, away from sunlight.\", \"Selling or Consumption\": \"Once ripe, bananas can be sold or consumed fresh.\"}, \"Land Preparation\": {\"Days\": \"1-5\", \"Fertilize\": \"Apply organic compost or well-rotted manure to enrich soil.\", \"Plow & Till\": \"Prepare soil for good root growth.\", \"Site Selection\": \"Choose a well-drained area with ample sunlight.\"}, \"Vegetative Growth\": {\"Days\": \"61-120\", \"Support\": \"Use stakes to support growing plants if needed.\", \"Watering\": \"Continue regular watering, especially during dry spells.\", \"Fertilization\": \"Apply additional fertilizer (balanced NPK mix).\", \"Pest & Disease Management\": \"Watch for pests like aphids, and fungal infections.\"}, \"Flowering & Fruiting\": {\"Days\": \"121-180\", \"Thinning\": \"Remove some suckers to focus energy on the main plant.\", \"Watering\": \"Maintain regular watering.\", \"Fertilize\": \"Apply potassium-based fertilizer to encourage fruiting.\", \"Flowering\": \"Bananas start flowering in 9-12 months (depends on variety).\"}}',20);
/*!40000 ALTER TABLE `procedureForCrop` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-02-26 19:26:14
