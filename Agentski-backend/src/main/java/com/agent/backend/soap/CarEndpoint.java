package com.agent.backend.soap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ws.server.endpoint.annotation.Endpoint;
import org.springframework.ws.server.endpoint.annotation.PayloadRoot;
import org.springframework.ws.server.endpoint.annotation.RequestPayload;
import org.springframework.ws.server.endpoint.annotation.ResponsePayload;

@Endpoint
public class CarEndpoint {

    private static final String NAMESPACE = "http://spring.io/guides/gs-producing-web-service";


    private CarRepo carRepo;

    @Autowired
    public CarEndpoint(CarRepo carRepo) {

        this.carRepo = carRepo;
    }

    @PayloadRoot(namespace = NAMESPACE, localPart = "getCarRequest")
    @ResponsePayload
    public GetCarResponse getCar(@RequestPayload GetCarRequest request) {
        GetCarResponse response = new GetCarResponse();
        response.setCar(carRepo.findCar(request.getName()));

        return response;
    }

}
