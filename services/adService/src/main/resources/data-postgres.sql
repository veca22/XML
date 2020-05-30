insert into users(id, email, password, role, status) values (110,'test@test.com','test','ENDUSER', 'ACCEPTED');
insert into car_brand(id,brand) values (100,'Audi');
insert into car_model(id,model,car_brand_id) values (100,'A6',100);
insert into car(id,average_rating,car_status,car_type,child_seats,collision_damage_waiver,discount,distance_allowed,fuel_type,mileage,price,transmission_type,car_brand_id) values (100,0,0,0,0,'false',10,100,'DIESEL',60000,40,'MANUAL',100);
insert into client(id,address,email,first_name,last_name,jmbg,password,phone_number,role) values (100,'Radnicka 36','steva@email.com','Stefan','Dragojevic','1601998772017','steva','12345798',0);
insert into client(id,address,email,first_name,last_name,jmbg,password,phone_number,role) values (101,'Gazdina','gazda@email.com','Mirkela','Gazda','111111111','gazda','12345744',1);
insert into ad(id,description,start_of_ad,end_of_ad,is_active,profile_picture,car_id,client_id,current_driver_id,place,title) values (100,'DOBAR AUTO SVE NAJBOLJE','2020.02.03 10:00', '2020.02.07 09:00','true','slika',100,100,101,'Sabac','Auto AC Mirkovic');

