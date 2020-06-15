package com.agent.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ws.server.endpoint.annotation.Endpoint;
import org.springframework.ws.server.endpoint.annotation.PayloadRoot;
import org.springframework.ws.server.endpoint.annotation.ResponsePayload;

@Endpoint
public class SoapService {

    private static final String NAMESPACE_URI = "http://spring.io/guides/gs-producing-web-service";

//    @Autowired
//    private CarRepository carRepository;

//    @PayloadRoot(namespace = NAMESPACE_URI, localPart = "getCarsRequest")
//    @ResponsePayload
//    public GetCarsResponse getCar(){
//        GetCarsResponse response = new GetCarsResponse();
//
//        CarsSoap carsSoap = new CarsSoap();
//        carsSoap.setName("Ford Mustang");
//        carsSoap.setManufacturer("Ford");
//        carsSoap.setModel("Mustang");
//        response.setCars(carsSoap);
//        return response;
//    }
}
