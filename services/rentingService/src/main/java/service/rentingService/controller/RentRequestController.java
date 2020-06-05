package service.rentingService.controller;

import org.joda.time.DateTime;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import service.rentingService.dtos.SendDTO;
import service.rentingService.model.Car;
import service.rentingService.model.RentRequest;
import service.rentingService.model.RentRequestStatus;
import service.rentingService.service.ClientService;
import service.rentingService.service.RentRequestService;

import java.util.HashSet;
import java.util.Set;

@CrossOrigin(origins = {"http://localhost:4200"})
@RestController
public class RentRequestController {
    @Autowired
    RentRequestService rentRequestService;

    @Autowired
    ClientService clientService;

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
}
