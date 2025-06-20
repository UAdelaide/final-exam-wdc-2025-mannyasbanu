/*5 USERS*/
INSERT INTO Users (username, email, password_hash, role)
VALUES ('alice123', 'alice@example.com', 'hashed123', 'owner'),
('bobwalker', 'bob@example.com', 'hashed456', 'walker'),
('carol123', 'carol@example.com', 'hashed789', 'owner'),
('manny', 'manny@example.com', 'hashed666', 'walker'),
('aish', 'aish@example.com', 'hashed444', 'owner');
/*5 DOGS*/
INSERT INTO Dogs (name, size, owner_id)
VALUES ('Max', '')
/*5 WALK REQUESTS*/
