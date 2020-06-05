
insert into users(id, email, password, role, status) values (115,'testic@test.com','test','ENDUSER', 'ACCEPTED');
insert into fuel_type(id, serial_number, type) values(277, '123b86', 'jeriDizel');
insert into fuel_type(id, serial_number, type) values(300, '253ac', 'benzin');
insert into fuel_type(id, serial_number, type) values(305, '152ca', 'plin');

insert into transmission_type(id, serial_number, type) values(222, 'km32', 'automatik');

insert into car_type(id, type) values (333, 'city_car');
insert into car_type(id, type) values (334, 'minivan');
insert into car_type(id, type) values (335, 'wagon');

insert into car_brand(id, brand) values (444, 'VW');
insert into car_brand(id, brand) values (445, 'Audi');
insert into car_brand(id, brand) values (446, 'Rolls Royce');

insert into car_model(id, model) values (555, 'A6 2016');
insert into car_model(id, model) values (556, 'Insignia 2020');
insert into car_model(id, model) values (557, 'S500 2014');
insert into car(id,average_rating,car_status,car_type_id,child_seats,collision_damage_waiver,discount,distance_allowed,fuel_type_id,mileage,price,transmission_type_id,car_model_id,car_brand_id) values (100,0,'RENTED',333,0,'false',10,100,277,60000,40,222,555,444);
insert into client(id,ad_counter,address,email,first_name,last_name,jmbg,password,phone_number,role) values (100,0,'Radnicka 36','steva@email.com','Stefan','Dragojevic','1601998772017','steva','12345798','ENDUSER');
insert into client(id,ad_counter,address,email,first_name,last_name,jmbg,password,phone_number,role) values (101,0,'Gazdina','gazda@email.com','Mirkela','Gazda','111111111','gazda','12345744','ADMINISTRATOR');
insert into ad(id,description,start_of_ad,end_of_ad,is_active,profile_picture,car_id,client_id,current_driver_id,place,title) values (100,'DOBAR AUTO SVE NAJBOLJE','2020.02.03 10:00', '2020.02.07 09:00','true','slika',100,500,101,'Sabac','Auto AC Mirkovic');


