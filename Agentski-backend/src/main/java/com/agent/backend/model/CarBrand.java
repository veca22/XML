package com.agent.backend.model;

import javax.persistence.*;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;
import java.util.Set;

@Entity
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(
        name = "CarBrand", propOrder = {
                "id",
                "brand",
                "cars",
                "carModel",
}, namespace = "nekiUri/carBrand")
public class CarBrand {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @XmlElement
    private Long id;

    @Column(nullable = false, unique = true)
    @XmlElement
    private String brand;

    @OneToMany(mappedBy = "carBrand")
    @XmlElement
    private Set<Car> cars;

    @OneToMany(mappedBy = "carBrand")
    @XmlElement
    private Set<CarModel> carModel;
}
