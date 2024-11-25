package com.example.backend.dto;

import lombok.Data;

@Data
public class OrderRequest {
    private String senderAddress;
    private String receiverName;
    private String receiverAddress;
    private String receiverPhone;
}
