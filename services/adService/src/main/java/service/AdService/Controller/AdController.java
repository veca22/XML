package service.AdService.Controller;

import org.joda.time.DateTime;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import service.AdService.Service.*;
import service.AdService.dto.AdDTO;
import service.AdService.dto.AdFilterDTO;
import service.AdService.model.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = {"http://localhost:4200"})
@RestController
public class AdController {

    @Autowired
    AdService adService;

    @Autowired
    CarService carService;

    @Autowired
    CarBrandService carBrandService;

    @Autowired
    ClientService clientService;

    @Autowired
    CarModelService carModelService;

    @Autowired
    CarTypeService carTypeService;

    @Autowired
    FuelTypeService fuelTypeService;

    @Autowired
    TransmissionTypeService transmissionTypeService;

    @GetMapping(value = "/all")
    public ResponseEntity<List<Ad>> all() {
        return new ResponseEntity<>(adService.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/allClientAds")
    public ResponseEntity<List<Ad>> allClientAds(@RequestParam(value = "email", required = true) String email) {

        Client client = clientService.findClientByEmail(email);
        List<Ad> ret = adService.findAllByCliendId(client.getId());
        System.out.println(ret);
        return new ResponseEntity<>(ret, HttpStatus.OK);
    }

    @PostMapping(value = "/addAd")
    public ResponseEntity<Ad> addAd(@RequestBody AdDTO ads, @RequestParam(value = "email", required = true) String email) {
        System.out.println("Usao u add" + ads.toString());
        System.out.println(email);
        Ad ad = adService.getAd(ads.getTitle());

        Client client = clientService.findClientByEmail(email);

        if (ad == null) {
            if(client.getAdCounter() < 3) {
                Car car = new Car();
                CarBrand cb = carBrandService.findCarByBrand(ads.getCar().getCarBrand().getBrand());
                if (cb == null) {
                    cb = new CarBrand();
                    cb.setBrand(ads.getCar().getCarBrand().getBrand());
                    carBrandService.addCarBrand(cb);
                }

                System.out.println(cb.getBrand());

                car.setCarBrand(cb);
                car.setAverageRating(ads.getCar().getAverageRating());
                car.setCarStatus(ads.getCar().getCarStatus());
                CarType ct = carTypeService.findByType(ads.getCar().getCarType().getType());
                System.out.println(ads.getCar().getCarType().getType() + " ovo je kar tajp");
                if (ct == null) {
                    ct = new CarType();
                    ct.setType(ads.getCar().getCarType().getType());
                    carTypeService.addType(ct);
                }
                System.out.println(ct.getType());

                car.setCarType(ct);
                car.setChildSeats(ads.getCar().getChildSeats());
                car.setDiscount(ads.getCar().getDiscount());
                car.setDistanceAllowed(ads.getCar().getDistanceAllowed());
                FuelType ft = fuelTypeService.findFuelByType(ads.getCar().getFuelType().getType());
                if (ft == null) {
                    ft = new FuelType();
                    ft.setType(ads.getCar().getFuelType().getType());
                    fuelTypeService.save(ft);
                }

                car.setFuelType(ft);
                car.setMileage(ads.getCar().getMileage());
                car.setPrice(ads.getCar().getPrice());
                TransmissionType tt = transmissionTypeService.findTransByType(ads.getCar().getTransmissionType().getType());
                if (tt == null) {
                    tt = new TransmissionType();
                    tt.setType(ads.getCar().getTransmissionType().getType());
                    transmissionTypeService.save(tt);
                }
                car.setTransmissionType(tt);

                CarModel cm = carModelService.findCarByModel(ads.getCar().getCarModel().getModel());
                if (cm == null) {
                    cm = new CarModel();
                    cm.setModel(ads.getCar().getCarModel().getModel());
                    carModelService.addCarModel(cm);
                }
                car.setCarModel(cm);
                //    Client c = clientService.findClientByID(ads.getClient().getId());
                carService.addCar(car);
                Ad newAd = new Ad();
                newAd.setTitle(ads.getTitle());
                newAd.setProfilePicture(ads.getProfilePicture());
                newAd.setDescription(ads.getDescription());
                newAd.setPlace(ads.getPlace());
                newAd.setActive(true);
                newAd.setCar(car);
                newAd.setClient(client);
                DateTime dateTime = DateTime.parse(ads.getStartOfAd());
                newAd.setStartOfAd(dateTime.toDate());
                DateTime dateTime1 = DateTime.parse(ads.getEndOfAd());
                newAd.setEndOfAd(dateTime1.toDate());
                System.out.println(dateTime + "   " + dateTime1);
                System.out.println("New ad" + newAd);
                boolean uspesno = adService.addAd(newAd);

                if (uspesno == true) {
                    System.out.println("New ad with name " + newAd.getTitle() + "is added.");
                    int counter = client.getAdCounter();
                    client.setAdCounter(counter + 1);
                    clientService.save(client);
                    return new ResponseEntity<>(newAd, HttpStatus.CREATED);
                } else {
                    return new ResponseEntity<>(newAd, HttpStatus.NOT_IMPLEMENTED);
                }

            } else {
                return new ResponseEntity<>(ad, HttpStatus.FORBIDDEN);
            }
        }
        else
            return new ResponseEntity<>(ad, HttpStatus.BAD_REQUEST);
    }


    @PostMapping(value = "/allFilter", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<Ad>> login(@RequestBody AdFilterDTO addto)
    {
        System.out.println("Sifra je " + addto.toString());
        DateTime startD = DateTime.parse(addto.getStartDate());
        DateTime endD = DateTime.parse(addto.getStartDate());
        List<Ad> lista=adService.findAll();
        List<Ad> pom=new ArrayList<>();
        for (Ad a:lista) {
           // if(a.getId() != addto.getId())
            if(a.getPlace().equals(addto.getPlace())){
                if(startD.toDate().after(a.getStartOfAd())){
                    if(endD.toDate().before(a.getEndOfAd())){
                        pom.add(a);
                    }
                }
            }
        }
        return new ResponseEntity<>(pom,HttpStatus.OK);
    }

    @GetMapping(value = "/allCarBrands")
    public ResponseEntity allCarBrand() {
        System.out.println("car brand");
        return new ResponseEntity<>(carBrandService.findall(), HttpStatus.OK);
    }

    @PostMapping(value = "/changeStatus")
    public ResponseEntity<Ad> changeStatus(@RequestParam(value = "id", required = true) String id) {
        Long u = Long.parseLong(id);
        Ad ad = adService.findAdById(u);

        if(ad.getCar().getCarStatus().equals(CarStatus.NOT_RENTED)) {
            ad.getCar().setCarStatus(CarStatus.RENTED);
            adService.save(ad);
        } else {
            ad.getCar().setCarStatus(CarStatus.NOT_RENTED);
            adService.save(ad);
        }

        return new ResponseEntity<>(ad, HttpStatus.OK);
    }


}
