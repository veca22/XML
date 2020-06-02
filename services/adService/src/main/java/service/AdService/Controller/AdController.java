package service.AdService.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import service.AdService.Service.*;
import service.AdService.dto.AdDTO;
import service.AdService.dto.AdFilterDTO;
import service.AdService.model.*;

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

    @GetMapping(value = "/all")
    public ResponseEntity<List<Ad>> all() {
        System.out.println("dosao sam na back");
        return new ResponseEntity<>(adService.findAll(), HttpStatus.OK);
    }

    @PostMapping(value = "/addAd")
    public String AddAdministrator(@RequestBody AdDTO ads) {
        System.out.println("Usao u add" + ads.toString());
        Ad ad = adService.getAd(ads.getTitle());

        if (ad == null) {

            System.out.println("Usao u if");
            Car car = new Car();
            Client client = new Client();
            CarBrand cb = carBrandService.findOneCarBrand(ads.getCar().getCarBrand().getBrand());
            if(cb == null){
                cb = new CarBrand();
                cb.setBrand(ads.getCar().getCarBrand().getBrand());
                carBrandService.addCarBrand(cb);
            }

            car.setCarBrand(cb);
            car.setAverageRating(ads.getCar().getAverageRating());
            car.setCarStatus(ads.getCar().getCarStatus());
            car.setCarType(ads.getCar().getCarType());
            car.setChildSeats(ads.getCar().getChildSeats());
            car.setDiscount(ads.getCar().getDiscount());
            car.setDistanceAllowed(ads.getCar().getDistanceAllowed());
            car.setFuelType(ads.getCar().getFuelType());
            car.setMileage(ads.getCar().getMileage());
            car.setPrice(ads.getCar().getPrice());
            car.setTransmissionType(ads.getCar().getTransmissionType());
            Client c = clientService.findClientByID(ads.getClient().getId());

            Ad newAd = new Ad();
            newAd.setTitle(ads.getTitle());
            newAd.setProfilePicture(ads.getProfilePicture());
            newAd.setDescription(ads.getDescription());
            newAd.setPlace(ads.getPlace());
            newAd.setCar(ads.getCar());
            newAd.setClient(ads.getClient());
            boolean uspesno = adService.addAd(newAd);

            if(uspesno == true){
                System.out.println("New ad with name " + newAd.getTitle() + "is added.");
            }
            else
            {
                System.out.println("Name already exists: " + newAd.getTitle());
            }

            return "";
        }
        else
            return "Name already exists";
    }


    @PostMapping(value = "/allFilter", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<Ad>> login(@RequestBody AdFilterDTO addto)
    {
        System.out.println("Sifra je " + addto.toString());
        return new ResponseEntity<>(adService.findAll(),HttpStatus.OK);
    }


}
