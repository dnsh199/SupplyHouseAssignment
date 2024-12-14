CREATE TABLE users (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE user_roles (
    user_id BIGINT NOT NULL,
    role VARCHAR(255) NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE customer_service_hours (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    day_of_week VARCHAR(255) NOT NULL,
    open_time TIME NOT NULL,
    close_time TIME NOT NULL
);

CREATE TABLE special_hours (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    date DATE NOT NULL,
    open_time TIME NOT NULL,
    close_time TIME NOT NULL,
    reason VARCHAR(255) NOT NULL
);
