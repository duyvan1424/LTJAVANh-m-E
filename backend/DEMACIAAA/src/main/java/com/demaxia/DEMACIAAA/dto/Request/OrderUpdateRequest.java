package com.demaxia.DEMACIAAA.dto.Request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class OrderUpdateRequest {
    private String orderStatus; // Consider using an Enum for better validation and maintainability
    private String note;
}
