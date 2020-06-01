package service.AdService.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import service.AdService.dto.AdFilterDTO;
import service.AdService.model.Ad;
import service.AdService.service.AdService;

import java.util.List;

@CrossOrigin(origins = {"http://localhost:4200"})
@RestController
public class AdController {

    @Autowired
    AdService adService;

    @GetMapping(value = "/all")
    public ResponseEntity<List<Ad>> all() {
        System.out.println("dosao sam na back");
        return new ResponseEntity<>(adService.findall(), HttpStatus.OK);
    }


    @PostMapping(value = "/allFilter", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<Ad>> login(@RequestBody AdFilterDTO addto)
    {
        System.out.println("Sifra je " + addto.toString());
        return new ResponseEntity<>(adService.findall(),HttpStatus.OK);
    }


}
