package com.agent.backend.model;

import javax.persistence.*;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;

@Entity
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(
        name = "CarModel", propOrder = {
                "id",
                "model",
                "carBrand",
}, namespace = "nekiUri/carModel")
public class CarModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @XmlElement
    private Long id;

    @Column(nullable = false, unique = true)
    @XmlElement
    private String model;

    @ManyToOne
    @JoinColumn(name = "car_brand_id", nullable = false)
    @XmlElement
    private CarBrand carBrand;
}
