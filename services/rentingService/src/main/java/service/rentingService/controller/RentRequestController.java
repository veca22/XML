package service.rentingService.controller;

import org.joda.time.DateTime;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import service.rentingService.dtos.AdFilterDTO;
import service.rentingService.dtos.SendDTO;
import service.rentingService.model.*;
import service.rentingService.service.AdService;
import service.rentingService.service.ClientService;
import service.rentingService.service.RentRequestService;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@CrossOrigin(origins = {"http://localhost:4200"})
@RestController
public class RentRequestController {
    @Autowired
    RentRequestService rentRequestService;

    @Autowired
    ClientService clientService;

    @Autowired
    AdService adService;

    @GetMapping("/rentRequestsForUser")
    public ResponseEntity<List<RentRequest>> requestsForUsers(@RequestParam(value = "email", required = true) String email) {
        Client c = clientService.findClientByEmail(email);
        List<RentRequest> ret = rentRequestService.findAllByClientId(c.getId());
        return new ResponseEntity<>(ret, HttpStatus.OK);
    }

    @PostMapping("/reserve")
    public void reserve(@RequestBody SendDTO sendDTO){
        RentRequest rr = new RentRequest();
        Set<Car> carsForRent= new HashSet<>();
        carsForRent.add(sendDTO.getAdWithTimes().getAd().getCar());
        rr.setCarsForRent(carsForRent);
        System.out.println(sendDTO.toString());
       // rr.getCarsForRent().add(sendDTO.getAdWithTimes().getAd().getCar());
        rr.setClient(clientService.findClientByEmail(sendDTO.getEmail()));
        DateTime startD = DateTime.parse(sendDTO.getAdWithTimes().getStartTime());
        DateTime endD = DateTime.parse(sendDTO.getAdWithTimes().getEndTime());
        rr.setReservedFrom(startD.toDate());
        rr.setReservedTo(endD.toDate());
        rr.setRentRequestStatus(RentRequestStatus.PENDING);
        rentRequestService.addRent(rr);
    }

    @PostMapping(value = "/allFilter", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<Ad>> login(@RequestBody AdFilterDTO addto)
    {
        DateTime startD = DateTime.parse(addto.getStartDate());
        DateTime endD = DateTime.parse(addto.getEndDate());
        List<Ad> lista=adService.findAll();
        List<Ad> pom=new ArrayList<>();
        List<Ad> ret= new ArrayList<>();
        for (Ad a:lista) {
            // if(a.getId() != addto.getId())
            if(a.getPlace().equals(addto.getPlace())){
                if(startD.toDate().after(a.getStartOfAd())){
                    if(endD.toDate().before(a.getEndOfAd())){
                        pom.add(a);
                        ret.add(a);
                    }
                }
            }
        }


        List<RentRequest> rent_list = rentRequestService.findAll();


        if(rent_list.size() != 0) {
            for(RentRequest r : rent_list) {
                for(Car c : r.getCarsForRent()) {
                    Ad ad = adService.findAdByCarId(c.getId());
                    for(Ad a: ret) {
                        if(a.getCar().getId() == c.getId()) {
                            System.out.println(startD.toDate());
                            System.out.println(endD.toDate());
                            System.out.println(r.getReservedFrom());
                            System.out.println(r.getReservedTo());
                            if(r.getReservedFrom().after(startD.toDate()) && r.getReservedTo().before(endD.toDate())) {
                                pom.remove(a);
                            } else if (r.getReservedFrom().after(startD.toDate()) && r.getReservedTo().after(endD.toDate()) && r.getReservedFrom().before(endD.toDate())) {
                                pom.remove(a);
                            } else if (r.getReservedFrom().before(startD.toDate()) && r.getReservedTo().before(endD.toDate()) && r.getReservedTo().after(startD.toDate())) {
                                pom.remove(a);
                            }
                        }
                    }
                }
            }
        }
        return new ResponseEntity<>(pom, HttpStatus.OK);
    }

    @PostMapping(value = "/rentOperation")
    public ResponseEntity<RentRequest> operations(@RequestParam(value = "operation", required = true) String operation,
                                           @RequestParam(value = "id", required = true) String id) {

        Long lid = Long.parseLong(id);
        RentRequest rentRequest = rentRequestService.findById(lid);
        if(operation.equals("АCCEPTED")) {
            rentRequest.setRentRequestStatus(RentRequestStatus.RESERVED);
            rentRequestService.addRent(rentRequest);
            return new ResponseEntity<>(rentRequest, HttpStatus.OK);
        } else if(operation.equals("DECLINED")) {
            rentRequest.setRentRequestStatus(RentRequestStatus.CANCELED);
            rentRequestService.addRent(rentRequest);
            return new ResponseEntity<>(rentRequest, HttpStatus.OK);
        }

        return new ResponseEntity<>(rentRequest, HttpStatus.BAD_REQUEST);
    }
}
