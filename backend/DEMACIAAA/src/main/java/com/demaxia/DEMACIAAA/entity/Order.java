package com.demaxia.DEMACIAAA.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;

@Entity
@Table(name = "orders") // Đổi tên bảng để tránh trùng với từ khóa SQL
@Data
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id; // ID chính cho bảng

    @Column(name = "customer_id", nullable = false)
    private String customerId; // ID của khách hàng

    @Column(name = "shipping_address", nullable = false, columnDefinition = "varchar(255)")
    private String shippingAddress;

    @Column(name = "order_name_customer", nullable = false)
    private String orderNameCustomer;

    @Column(name = "receiver_name", nullable = false)
    private String receiverName;

    @Column(name = "order_address", nullable = false)
    private String orderAddress;

    @Column(name = "order_email", nullable = false)
    private String orderEmail;

    @Column(name = "order_date", nullable = false)
    private LocalDate orderDate;

    @Column(name = "order_status", nullable = false)
    private String orderStatus;

    @Column(name = "tracking_number", unique = true, columnDefinition = "varchar(255)")
    private String trackingNumber; // Kiểu dữ liệu là chuỗi cho mã theo dõi

    @Column(name = "note")
    private String note;
}
