package com.agent.backend.model;

import javax.xml.bind.annotation.XmlEnum;
import javax.xml.bind.annotation.XmlType;

@XmlType(
        name = "Role"
)
@XmlEnum
public enum Role {
    ADMINISTRATOR,
    ENDUSER,
    FIRM,
    AGENT
}
