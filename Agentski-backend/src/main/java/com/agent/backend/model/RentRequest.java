package com.agent.backend.model;

import javax.persistence.*;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;
import java.time.LocalDateTime;
import java.util.Set;

@Entity
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(
        name = "RentRequest", propOrder = {
                "id",
                "reservedFrom",
                "reservedTo",
                "rentRequest",
                "carsForRent",
                "client"
}, namespace = "nekiUri/rentRequest")
public class RentRequest {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @XmlElement
    private Long id;

    @Column(nullable = false)
    @XmlElement
    private LocalDateTime reservedFrom;

    @Column(nullable = false)
    @XmlElement
    private LocalDateTime reservedTo;

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    @XmlElement
    private RentRequestStatus rentRequest;

    @ManyToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @XmlElement
    private Set<Car> carsForRent;

    @ManyToOne
    @JoinColumn(name = "client_id", nullable = false)
    @XmlElement
    private Client client;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalDateTime getReservedFrom() {
        return reservedFrom;
    }

    public void setReservedFrom(LocalDateTime reservedFrom) {
        this.reservedFrom = reservedFrom;
    }

    public LocalDateTime getReservedTo() {
        return reservedTo;
    }

    public void setReservedTo(LocalDateTime reservedTo) {
        this.reservedTo = reservedTo;
    }

    public RentRequestStatus getRentRequest() {
        return rentRequest;
    }

    public void setRentRequest(RentRequestStatus rentRequest) {
        this.rentRequest = rentRequest;
    }

    public Set<Car> getCarsForRent() {
        return carsForRent;
    }

    public void setCarsForRent(Set<Car> carsForRent) {
        this.carsForRent = carsForRent;
    }

    public Client getClient() {
        return client;
    }

    public void setClient(Client client) {
        this.client = client;
    }
}
