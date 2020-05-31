package service.AdService.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import service.AdService.model.Ad;
import service.AdService.repository.AdRepo;

import java.util.List;

@Service
public class AdService {

    @Autowired
    AdRepo adRepo;

    public List<Ad> findall()
    {
        return adRepo.findAll();
    }
}
