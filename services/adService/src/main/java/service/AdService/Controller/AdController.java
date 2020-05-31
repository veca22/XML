package service.AdService.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import service.AdService.Service.AdService;
import service.AdService.dto.AdDTO;
import service.AdService.model.Ad;

import java.util.List;

@RestController
@CrossOrigin(origins = {"http://localhost:4200"})
public class AdController {

    @Autowired
    AdService adService;

    @GetMapping(value = "/all")
    public ResponseEntity<List<Ad>> all(){
        System.out.println("Usao u all");
        return new ResponseEntity<>(adService.findAll(), HttpStatus.OK);
    }

    @PostMapping(value = "/addAd")
    public String AddAdministrator(@RequestBody AdDTO ads){
        System.out.println("Usao u add" + ads.toString());
        Ad ad = adService.getAd(ads.getAdName());
        if(ad == null){
            System.out.println("Usao u if");
            Ad newAd = new Ad();
            newAd.setAdName(ads.getAdName());
            newAd.setProfilePicture(ads.getProfilePicture());
            newAd.setDescription(ads.getDescription());

            boolean uspesno = adService.addAd(newAd);

            if(uspesno == true){
                System.out.println("New ad with name " + newAd.getAdName() + "is added.");
            }
            else
            {
                System.out.println("Name already exists: " + newAd.getAdName());
            }

            return "";
        }
        else
            return "Name already exists";
    }
}
