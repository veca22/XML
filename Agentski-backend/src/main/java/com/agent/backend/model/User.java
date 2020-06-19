package com.agent.backend.model;

import javax.persistence.*;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;

@Entity
@Table(name="users")
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(
        name = "User", propOrder = {
        "id",
        "email",
        "password",
        "role",
        "status"
})  //mozda dodati posle }, namespace = "nekiUri/user"

public class User {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @XmlElement
    private Long id;

    @Column(nullable = false)
    @XmlElement
    private String email;

    @Column(nullable = false)
    @XmlElement
    private String password;

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    @XmlElement
    private Role role;

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    @XmlElement
    private UserStatus status;

    public User(String email, String password, Role role, UserStatus status) {
        this.email = email;
        this.password = password;
        this.role = role;
        this.status = status;
    }

    public User() {

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }

    public UserStatus getStatus() {
        return status;
    }

    public void setStatus(UserStatus status) {
        this.status = status;
    }
}
