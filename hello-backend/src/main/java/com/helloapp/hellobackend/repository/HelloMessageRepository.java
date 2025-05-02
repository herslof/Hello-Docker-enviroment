package com.helloapp.hellobackend.repository;

import com.helloapp.hellobackend.model.HelloMessage;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HelloMessageRepository extends JpaRepository<HelloMessage, Long> {

}