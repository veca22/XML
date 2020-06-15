package com.agent.backend.model;

import javax.persistence.*;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;

@Entity
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(
        name = "PriceList", propOrder = {
                "id",
                "realPrice",
                "priceForMileage",
                "priceForCollisionDamageWavier",
                "priceForCollisionDamageWavier"
}, namespace = "nekiUri/priceList")
public class PriceList {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @XmlElement
    private Long id;

    @Column
    @XmlElement
    private double realPrice;   //stvarna cena auta

    @Column
    @XmlElement
    private double priceForMileage; //cena za kilometrazu

    @Column
    @XmlElement
    private double priceForCollisionDamageWavier;   //cena za collision

    @ManyToOne
    @JoinColumn(name = "ad_id")
    @XmlElement
    private Ad ad;  //oglas

    public PriceList() {
    }

    public PriceList(Long id, double realPrice, double priceForMileage, double priceForCollisionDamageWavier, Ad ad) {
        this.id = id;
        this.realPrice = realPrice;
        this.priceForMileage = priceForMileage;
        this.priceForCollisionDamageWavier = priceForCollisionDamageWavier;
        this.ad = ad;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public double getRealPrice() {
        return realPrice;
    }

    public void setRealPrice(double realPrice) {
        this.realPrice = realPrice;
    }

    public double getPriceForMileage() {
        return priceForMileage;
    }

    public void setPriceForMileage(double priceForMileage) {
        this.priceForMileage = priceForMileage;
    }

    public double getPriceForCollisionDamageWavier() {
        return priceForCollisionDamageWavier;
    }

    public void setPriceForCollisionDamageWavier(double priceForCollisionDamageWavier) {
        this.priceForCollisionDamageWavier = priceForCollisionDamageWavier;
    }

    public Ad getAd() {
        return ad;
    }

    public void setAd(Ad ad) {
        this.ad = ad;
    }
}
