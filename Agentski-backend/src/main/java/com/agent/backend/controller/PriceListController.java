package com.agent.backend.controller;

import com.agent.backend.dtos.PriceListDTO;
import com.agent.backend.model.Client;
import com.agent.backend.model.PriceList;
import com.agent.backend.services.ClientService;
import com.agent.backend.services.PriceListService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = {"http://localhost:4200"})
@RestController
public class PriceListController {

    @Autowired
    PriceListService priceListService;

    @Autowired
    ClientService clientService;

    @PostMapping(value = "/priceList/addPriceList")
    public ResponseEntity<PriceList> addPriceList(@RequestBody PriceListDTO priceListDTO,
                                                  @RequestParam(value = "email", required = true) String email) {
            Client client = clientService.findClientByEmail(email);
            PriceList priceList = new PriceList();
            if(client == null) {
                return new ResponseEntity<>(priceList, HttpStatus.FORBIDDEN);
            }
            priceList.setDiscountAfterDays(priceListDTO.getDiscountAfterDays());
            priceList.setPriceForCollisionDamageWavier(priceListDTO.getPriceForCollisionDamageWavier());
            priceList.setPriceForMileage(priceListDTO.getPriceForMileage());
            priceList.setRealPrice(priceListDTO.getRealPrice());
            priceList.setClient(client);
            priceListService.save(priceList);
            return new ResponseEntity<>(priceList, HttpStatus.CREATED);
    }
}
