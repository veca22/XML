package service.rentingService.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import service.rentingService.model.RentRequest;
import service.rentingService.repository.RentRequestRepo;

@Service
public class RentRequestService {

    @Autowired
    RentRequestRepo rentRequestRepo;

    public void addRent(RentRequest rent){
        rentRequestRepo.save(rent);
    }
}
