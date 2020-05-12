package com.example.Xml.model;

import javax.persistence.*;

@Entity
public class Ad {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;
}
