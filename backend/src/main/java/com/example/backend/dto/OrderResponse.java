package com.example.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class OrderResponse {
    private String trackingCode;
    private String senderName;
    private String receiverName;
    private String senderAddress;
    private String receiverAddress;
    private String receiverPhone;
    private int status;
}
