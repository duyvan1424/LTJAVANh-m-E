package com.demaxia.DEMACIAAA.dto.response;

import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.time.LocalDate;

/**
 * UserResponse class representing a response object for user data.
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class UserResponse {
    private String id; // Unique identifier for the user
    private String username; // User's login name
    private String email; // Email of the user

    /**
     * Ensure to store only encrypted password. Plain text password storage is discouraged.
     */
    private String password; 

    private String firstname; // User's first name
    private String lastname; // User's last name
    private LocalDate dob; // Date of birth of the user
    private String role; // Role of the user in the system (e.g., admin, user, etc.)
}
