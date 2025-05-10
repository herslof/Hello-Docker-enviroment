package com.helloapp.hellobackend.controller;

import com.helloapp.hellobackend.model.HelloMessage;
import com.helloapp.hellobackend.repository.HelloMessageRepository;

import org.springframework.web.bind.annotation.*;
import org.owasp.html.PolicyFactory;
import org.owasp.html.Sanitizers;

import java.util.List;

@RestController
@RequestMapping("/api/messages")
public class HelloMessageController {

    private final HelloMessageRepository repository;
    private static final PolicyFactory POLICY = Sanitizers.FORMATTING.and(Sanitizers.LINKS);

    public HelloMessageController(HelloMessageRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    public List<HelloMessage> getAllMessages() {
        return repository.findAll();
    }

    @PostMapping
    public HelloMessage createMessage(@RequestBody HelloMessage message) {
        String cleanUserName = POLICY.sanitize(message.getUsername());
        String cleanMessage = POLICY.sanitize(message.getMessage());
        return repository.save(
            new HelloMessage(cleanUserName, cleanMessage)
        );
    }
}
