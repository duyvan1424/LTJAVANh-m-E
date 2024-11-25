package com.demaxia.DEMACIAAA.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

/**
 * Entity class representing a User in the system.
 */
@Entity
@Table(name = "users") // Plural form to follow database naming conventions
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID) // Generate unique identifier
    private String id;

    @Column(unique = true, nullable = false, length = 255)
    private String username; // Unique username for the user

    @Column(nullable = false)
    private String password; // Encrypted password for the user

    @Column(unique = true, nullable = false)
    private String email; // Unique email address for the user

    @Column(name = "first_name")
    private String firstname; // User's first name

    @Column(name = "last_name")
    private String lastname; // User's last name

    @Column(name = "date_of_birth")
    private LocalDate dob; // User's date of birth

    @Column(nullable = false)
    private String role; // Role assigned to the user (e.g., Admin, Customer)
}
