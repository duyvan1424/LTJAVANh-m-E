package com.demaxia.DEMACIAAA.dto.Request;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class OrderCreationRequest {
    @NotBlank(message = "CUSTOMER_ID_REQUIRED")
    private String customerId;

    @NotBlank(message = "SHIPPING_ADDRESS_REQUIRED")
    private String shippingAddress;

    @NotBlank(message = "ORDER_ADDRESS_REQUIRED")
    private String orderAddress;

    @NotBlank(message = "ORDER_EMAIL_REQUIRED")
    @Email(message = "INVALID_EMAIL_FORMAT")
    private String orderEmail;

    @NotBlank(message = "ORDER_STATUS_REQUIRED")
    private String orderStatus; // Consider using Enum for predefined statuses

    private String trackingNumber; // Optional, might be null at creation
    private String note;

    @NotBlank(message = "ORDER_CUSTOMER_NAME_REQUIRED")
    private String orderNameCustomer;
}
