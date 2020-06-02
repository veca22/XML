package service.AdminService.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;
import service.AdminService.dtos.*;
import service.AdminService.model.*;
import service.AdminService.service.*;

import javax.servlet.http.HttpSession;
import java.util.List;

@CrossOrigin(origins = {"http://localhost:4200"})
@RestController
public class AdminController {

    //dodavanje fuel type
    @Autowired
    FuelTypeService fuelTypeService;

    @GetMapping(value = "/fuelType/all")
    public ResponseEntity<List<FuelType>> all() { return new ResponseEntity<>(fuelTypeService.findall(), HttpStatus.OK);}

    @PostMapping(value = "/addFuelType")
    public String addFuelType(@RequestBody FuelTypeDto fuelTypeDto){

        FuelType fuelType = fuelTypeService.getFuelType(fuelTypeDto.getSerial_number());
        if(fuelType == null){
            FuelType newFuelType = new FuelType();
            newFuelType.setSerial_number(fuelTypeDto.getSerial_number());
            newFuelType.setType(fuelTypeDto.getFuel_type());

            boolean uspesno = fuelTypeService.addFuelType(newFuelType);
            if(uspesno == true){
                System.out.println("New fuel type with id: " + newFuelType.getId() + "is added.");
            }
            else {
                System.out.println("Id already exists: " + newFuelType.getId());
            }
            return "";
        }
        else{
            return "Id already exists";
        }
    }

    //dodavanje transmission type
    @Autowired
    TransmissionTypeService transmissionTypeService;

    @GetMapping(value = "/transmissionType/all")
    public ResponseEntity<List<TransmissionType>> all2() { return new ResponseEntity<>(transmissionTypeService.findall(), HttpStatus.OK);}

    @PostMapping(value = "/addTransmissionType")
    public String addTransmissionType(@RequestBody TransmissionTypeDto transmissionTypeDto){

        TransmissionType transmissionType = transmissionTypeService.getTransmissionType(transmissionTypeDto.getSerial_number());
        if (transmissionType == null){
            TransmissionType newTransmissionType = new TransmissionType();
            newTransmissionType.setSerial_number(transmissionTypeDto.getSerial_number());
            newTransmissionType.setType(transmissionTypeDto.getTransmission_type());

            boolean uspesno = transmissionTypeService.addTransmissionType(newTransmissionType);
            if(uspesno == true){
                System.out.println("New transmission type with serial: " + newTransmissionType.getSerial_number() + "is added.");
            }
            else {
                System.out.println("Serial already exists: " + newTransmissionType.getSerial_number());
            }
            return "";
        }
        else{
            return "Serial already exists";
        }
    }

    //dodavanje car type
    @Autowired
    CarTypeService carTypeService;

    @GetMapping(value = "/carType/all")
    public ResponseEntity<List<CarType>> all3() { return new ResponseEntity<>(carTypeService.findall(), HttpStatus.OK);}

    @PostMapping(value = "/addCarType")
    public String addCarType(@RequestBody CarTypeDto carTypeDto){

        CarType carType = carTypeService.getCarType(carTypeDto.getCar_type());
        if (carType == null){
            CarType newCarType = new CarType();
            newCarType.setType(carTypeDto.getCar_type());

            boolean uspesno = carTypeService.addCarType(newCarType);
            if(uspesno == true){
                System.out.println("New car is added.");
            }
            else {
                System.out.println("Car type already exists: " + newCarType.getType());
            }
            return "";
        }
        else{
            return "Serial already exists";
        }
    }

    //dodavanje car brand
    @Autowired
    CarBrandService carBrandService;

    @GetMapping(value = "/carBrand/all")
    public ResponseEntity<List<CarBrand>> all4() { return new ResponseEntity<>(carBrandService.findall(), HttpStatus.OK);}

    @PostMapping(value = "/addCarBrand")
    public String addCarBrand(@RequestBody CarBrandDto carBrandDto){

        CarBrand carBrand = carBrandService.getCarBrand(carBrandDto.getCar_brand());
        if (carBrand == null){
            CarBrand newCarBrand = new CarBrand();
            newCarBrand.setBrand(carBrandDto.getCar_brand());

            boolean uspesno = carBrandService.addCarBrand(newCarBrand);
            if(uspesno == true){
                System.out.println("New car brand is added.");
            }
            else {
                System.out.println("Car brand already exists: " + newCarBrand.getBrand());
            }
            return "";
        }
        else{
            return "Serial already exists";
        }
    }

    //dodavanje car model
    @Autowired
    CarModelService carModelService;

    @GetMapping(value = "/carModel/all")
    public ResponseEntity<List<CarModel>> all5() { return new ResponseEntity<>(carModelService.findall(), HttpStatus.OK);}

    @PostMapping(value = "/addCarModel")
    public String addCarModel(@RequestBody CarModelDto carModelDto){

        CarModel carModel = carModelService.getCarModel(carModelDto.getCar_model());
        if (carModel == null){
            CarModel newCarModel = new CarModel();
            newCarModel.setModel(carModelDto.getCar_model());

            boolean uspesno = carModelService.addCarModel(newCarModel);
            if(uspesno == true){
                System.out.println("New car model is added.");
            }
            else {
                System.out.println("Car model already exists: " + newCarModel.getModel());
            }
            return "";
        }
        else{
            return "Serial already exists";
        }
    }
}
