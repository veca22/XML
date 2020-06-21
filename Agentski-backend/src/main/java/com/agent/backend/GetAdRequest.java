package com.agent.backend;

import javax.xml.bind.annotation.*;

@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(
        name = "", propOrder = {
                "id"
})
@XmlRootElement(name = "getAdRequest")
public class GetAdRequest {

    @XmlElement
    protected Long id;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
