package com.example.Xml.model;

import org.hibernate.validator.constraints.Range;

import javax.persistence.*;

@Entity
@Table
public class Car {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "car_brand_id", nullable = false)
    private CarBrand carBrand;

    @Column(nullable = false)
    private CarType carType;

    @Column(nullable = false)
    private String fuelType;

    @Column(nullable = false)
    private String transmissionType;

    @Column(nullable = false)
    @Range(min = 0, max = 1000000)
    private int price;

    @Column(nullable = false)
    @Range(min = 0, max = 1000000)
    private float mileage;

    @Column(nullable = false)
    private float distanceAllowed;



    @Column(nullable = false)
    @Range(min = 0, max = 5)
    private int childSeats;

}
