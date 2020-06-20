package com.agent.backend.dtos;

import com.agent.backend.model.Car;
import com.agent.backend.model.Comment;


public class AddCommentDTO {
    private Comment comment;
    private Car car;
    private int mileage;

    public Comment getComment() {
        return comment;
    }

    public void setComment(Comment comment) {
        this.comment = comment;
    }

    public Car getCar() {
        return car;
    }

    public void setCar(Car car) {
        this.car = car;
    }

    public int getMileage() {
        return mileage;
    }

    public void setMileage(int mileage) {
        this.mileage = mileage;
    }
}
