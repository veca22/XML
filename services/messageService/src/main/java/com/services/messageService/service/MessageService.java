package com.services.messageService.service;

import com.services.messageService.model.Message;
import com.services.messageService.repository.MessageRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MessageService {

    @Autowired
    private MessageRepo messageRepo;

    public List<Message> findall() {return messageRepo.findAll();}

    public Message save(Message f) { return messageRepo.save(f);}
}
