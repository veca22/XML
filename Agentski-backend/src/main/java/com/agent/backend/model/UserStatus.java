package com.agent.backend.model;

import javax.xml.bind.annotation.XmlEnum;
import javax.xml.bind.annotation.XmlType;

@XmlType(
        name = "UserStatus"
)
@XmlEnum
public enum UserStatus {
    ACCEPTED,
    AWAITING_APPROVAL,
    BLOCKED,
    REMOVED
}
