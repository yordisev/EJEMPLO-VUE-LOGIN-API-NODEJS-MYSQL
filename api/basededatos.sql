-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         10.4.19-MariaDB - mariadb.org binary distribution
-- SO del servidor:              Win64
-- HeidiSQL Versión:             11.3.0.6295
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Volcando estructura de base de datos para node_auth_api
CREATE DATABASE IF NOT EXISTS `node_auth_api` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE `node_auth_api`;

-- Volcando estructura para tabla node_auth_api.users
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Volcando datos para la tabla node_auth_api.users: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` (`id`, `name`, `email`, `password`) VALUES
	(4, 'Andres Reales', 'andres@redes.com', '$2a$12$d3/.gUaudyyGSZhRGCQAHO3d//mMVke47fC9BPeTwSSuGp9NgK5u6'),
	(5, 'Carlos Freile', 'carloss@redes.com', '$2a$12$ULBkDApuoKUbiN4QXQzN9.TBX22IVUk8x2c/tb66ISoPTo6oz90yG'),
	(6, 'avis cañate', 'avis@redes.com', '$2a$12$hK7FJEEv/YBf9F.fYjMp0.uWTMICH6SwhCkAqVSNqO1ZoYuLXCO1O'),
	(7, 'oscar sara', 'oscar@redes.com', '$2a$12$W69RJxeJl8/uSgFinAz3weORjWs7cDtYGg8WhSc3s2.8RoviBZJJy'),
	(8, 'ada perez', 'ada@redes.com', '$2a$12$pVqaAbZfSqyw.hsjSTW.Je5af064qNj8UeSBw2TfXiCv9FP6ghNBy');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
