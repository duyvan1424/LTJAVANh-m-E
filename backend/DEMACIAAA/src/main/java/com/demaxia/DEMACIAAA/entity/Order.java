package com.demaxia.DEMACIAAA.entity;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDate;

/**
 * Entity class representing an Order in the system.
 */
@Entity
@Table(name = "orders") // Table name for storing order data
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID) // Generate unique identifier
    private String id;

    @Column(name = "customer_id", nullable = false)
    private String customerId; // ID of the customer placing the order

    @Column(name = "shipping_address", nullable = false, length = 255)
    private String shippingAddress; // Shipping address for the order

    @Column(name = "order_name_customer", nullable = false)
    private String orderNameCustomer; // Name of the customer placing the order

    @Column(name = "receiver_name", nullable = false)
    private String receiverName; // Name of the person receiving the order

    @Column(name = "order_address", nullable = false)
    private String orderAddress; // Address of the order location

    @Column(name = "order_email", nullable = false)
    private String orderEmail; // Email for order notifications

    @Column(name = "order_date", nullable = false)
    private LocalDate orderDate; // Date when the order was placed

    @Column(name = "order_status", nullable = false)
    private String orderStatus; // Status of the order (e.g., Pending, Shipped)

    @Column(name = "tracking_number", unique = true, length = 255)
    private String trackingNumber; // Tracking number for the order

    @Column(name = "note")
    private String note; // Additional notes for the order
}
