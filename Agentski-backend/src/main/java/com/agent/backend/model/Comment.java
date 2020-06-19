package com.agent.backend.model;

import javax.persistence.*;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;

@Entity
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(
        name = "Comment", propOrder = {
        "id",
        "commenter",
        "comment",
        "approved",
        "ad"
})  //mozda dodati posle }, namespace = "nekiUri/comment"

public class Comment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @XmlElement
    private Long id;

    @ManyToOne
    @JoinColumn(name = "commenter_id", nullable = false)
    @XmlElement
    private User commenter;

    @Column
    @XmlElement
    private String comment;

    @Column
    @XmlElement
    private boolean approved = false;

    @ManyToOne
    @JoinColumn(name = "ad_id")
    @XmlElement
    private Ad ad;

    public Comment() {
    }

    public Comment(User commenter, String comment, boolean approved, Ad ad) {
        this.commenter = commenter;
        this.comment = comment;
        this.approved = approved;
        this.ad = ad;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public User getCommenter() {
        return commenter;
    }

    public void setCommenter(User commenter) {
        this.commenter = commenter;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public boolean isApproved() {
        return approved;
    }

    public void setApproved(boolean approved) {
        this.approved = approved;
    }


    public Ad getAd() {
        return ad;
    }

    public void setAd(Ad ad) {
        this.ad = ad;
    }

    @Override
    public String toString() {
        return "Comment{" +
                "id=" + id +
                ", commenter=" + commenter +
                ", comment='" + comment + '\'' +
                ", approved=" + approved +
                ", ad=" + ad +
                '}';
    }
}
