package com.agent.backend.model;

import lombok.Data;

import javax.persistence.*;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;

@Data
@Entity
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(
        name = "Picture", propOrder = {
        "id",
        "picture",
        "ad",
        "isDeleted"
})  //mozda dodati posle }, namespace = "nekiUri/picture"

public class Picture {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @XmlElement
    private Long id;

    @Column
    @XmlElement
    private String picture;

    @ManyToOne(fetch = FetchType.LAZY,cascade = CascadeType.ALL)
    @XmlElement
    private Ad ad;

    @Column
    @XmlElement
    private boolean isDeleted;

    public Picture() {
    }
}
