package com.agent.backend.model;

import org.hibernate.validator.constraints.Range;

import javax.persistence.*;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;

@Entity
@Table
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(
        name = "Car", propOrder = {
        "id",
        "carBrand",
        "carModel",
        "carType",
        "fuelType",
        "transmissionType",
        "price",
        "discount",
        "mileage",
        "carStatus",
        "distanceAllowed",
        "collisionDamageWaiver",
        "childSeats",
        "averageRating",
        "commentCount"
})  //mozda dodati posle }, namespace = "nekiUri/car"

public class Car {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @XmlElement
    private Long id;

    @ManyToOne
    @XmlElement
    private CarBrand carBrand;

    @ManyToOne
    @XmlElement
    private CarModel carModel;

    @OneToOne
    @XmlElement
    private CarType carType;

    @ManyToOne
    @XmlElement
    private FuelType fuelType;

    @ManyToOne
    @XmlElement
    private TransmissionType transmissionType;

    @Column(nullable = false)
    @Range(min = 0, max = 1000000)
    @XmlElement
    private int price;

    @Column(nullable = false)
    @XmlElement
    private int discount;

    @Column(nullable = false)
    @Range(min = 0, max = 1000000)
    @XmlElement
    private float mileage;

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    @XmlElement
    private CarStatus carStatus;

    @Column(nullable = false)
    @XmlElement
    private float distanceAllowed;

    @Column(nullable = false)
    @XmlElement
    private boolean collisionDamageWaiver = false;

    @Column(nullable = false)
    @Range(min = 0, max = 5)
    @XmlElement
    private int childSeats;

    @Column(nullable = false)
    @XmlElement
    private double averageRating = 0;

    @Column(nullable = false)
    @XmlElement
    private int commentCount = 0;

    public Car(Long id, CarBrand carBrand, CarType carType, FuelType fuelType, TransmissionType transmissionType, @Range(min = 0, max = 1000000) int price, int discount, @Range(min = 0, max = 1000000) float mileage, CarStatus carStatus, float distanceAllowed, boolean collisionDamageWaiver, @Range(min = 0, max = 5) int childSeats, double averageRating, int commentCount) {
        this.id = id;
        this.carBrand = carBrand;
        this.carType = carType;
        this.fuelType = fuelType;
        this.transmissionType = transmissionType;
        this.price = price;
        this.discount = discount;
        this.mileage = mileage;
        this.carStatus = carStatus;
        this.distanceAllowed = distanceAllowed;
        this.collisionDamageWaiver = collisionDamageWaiver;
        this.childSeats = childSeats;
        this.averageRating = averageRating;
        this.commentCount = commentCount;
    }

    public Car() {}

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public CarBrand getCarBrand() {
        return carBrand;
    }

    public void setCarBrand(CarBrand carBrand) {
        this.carBrand = carBrand;
    }

    public CarModel getCarModel() {
        return carModel;
    }

    public void setCarModel(CarModel carModel) {
        this.carModel = carModel;
    }

    public CarType getCarType() {
        return carType;
    }

    public void setCarType(CarType carType) {
        this.carType = carType;
    }

    public FuelType getFuelType() {
        return fuelType;
    }

    public void setFuelType(FuelType fuelType) {
        this.fuelType = fuelType;
    }

    public TransmissionType getTransmissionType() {
        return transmissionType;
    }

    public void setTransmissionType(TransmissionType transmissionType) {
        this.transmissionType = transmissionType;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public int getDiscount() {
        return discount;
    }

    public void setDiscount(int discount) {
        this.discount = discount;
    }

    public float getMileage() {
        return mileage;
    }

    public void setMileage(float mileage) {
        this.mileage = mileage;
    }

    public CarStatus getCarStatus() {
        return carStatus;
    }

    public void setCarStatus(CarStatus carStatus) {
        this.carStatus = carStatus;
    }

    public float getDistanceAllowed() {
        return distanceAllowed;
    }

    public void setDistanceAllowed(float distanceAllowed) {
        this.distanceAllowed = distanceAllowed;
    }

    public boolean isCollisionDamageWaiver() {
        return collisionDamageWaiver;
    }

    public void setCollisionDamageWaiver(boolean collisionDamageWaiver) {
        this.collisionDamageWaiver = collisionDamageWaiver;
    }

    public int getChildSeats() {
        return childSeats;
    }

    public void setChildSeats(int childSeats) {
        this.childSeats = childSeats;
    }

    public double getAverageRating() {
        return averageRating;
    }

    public void setAverageRating(double averageRating) {
        this.averageRating = averageRating;
    }

    public int getCommentCount() {
        return commentCount;
    }

    public void setCommentCount(int commentCount) {
        this.commentCount = commentCount;
    }
}
