package com.demaxia.DEMACIAAA.dto.Request;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Size;
import lombok.*;
import lombok.experimental.FieldDefaults;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class UserUpdateRequest {
    @Size(min = 8, message = "PASSWORD_INVALID")
    private String password;

    @Email(message = "EMAIL_INVALID")
    private String email;

    private String role;

    // Validate role values (e.g., Enum) if applicable
}
