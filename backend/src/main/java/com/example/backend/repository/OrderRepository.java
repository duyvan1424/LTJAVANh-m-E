package com.example.backend.repository;

import com.example.backend.entity.Order;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface OrderRepository extends JpaRepository<Order, Integer> {
    boolean existsByTrackingCode(String trackingCode);
    Optional<Order> findByTrackingCode(String trackingCode);
    List<Order> findByTrackingCodeContainingOrSenderNameContaining(String trackingCode, String senderName);
}
