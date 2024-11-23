package com.demaxia.DEMACIAAA.dto.Request;

import lombok.Data;

@Data
public class OrderCreationRequest {
    private String customerId;
    private String shippingAddress;
    private String orderAddress;
    private String orderEmail;
    private String orderStatus;
    private String trackingNumber;
    private String note;
    private String orderNameCustomer;
}
