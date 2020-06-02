package service.AdminService.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import service.AdminService.model.CarBrand;
import service.AdminService.repository.CarBrandRepo;

import java.util.List;

@Service
public class CarBrandService {

    @Autowired
    CarBrandRepo carBrandRepo;

    public List<CarBrand> findall() {return carBrandRepo.findAll();}

    public CarBrand findCarBrandById(Long id) {return carBrandRepo.findCarBrandById(id);}

    public CarBrand save(CarBrand f) { return carBrandRepo.save(f);}

    public boolean addCarBrand(CarBrand f){
        List<CarBrand> tmp = findall();
        if(tmp.size() == 0){
            carBrandRepo.save(f);
        }
        for(CarBrand f1: tmp){
            if(f1.getId() == f.getId()){
                return  false;
            }
            else {
                carBrandRepo.save(f);
                return true;
            }
        }
        return false;
    }
    public CarBrand getCarBrand(String car_brand){
        List<CarBrand> tmp = findall();
        if(tmp.size() == 0){
            return null;
        }
        for (CarBrand f : tmp){
            if(f.getCar_brand().equals(car_brand)){
                return f;
            }
        }
        return null;
    }
}
