BEGIN;


insert into "user" (firstname, lastname, gender, email, password, description, age, city, phone_number, img_url) values 

('Emmanuel', 'Martin', 'Male', 'gnutley0@nature.com', 'guyD3bhJUXf', 'je vis à bordeaux.', 43, 'Bordeaux', '0123456789', 'https://robohash.org/deseruntmollitiarepudiandae.png?size=50x50&set=set1'),

('Julien', 'Maurice', 'Male', 'mruff1@google.com.hk', 'xCadHR', 'je suis de lyon', 30, 'Lyon', '9876543210', 'https://robohash.org/sednesciuntveniam.png?size=50x50&set=set1'),

('Jeanne', 'Castex', 'Female', 'speaker2@ustream.tv', 'GvvT9P0QnT', 'je suis de Pau.', 65, 'Pau', '1357493210', 'https://robohash.org/autconsecteturodio.png?size=50x50&set=set1'),

('Nicolas', 'Charpin', 'male', 'ehockell3@blogs.com', 'Cw6Gb8', 'je suis en Charente Maritime.', 44, 'La Rochelle', '572-218-0375', 'https://robohash.org/voluptatemautlabore.png?size=50x50&set=set1'),

('Haroun', 'Tazieff', 'Male', 'hskaife4@discovery.com', 'K1Kq0Hdirpt', 'je vis à paris.', 70, 'Paris', '945-776-4245', 'https://robohash.org/maiorescommodiquis.png?size=50x50&set=set1'),

('Jordan', 'Espitallier', 'Male', 'sdillicate5@tamu.edu', '6VljROWzG', 'je vis en provence. ', 26, 'Aix-en-provence', '497-437-3470', 'https://robohash.org/modiipsumarchitecto.png?size=50x50&set=set1'),

('Mathieu', 'Eliza', 'Male', 'lszapiro6@techcrunch.com', 'ObfmGgZ', 'Je vis en région parisienne', 33, 'Paris', '903-144-0020', 'https://robohash.org/perferendislaboreaut.png?size=50x50&set=set1'),

('Angelina', 'Jolie', 'Female', 'tsiggins7@linkedin.com', 'HHq9pXoGm', 'j`habite en PACA', 57, 'Toulon', '398-158-2974', 'https://robohash.org/rerumfacerequos.png?size=50x50&set=set1');



insert into event (title, starting_date, ending_date, img_url, places_left, description, longitude, latitude, user_id) values

('Traveler On Stage', '2021-10-20 19:00:00', '2021-10-21 00:00:00', 'http://dummyimage.com/196x100.png/ff4444/ffffff', 6, 'rendez-vous au café culturel pour discuter et organiser un voyage tout en apprenant une nouvelle langue autour dun bon café', -0.57918, 44.837789, 2),

('Murder Party - Le meurtre d Arthur Pendragon', '2021-11-05 09:00:00', '2021-11-05 17:00:00', 'http://dummyimage.com/186x100.png/ff4444/ffffff', 5, 'Résolvez l assassinat d Arthur Pendragon en parcourant les rues de Lyon tout en apprenant une langue étrangère', 4.835659,45.764043, 8),

 ('Fête du cinéma japonais à aix-en-provence', '2021-10-10 14:00:00', '2021-10-10 22:30:00', 'http://dummyimage.com/103x100.png/5fa2dd/ffffff',6, 'Venez assister à la représentation de Your Name en version originale puis discuter du film en parlant japonais autour d un thé', 5.447427, 43.529742, 5),

 ('Sunday Brunch', '2021-10-20 12:30:00', '2021-10-20 16:30:00', 'http://dummyimage.com/108x100.png/ff4444/ffffff', 6, 'Rendez vous au trocadéro pour bruncher et apprendre une nouvelle langue', 2.3522219, 48.856614, 7),

 ('Week-end Nature', '2021-10-20 10:00:00', '2021-10-21 18:00:00', 'http://dummyimage.com/152x100.png/dddddd/000000', 6, 'Venez camper en foret pour un week-end et apprendre une nouvelle langue', -1.1672, 44.3945, 1),

 ('Degustation de houmous', '2021-12-05 20:00:00', '2021-12-5 23:00:00', 'http://dummyimage.com/193x100.png/5fa2dd/ffffff', 6, 'Venez déguster du houmous et pratiquer les langues du magreb', 1.444209, 43.604652, 6),

 ('Visite à La Rochelle', '2021-11-28 14:00:00', '2021-11-29 18:00:00', 'http://dummyimage.com/206x100.png/dddddd/000000', 6, 'Venez visiter La Rochelle et pratiquez une nouvelle langue entre amis ', -1.151139, 46.160329, 3 ),

 ('Voyage à Sarlat', '2022-06-20 10:00:00', '2022-07-09 18:00:00', 'http://dummyimage.com/199x100.png/5fa2dd/ffffff', 5, 'Venez pratiquez une nouvelle langue en visitant Sarlat et le Périgord Noir',1.217292, 44.890891, 4);




insert into language ("name") values 
('english'),

 ('italian'),

 ('spanish'),

 ('arab'),

 ('chinese'),

 ('japanese'),

 ('deutch'),

 ('indian'),

 ('french'),

 ('russian');



insert into tag ("name") values
 ('culture'),

 ('cinema '),

 ('voyage'),

 ('brunch'),

 ('nature'),
 ('test');


insert into "event_has_tag" (event_id, tag_id) values 
(1, 4),
(2, 1),
(3, 2),
(4, 4),
(5, 5),
(6, 5),
(7, 3),
(8, 3);


insert into "user_learn_language" (user_id, language_id) values
(1, 6),
(2, 1),
(3, 6),
(4, 7),
(5, 2),
(6, 5),
(7, 3),
(8, 4);



insert into "user_participate_event" (user_id, event_id) values 
(1, 3),
(2, 6),
(3, 4),
(4, 5),
(5, 1),
(6, 2),
(7, 8),
(8, 7);


insert into "user_speak_language" (user_id, language_id) values
(1, 9),
(2, 7),
(3, 1),
(4, 4),
(5, 5),
(6, 8),
(7, 2),
(8, 6);

insert into "event_has_language" (event_id, language_id) values
(1, 2),
(2, 3),
(3, 4),
(4, 5),
(5, 6),
(6, 7),
(7, 8),
(8, 1);


COMMIT