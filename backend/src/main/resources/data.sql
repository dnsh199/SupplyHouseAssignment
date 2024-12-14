-- Insert a user
INSERT INTO users (username, password)
VALUES ('admin', '$2a$10$eBTr3pFwJdDRwejxqlZ/GezKJh9v5kcFS0.tK0qHJS7oiqTltXn6G'); -- Password: "password"

-- Insert default customer service hours (in ET time)
INSERT INTO customer_service_hours (day_of_week, open_time, close_time)
VALUES
('MONDAY', '08:00:00', '19:45:00'),
('TUESDAY', '08:00:00', '19:45:00'),
('WEDNESDAY', '08:00:00', '19:45:00'),
('THURSDAY', '08:00:00', '19:45:00'),
('FRIDAY', '09:00:00', '19:45:00'),
('SATURDAY', '09:00:00', '17:45:00'),
('SUNDAY', '09:00:00', '17:45:00');

-- Insert special hours (example: Christmas day special hours)
INSERT INTO special_hours (date, open_time, close_time, reason)
VALUES ('2024-12-25', '10:00:00', '16:00:00', 'Christmas');
