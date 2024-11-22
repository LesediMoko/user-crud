CREATE TABLE user_table (
    id BIGSERIAL PRIMARY KEY,
    username TEXT NOT NULL,
    email TEXT NOT NULL,
    password TEXT NOT NULL
);

INSERT INTO user_table (username, email, password) VALUES
('john_doe', 'john.doe@example.com', 'password1'),
('jane_smith', 'jane.smith@example.com', 'password2'),
('alice_jones', 'alice.jones@example.com', 'password3'),
('bob_brown', 'bob.brown@example.com', 'password4'),
('charlie_davis', 'charlie.davis@example.com', 'password5'),
('diana_evans', 'diana.evans@example.com', 'password6'),
('frank_green', 'frank.green@example.com', 'password7'),
('grace_harris', 'grace.harris@example.com', 'password8'),
('henry_king', 'henry.king@example.com', 'password9'),
('irene_lee', 'irene.lee@example.com', 'password10'),
('jack_miller', 'jack.miller@example.com', 'password11'),
('karen_nelson', 'karen.nelson@example.com', 'password12'),
('larry_owens', 'larry.owens@example.com', 'password13'),
('mary_perez', 'mary.perez@example.com', 'password14'),
('nancy_quinn', 'nancy.quinn@example.com', 'password15'),
('oscar_ross', 'oscar.ross@example.com', 'password16'),
('paula_scott', 'paula.scott@example.com', 'password17'),
('quentin_taylor', 'quentin.taylor@example.com', 'password18'),
('rachel_uwu', 'rachel.uwu@example.com', 'password19'),
('steve_vasquez', 'steve.vasquez@example.com', 'password20');
