package com.example.Xml.model;

import javax.persistence.*;
import java.util.Date;
import java.util.Set;

@Entity
public class Ad {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY,cascade = CascadeType.ALL)
    private Car car;

    @Column
    private String profilePicture;

    @OneToMany(mappedBy = "ad",fetch = FetchType.LAZY,cascade = CascadeType.ALL)
    private Set<Picture> pictureSet;

    //client
    @ManyToOne(fetch = FetchType.LAZY,cascade = CascadeType.ALL)
    private Client client;

    @Temporal(TemporalType.TIMESTAMP)
    @Column
    private Date startOfAd;

    @Temporal(TemporalType.TIMESTAMP)
    @Column
    private Date endOfAd;

    @Column
    private String description;

    @Column
    private boolean isActive;


    @OneToOne(fetch = FetchType.LAZY)
    private Client currentDriver;

    @OneToMany(mappedBy = "ad",fetch = FetchType.LAZY,cascade = CascadeType.ALL)
    private Set<Comment> comments;

    public Ad() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Car getCar() {
        return car;
    }

    public void setCar(Car car) {
        this.car = car;
    }

    public String getProfilePicture() {
        return profilePicture;
    }

    public void setProfilePicture(String profilePicture) {
        this.profilePicture = profilePicture;
    }

    public Set<Picture> getPictureSet() {
        return pictureSet;
    }

    public void setPictureSet(Set<Picture> pictureSet) {
        this.pictureSet = pictureSet;
    }

    public Client getClient() {
        return client;
    }

    public void setClient(Client client) {
        this.client = client;
    }

    public Date getStartOfAd() {
        return startOfAd;
    }

    public void setStartOfAd(Date startOfAd) {
        this.startOfAd = startOfAd;
    }

    public Date getEndOfAd() {
        return endOfAd;
    }

    public void setEndOfAd(Date endOfAd) {
        this.endOfAd = endOfAd;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public boolean isActive() {
        return isActive;
    }

    public void setActive(boolean active) {
        isActive = active;
    }

    public Client getCurrentDriver() {
        return currentDriver;
    }

    public void setCurrentDriver(Client currentDriver) {
        this.currentDriver = currentDriver;
    }

    public Set<Comment> getComments() {
        return comments;
    }

    public void setComments(Set<Comment> comments) {
        this.comments = comments;
    }
}
