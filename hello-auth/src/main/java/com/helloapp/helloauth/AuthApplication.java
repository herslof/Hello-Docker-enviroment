package com.helloapp.helloauth;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;


@SpringBootApplication
@RestController
@RequestMapping("/auth")
public class AuthApplication {

    @GetMapping("/hello")
    public String hello() {
        return "Hello from auth-service";
    }

    public static void main(String[] args) {
        SpringApplication.run(AuthApplication.class, args);
    }
}