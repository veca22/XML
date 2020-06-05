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
import service.AdService.dto.AdPicDTO;
import service.AdService.model.*;
import service.AdService.model.Image;

import java.awt.*;
import java.io.*;
import java.nio.ByteBuffer;
import java.security.SecureRandom;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Base64;
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

    @Autowired
    PictureService pictureService;

    @GetMapping(value = "/all")
    public ResponseEntity<List<Ad>> all() {
        System.out.println("dosao sam na back");
        return new ResponseEntity<>(adService.findAll(), HttpStatus.OK);
    }

    @PostMapping(value = "/addAd")
    public String AddAdministrator(@RequestBody AdDTO ads) {
        System.out.println("Usao u add" + ads.toString());
        System.out.println(ads.toString());
        Ad ad = adService.getAd(ads.getTitle());

        if (ad == null) {

            System.out.println("Usao u if");
            Car car = new Car();
            Client client = new Client();
            CarBrand cb = carBrandService.findCarByBrand(ads.getCar().getCarBrand().getBrand());
            if(cb == null){
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
            if(ct == null) {
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
            if(ft == null) {
                ft = new FuelType();
                ft.setType(ads.getCar().getFuelType().getType());
                fuelTypeService.save(ft);
            }

            car.setFuelType(ft);
            car.setMileage(ads.getCar().getMileage());
            car.setPrice(ads.getCar().getPrice());
            TransmissionType tt = transmissionTypeService.findTransByType(ads.getCar().getTransmissionType().getType());
            if(tt == null) {
                tt = new TransmissionType();
                tt.setType(ads.getCar().getTransmissionType().getType());
                transmissionTypeService.save(tt);
            }
            car.setTransmissionType(tt);

            CarModel cm = carModelService.findCarByModel(ads.getCar().getCarModel().getModel());
            if(cm == null) {
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
            newAd.setCar(car);
            newAd.setClient(ads.getClient());
            DateTime dateTime = DateTime.parse(ads.getStartOfAd());
            newAd.setStartOfAd(dateTime.toDate());
            DateTime dateTime1=DateTime.parse(ads.getEndOfAd());
            newAd.setEndOfAd(dateTime1.toDate());
            System.out.println(dateTime+"   "+dateTime1);
            System.out.println("New ad" + newAd);
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

    @PostMapping(value = "/addPic", consumes = MediaType.APPLICATION_JSON_VALUE)
    public String addPictures(@RequestBody AdPicDTO adpic) {
        System.out.println(adpic.getFile());
        System.out.println(adpic.getFileSource());
//        for (String a:adpic.getFileSource()
//             ) {
//            Picture pic=new Picture();
//            Ad news = new Ad();
//            pic.setAd(news);
//            pic.setPicture(a);
//            Image img=new Image();
//            img.setIdOglasa("1");
//            img.setFileSource(a);
//
//            pictureService.addPicture(pic);
//        }
        Image img=new Image();
        img.setIdOglasa("1");
        img.setFileSource(adpic.getFileSource());
        try {
            FileOutputStream f = new FileOutputStream(new File("myObjects.txt"));
            ObjectOutputStream o = new ObjectOutputStream(f);
            o.writeObject(img);
            o.close();
            f.close();
        } catch (FileNotFoundException e) {
            System.out.println("File not found");
        } catch (IOException e) {
            System.out.println("Error initializing stream");
        }

        return "";
    }

    @GetMapping(value = "/getPic")
    public ResponseEntity<List<String>> getPic() throws FileNotFoundException {
        Image pr1 = new Image();
        FileInputStream fi = new FileInputStream(new File("myObjects.txt"));
        boolean cont = true;
        ArrayList<Image> imgs = new ArrayList<>();
        while (cont) {
            try (ObjectInputStream oi = new ObjectInputStream(fi)) {
                Image pr2 = (Image) oi.readObject();
                if (pr2 != null) {
                    imgs.add(pr2);
                } else {
                    cont = false;
                }
            } catch (Exception e) {
                // System.out.println(e.printStackTrace());
            }
            for (Image i : imgs
            ) {
                if (i.getIdOglasa().equals("1")) {
                    return new ResponseEntity<>(i.getFileSource(), HttpStatus.OK);
                }
            }
        }
        return null;
    }
}
