/*5 USERS*/
INSERT INTO Users (username, email, password_hash, role)
VALUES ('alice123', 'alice@example.com', 'hashed123', 'owner'),
('bobwalker', 'bob@example.com', 'hashed456', 'walker'),
('carol123', 'carol@example.com', 'hashed789', 'owner'),
('manny', 'manny@example.com', 'hashed666', 'walker'),
('aish', 'aish@example.com', 'hashed444', 'owner');
/*5 DOGS*/
INSERT INTO Dogs (name, size, owner_id)
VALUES ('Max', 'medium', (SELECT user_id FROM Users WHERE username = 'alice123')),
('Jobbot', 'medium', (SELECT user_id FROM Users WHERE username = 'carol123')),
('Max', 'medium', (SELECT user_id FROM Users WHERE username = 'carol123')),
('Max', 'medium', (SELECT user_id FROM Users WHERE username = 'aish')),
('Max', 'medium', (SELECT user_id FROM Users WHERE username = 'aish'))
/*5 WALK REQUESTS*/
