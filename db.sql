-- CREATE DATABASE todo_database;

-- \c into todo_database

-- CREATE TABLE todo(
--     todo_id SERIAL PRIMARY KEY,
--     "description" VARCHAR(255)
-- );

-- DROP TABLE IF EXISTS `visitors`;
-- CREATE TABLE `visitors` (
--   `id` BIGINT(20) UNSIGNED NOT NULL AUTO_INCREMENT,
--   `ip` VARCHAR(32) NOT NULL,
--   `browser` VARCHAR(500) NOT NULL,
--   `version` VARCHAR(500) NOT NULL,
--   `platform` ENUM('w','l','m') NOT NULL,
--   `date` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
--   PRIMARY KEY (`id`),
--   UNIQUE KEY `person` (`ip`,`date`)
-- ) 

CREATE TABLE users(
  user_id SERIAL PRIMARY KEY,
  "email" VARCHAR(50),
  "password" VARCHAR(255),
  "created_date" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);
