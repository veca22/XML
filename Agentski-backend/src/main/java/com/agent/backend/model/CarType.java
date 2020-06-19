package com.agent.backend.model;

import javax.persistence.*;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;

@Entity
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(
        name = "CarType", propOrder = {
        "id",
        "type"
})  //mozda dodati posle }, namespace = "nekiUri/car_type"

public class CarType {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @XmlElement
    private Long id;

    @Column
    @XmlElement
    private String type;

    public CarType() {
    }

    public CarType(Long id, String type) {
        this.id = id;
        this.type = type;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }
}
