package com.helloapp.hellobackend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class HelloApplication {

    @GetMapping("/api/hello")
    public String hello() {
        return "{\"message\": \"Hello from hello-backend!\"}";
    }

    public static void main(String[] args) {
        SpringApplication.run(HelloApplication.class, args);
    }
}
