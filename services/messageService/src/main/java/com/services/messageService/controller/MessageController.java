package com.services.messageService.controller;

import com.services.messageService.dtos.MessageDTO;
import com.services.messageService.model.Message;
import com.services.messageService.service.MessageService;
import com.services.messageService.service.UserService;
import org.joda.time.DateTime;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;

@CrossOrigin(origins = {"http://localhost:4200"})
@RestController
public class MessageController {

    @Autowired
    private MessageService messageService;

    @Autowired
    private UserService userService;

    @PostMapping(value = "/send")
    public void sendMessage(@RequestBody MessageDTO messageDTO){
        Message mess = new Message();
        mess.setText(messageDTO.getText());
        mess.setSubject(messageDTO.getSubject());
        mess.setSender(userService.findUserByEmail(messageDTO.getEmail()));
        mess.setSender(userService.findUserByEmail(messageDTO.getEmailAd()));
        LocalDateTime time= LocalDateTime.now();
        DateTime date = DateTime.parse(time.toString());
        mess.setMessageTime(date.toDate());
        messageService.save(mess);
    }


}
