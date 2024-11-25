package com.demaxia.DEMACIAAA.dto.response;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class OrderResponse {
    private String id;
    private String customerId;
    private String shippingAddress;
    private String orderAddress;
    private String orderEmail;
    private String orderDate; // Consider using LocalDateTime for better handling of date and time
    private String orderStatus; // Use Enum to restrict to predefined statuses
    private String trackingNumber;
    private String note;
    private String orderNameCustomer;

    // Optional: Add a constructor for custom initialization
    public OrderResponse(String id, String customerId, String shippingAddress, String orderAddress, 
                         String orderEmail, String orderDate, String orderStatus, String trackingNumber, 
                         String note, String orderNameCustomer) {
        this.id = id;
        this.customerId = customerId;
        this.shippingAddress = shippingAddress;
        this.orderAddress = orderAddress;
        this.orderEmail = orderEmail;
        this.orderDate = orderDate;
        this.orderStatus = orderStatus;
        this.trackingNumber = trackingNumber;
        this.note = note;
        this.orderNameCustomer = orderNameCustomer;
    }
}
