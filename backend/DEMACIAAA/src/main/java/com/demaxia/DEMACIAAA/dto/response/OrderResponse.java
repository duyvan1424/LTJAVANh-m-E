package com.demaxia.DEMACIAAA.dto.response;

import lombok.Data;

@Data
public class OrderResponse {
    private String id;
    private String customerId;
    private String shippingAddress;
    private String orderAddress;
    private String orderEmail;
    private String orderDate;
    private String orderStatus;
    private String trackingNumber;
    private String note;
    private String orderNameCustomer;
}
