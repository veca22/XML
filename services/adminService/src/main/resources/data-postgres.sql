insert into users(id, email, password, role, status) values (100,'test@test.com','test','ADMINISTRATOR', 'ACCEPTED');

insert into users(id, email, password, role, status) values (120,'asd@test.com','Test1','ENDUSER', 'ACCEPTED');
insert into users(id, email, password, role, status) values (121,'kjk@test.com','Test2','ENDUSER', 'BLOCKED');
insert into users(id, email, password, role, status) values (122,'szpj@test.com','Test3','ENDUSER', 'BLOCKED');
insert into users(id, email, password, role, status) values (123,'aaa@test.com','Test4','ENDUSER', 'AWAITING_APPROVAL');

insert into car_brand(id, brand) values (111, 'Audi');
insert into car_brand(id, brand) values (112, 'BMW');
insert into car_brand(id, brand) values (113, 'Opel');
insert into car_brand(id, brand) values (114, 'VW');

insert into car_model(id, model) values (211, 'A6 S-line');
insert into car_model(id, model) values (212, 'Passat B8');
insert into car_model(id, model) values (213, 'Insignia');
insert into car_model(id, model) values (214, 'Polo');
insert into car_model(id, model) values (215, 'A7 Sportback');

insert into car_type(id, type) values (311, 'Minivan');
insert into car_type(id, type) values (312, 'SUV');
insert into car_type(id, type) values (313, 'Sport car');
insert into car_type(id, type) values (314, 'Wagon');

insert into fuel_type(id, type, serial_number) values(411, 'BMB 95', '12b89k');
insert into fuel_type(id, type, serial_number) values(412, 'GDrive', '53-3k');
insert into fuel_type(id, type, serial_number) values(413, 'TNG', 'Xk-92k');

insert into transmission_type(id, serial_number, type) values (511, 'tr45', 'Automatik');
insert into transmission_type(id, serial_number, type) values (512, 'tr12-2k', 'Manuelni 6');
insert into transmission_type(id, serial_number, type) values (513, 'tr12-1k', 'Manuelni 5');
