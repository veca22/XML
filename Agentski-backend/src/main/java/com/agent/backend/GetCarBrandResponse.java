package com.agent.backend;

import com.agent.backend.model.CarBrand;

import javax.xml.bind.annotation.*;

@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(
        name = "", propOrder = {
                "brand"
})
@XmlRootElement(name = "getCarBrandResponse", namespace = "http://ftn.uns.ac.rs.tim13")
public class GetCarBrandResponse {

    @XmlElement
    private CarBrand brand;

    public CarBrand getBrand(){
        return brand;
    }

    public void setBrand(CarBrand brand){
        this.brand = brand;
    }
}
