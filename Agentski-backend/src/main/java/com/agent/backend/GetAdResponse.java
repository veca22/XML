package com.agent.backend;

import com.agent.backend.model.Ad;

import javax.xml.bind.annotation.*;

@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(
        name = "", propOrder = {
                "ad"
})
@XmlRootElement(name = "getAdResponse")
public class GetAdResponse {

    @XmlElement
    protected Ad ad;

    public Ad getAd() {
        return ad;
    }

    public void setAd(Ad ad) {
        this.ad = ad;
    }
}
