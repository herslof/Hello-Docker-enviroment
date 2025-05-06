package com.helloapp.hellobackend.controller;

import com.helloapp.hellobackend.model.HelloMessage;
import com.helloapp.hellobackend.repository.HelloMessageRepository;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/messages")
public class HelloMessageController {

    private final HelloMessageRepository repository;

    public HelloMessageController(HelloMessageRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    public List<HelloMessage> getAllMessages() {
        return repository.findAll();
    }

    @PostMapping
    public HelloMessage createMessage(@RequestBody HelloMessage message) {
        return repository.save(
            new HelloMessage(message.getUsername(), message.getMessage())
        );
    }
}
