CREATE DATABASE ng_games_db;

USE ng_games_db;

CREATE TABLE games(
    id INT(11) NOT NULL AUTO_INCREMENT,
    title VARCHAR(180),
    description VARCHAR(255),
    image VARCHAR(200),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
);

DESCRIBE games;