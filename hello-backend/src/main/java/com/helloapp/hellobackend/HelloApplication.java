package com.helloapp.hellobackend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Value;
import java.util.Map;

@SpringBootApplication
@RestController
public class HelloApplication {

    @Value("${BACKEND_ENVIRONMENT:Unknown}")
    private String environment;

    @GetMapping("/api/hello")
    public String hello() {
        String message = "Hello from hello-backend! " ;
        return "{\"message\": \"" + message + "\"}";
    }

    @GetMapping("/api/env")
    public Map<String, String> getEnvironment() {
        return Map.of("environment", environment);
    }



    public static void main(String[] args) {
        SpringApplication.run(HelloApplication.class, args);
    }
}
