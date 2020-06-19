package com.agent.backend.model;

import javax.xml.bind.annotation.XmlEnum;
import javax.xml.bind.annotation.XmlType;

@XmlType(
        name = "RentRequestStatus"
)
@XmlEnum
public enum RentRequestStatus {
    PENDING,
    RESERVED,
    PAID,
    CANCELED
}
