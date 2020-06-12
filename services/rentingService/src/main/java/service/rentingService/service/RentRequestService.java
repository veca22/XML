package service.rentingService.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import service.rentingService.model.RentRequest;
import service.rentingService.repository.RentRequestRepo;

import java.util.List;

@Service
public class RentRequestService {

    @Autowired
    RentRequestRepo rentRequestRepo;

    public void addRent(RentRequest rent){
        rentRequestRepo.save(rent);
    }

    public List<RentRequest> findAll() {
        return rentRequestRepo.findAll();
    }

    public List<RentRequest> findAllByClientId(Long id) {
        return rentRequestRepo.findAllByClientId(id);
    }
    public RentRequest findById(Long id) {
        return rentRequestRepo.findRentRequestById(id);
    }
}
