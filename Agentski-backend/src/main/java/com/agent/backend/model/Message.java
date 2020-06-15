package com.agent.backend.model;

import javax.persistence.*;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;
import java.time.LocalDateTime;

@Entity
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(
        name = "Message", propOrder = {
                "id",
                "sender",
                "receiver",
                "message",
                "messageTime"
}, namespace = "nekiUri/message")
public class Message {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @XmlElement
    private Long id;

    @ManyToOne
    @JoinColumn(name = "sender_id", nullable = false)
    @XmlElement
    private User sender;

    @ManyToOne
    @JoinColumn(name = "receiver_id", nullable = false)
    @XmlElement
    private User receiver;

    @Column
    @XmlElement
    private String message;

    @Column
    @XmlElement
    private LocalDateTime messageTime;
}
