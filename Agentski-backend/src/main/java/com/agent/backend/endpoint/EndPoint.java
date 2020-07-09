package com.agent.backend.endpoint;

import com.agent.backend.GetAdRequest;
import com.agent.backend.GetAdResponse;
import com.agent.backend.GetCarBrandRequest;
import com.agent.backend.GetCarBrandResponse;
import com.agent.backend.repository.AdRepo;
import com.agent.backend.repository.CarBrandRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ws.server.endpoint.annotation.Endpoint;
import org.springframework.ws.server.endpoint.annotation.PayloadRoot;
import org.springframework.ws.server.endpoint.annotation.RequestPayload;
import org.springframework.ws.server.endpoint.annotation.ResponsePayload;

@Endpoint
public class EndPoint {

    private static final String NAMESPACE_URI = "http://ftn.uns.ac.rs.tim13";

//    @Autowired
//    AdService adService;
//
//    @PayloadRoot(namespace = NAMESPACE_URI, localPart = "getAdRequest")
//    @ResponsePayload
//    public JAXBElement<String> saveAd(@RequestPayload GetAdRequest request){
//        GetAdResponse response = new GetAdResponse();
//        response.setName("Saved");
//        QName qName = new QName("getAdRequest");
//        adService.saveSoapAd(request);
//
//        JAXBElement jaxbElement = new JAXBElement<GetAdResponse>(qName, GetAdResponse.class, response);
//        return jaxbElement;
//    }

    @Autowired
    private AdRepo adRepo;

    @Autowired
    public EndPoint(AdRepo adRepo, CarBrandRepo carBrandRepo) { this.adRepo = adRepo; this.carBrandRepo = carBrandRepo;}

    @PayloadRoot(namespace = NAMESPACE_URI, localPart = "getAdRequest")
    @ResponsePayload
    public GetAdResponse getAd(@RequestPayload GetAdRequest request){
        GetAdResponse response = new GetAdResponse();
        response.setAd(adRepo.findAdById(request.getId()));

        return response;
    }

    @Autowired
    private CarBrandRepo carBrandRepo;

    @PayloadRoot(namespace = "http://ftn.uns.ac.rs.tim13", localPart = "getCarBrandRequest")
    @ResponsePayload
    public GetCarBrandResponse getCarBrand(@RequestPayload GetCarBrandRequest request){
        GetCarBrandResponse response = new GetCarBrandResponse();
        response.setBrand(carBrandRepo.findCarBrandById(request.getId()));

        return response;
    }

}
