package com.demaxia.DEMACIAAA.dto.response;

import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class UserReponse {
    private String id;
    private String username;
    private String password;
    private String email;
//    private String firstname;
//    private String lastname;
//    private LocalDate dob;
    private String role;
}
