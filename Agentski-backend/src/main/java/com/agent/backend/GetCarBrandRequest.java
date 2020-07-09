package com.agent.backend;

import javax.xml.bind.annotation.*;

@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(
        name = "", propOrder = {
                "id"
})
@XmlRootElement(name = "getCarBrandRequest", namespace = "http://ftn.uns.ac.rs.tim13")
public class GetCarBrandRequest {

    @XmlElement(namespace = "http://ftn.uns.ac.rs.tim13")
    private Long id;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
