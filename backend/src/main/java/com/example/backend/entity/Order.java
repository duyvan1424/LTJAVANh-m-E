package com.example.backend.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "orders")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @Column(name = "username", nullable = false)
    private String senderName;
    @Column(name = "sender_address", nullable = false)
    private String senderAddress;
    @Column(name = "receiver_name", nullable = false)
    private String receiverName;
    @Column(name = "receiver_address", nullable = false)
    private String receiverAddress;
    @Column(name = "receiver_phone", nullable = false)
    private String receiverPhone;
    @Column(nullable = false)
    private int status; // 0: PENDING, 1: APPROVED, 2: DELIVERED, 3: CANCELLED
    @Column(name = "tracking_code", nullable = false, unique = true)
    private String trackingCode;
    @Column(name = "created_at", nullable = false, updatable = false)
    private LocalDateTime createdAt = LocalDateTime.now();

    @PrePersist
    private void generateTrackingCode() {
        this.trackingCode = generateUniqueTrackingCode();
    }

    public String generateUniqueTrackingCode() {
        String characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        StringBuilder code = new StringBuilder();
        for (int i = 0; i < 10; i++) {
            int index = (int) (Math.random() * characters.length());
            code.append(characters.charAt(index));
        }
        return code.toString();
    }
}
