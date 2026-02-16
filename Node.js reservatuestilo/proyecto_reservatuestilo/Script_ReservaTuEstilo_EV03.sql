-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema reservatuestilo
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema reservatuestilo
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `reservatuestilo` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `reservatuestilo` ;

-- -----------------------------------------------------
-- Table `reservatuestilo`.`usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `reservatuestilo`.`usuarios` (
  `id_usuario` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(100) NOT NULL,
  `correo` VARCHAR(100) NOT NULL,
  `contrasena` VARCHAR(255) NOT NULL,
  `rol` ENUM('Admin', 'Barbero', 'Cliente') NOT NULL,
  PRIMARY KEY (`id_usuario`),
  UNIQUE INDEX `correo` (`correo` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `reservatuestilo`.`administradores`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `reservatuestilo`.`administradores` (
  `id_admin` INT NOT NULL,
  `sede_encargada` VARCHAR(50) NULL DEFAULT NULL,
  `permisos_nivel` INT NULL DEFAULT '1',
  PRIMARY KEY (`id_admin`),
  CONSTRAINT `administradores_ibfk_1`
    FOREIGN KEY (`id_admin`)
    REFERENCES `reservatuestilo`.`usuarios` (`id_usuario`)
    ON DELETE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `reservatuestilo`.`clientes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `reservatuestilo`.`clientes` (
  `id_cliente` INT NOT NULL,
  `telefono` VARCHAR(15) NULL DEFAULT NULL,
  `preferencias` TEXT NULL DEFAULT NULL,
  PRIMARY KEY (`id_cliente`),
  CONSTRAINT `clientes_ibfk_1`
    FOREIGN KEY (`id_cliente`)
    REFERENCES `reservatuestilo`.`usuarios` (`id_usuario`)
    ON DELETE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `reservatuestilo`.`reservas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `reservatuestilo`.`reservas` (
  `id_reserva` INT NOT NULL AUTO_INCREMENT,
  `codigo_confirmacion` VARCHAR(10) NULL DEFAULT NULL,
  `fecha_solicitud` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `metodo_pago` ENUM('Efectivo', 'Tarjeta', 'Transferencia') NULL DEFAULT 'Efectivo',
  `id_cliente` INT NULL DEFAULT NULL,
  PRIMARY KEY (`id_reserva`),
  UNIQUE INDEX `codigo_confirmacion` (`codigo_confirmacion` ASC) VISIBLE,
  INDEX `id_cliente` (`id_cliente` ASC) VISIBLE,
  CONSTRAINT `reservas_ibfk_1`
    FOREIGN KEY (`id_cliente`)
    REFERENCES `reservatuestilo`.`clientes` (`id_cliente`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `reservatuestilo`.`barberos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `reservatuestilo`.`barberos` (
  `id_barbero` INT NOT NULL,
  `especialidad` VARCHAR(50) NULL DEFAULT NULL,
  `estado_disponibilidad` ENUM('Activo', 'Inactivo') NULL DEFAULT 'Activo',
  PRIMARY KEY (`id_barbero`),
  CONSTRAINT `barberos_ibfk_1`
    FOREIGN KEY (`id_barbero`)
    REFERENCES `reservatuestilo`.`usuarios` (`id_usuario`)
    ON DELETE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `reservatuestilo`.`servicios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `reservatuestilo`.`servicios` (
  `id_servicio` INT NOT NULL AUTO_INCREMENT,
  `nombre_servicio` VARCHAR(50) NOT NULL,
  `precio` DECIMAL(10,2) NOT NULL,
  `duracion_minutos` INT NOT NULL,
  PRIMARY KEY (`id_servicio`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `reservatuestilo`.`agenda`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `reservatuestilo`.`agenda` (
  `id_cita` INT NOT NULL AUTO_INCREMENT,
  `id_reserva` INT NULL DEFAULT NULL,
  `id_barbero` INT NULL DEFAULT NULL,
  `id_servicio` INT NULL DEFAULT NULL,
  `fecha_hora_turno` DATETIME NOT NULL,
  `estado_turno` ENUM('Programado', 'Realizado', 'Cancelado') NULL DEFAULT 'Programado',
  PRIMARY KEY (`id_cita`),
  INDEX `id_reserva` (`id_reserva` ASC) VISIBLE,
  INDEX `id_barbero` (`id_barbero` ASC) VISIBLE,
  INDEX `id_servicio` (`id_servicio` ASC) VISIBLE,
  CONSTRAINT `agenda_ibfk_1`
    FOREIGN KEY (`id_reserva`)
    REFERENCES `reservatuestilo`.`reservas` (`id_reserva`)
    ON DELETE CASCADE,
  CONSTRAINT `agenda_ibfk_2`
    FOREIGN KEY (`id_barbero`)
    REFERENCES `reservatuestilo`.`barberos` (`id_barbero`),
  CONSTRAINT `agenda_ibfk_3`
    FOREIGN KEY (`id_servicio`)
    REFERENCES `reservatuestilo`.`servicios` (`id_servicio`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
