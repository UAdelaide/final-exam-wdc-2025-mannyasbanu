/*5 USERS*/
INSERT INTO Users (username, email, password_hash, role)
VALUES ('alice123', 'alice@example.com', 'hashed123', 'owner'),
('bobwalker', 'bob@example.com', 'hashed456', 'walker'),
('carol123', 'carol@example.com', 'hashed789', 'owner'),
('manny', 'manny@example.com', 'hashed666', 'walker'),
('guts', 'guts@example.com', 'hashed444', 'owner');
/*5 DOGS*/
INSERT INTO Dogs (name, size, owner_id)
VALUES ('Max', 'medium', (SELECT user_id FROM Users WHERE username = 'alice123')),
('Bella', 'small', (SELECT user_id FROM Users WHERE username = 'carol123')),
('Bogbog', 'large', (SELECT user_id FROM Users WHERE username = 'carol123') ),
('Minh', 'small', (SELECT user_id FROM Users WHERE username = 'guts') LIMIT 1),
('Griffith', 'large', (SELECT user_id FROM Users WHERE username = 'guts' LIMIT 1));
/*5 WALK REQUESTS*/
INSERT INTO WalkRequests (dog_id, requested_time, duration_minutes, location, status)
VALUES ((SELECT dog_id FROM Dogs WHERE name = 'Max' LIMIT 1), '2025-06-10 08:00:00', 30, 'Parklands', 'open'),
((SELECT dog_id FROM Dogs WHERE name = 'Bella' LIMIT 1), '2025-06-10 09:30:00', 45, 'Beachside Ave', 'accepted'),
((SELECT dog_id FROM Dogs WHERE name = 'Bogbog' LIMIT 1), '2025-06-11 08:00:00', 450, 'The Evil Swamp', 'open'),
((SELECT dog_id FROM Dogs WHERE name = 'Minh' LIMIT 1), '2025-06-12 10:00:00', 60, 'Sofras AB', 'accepted'),
((SELECT dog_id FROM Dogs WHERE name = 'Griffith' LIMIT 1), '2025-06-9 08:00:00', 5, 'The Graveyard', 'completed');