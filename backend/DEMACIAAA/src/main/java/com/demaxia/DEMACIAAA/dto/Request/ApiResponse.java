package com.demaxia.DEMACIAAA.dto.Request;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.*;
import lombok.experimental.FieldDefaults;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
@JsonInclude(JsonInclude.Include.NON_NULL)
public class ApiResponse<T> {
    private int code = 1000; // Consider defining standard codes as constants or an Enum for better maintainability
    private String message;
    private T result;

    // Optional: Add utility methods for quick response creation
    public static <T> ApiResponse<T> success(T result) {
        return new ApiResponse<>(1000, "Success", result);
    }

    public static ApiResponse<Void> error(int code, String message) {
        return new ApiResponse<>(code, message, null);
    }
}
