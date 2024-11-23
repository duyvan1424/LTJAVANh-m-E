package com.example.backend.service;

import com.example.backend.dto.RegisterRequest;
import com.example.backend.entity.User;
import com.example.backend.repository.UserRepository;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;

    public String register(RegisterRequest request) {
        // Kiểm tra email và username đã tồn tại chưa
        if (userRepository.findByEmail(request.getEmail()).isPresent()) {
            return "Email đã tồn tại!";
        }
        if (userRepository.findByUsername(request.getUsername()).isPresent()) {
            return "Username đã tồn tại!";
        }

        // Kiểm tra mật khẩu xác nhận
        if (!request.getPassword().equals(request.getConfirmPassword())) {
            return "Mật khẩu không khớp!";
        }

        // Tạo người dùng mới
        User newUser = User.builder()
                .email(request.getEmail())
                .username(request.getUsername())
                .password(request.getPassword())
                .role(0)
                .build();

        userRepository.save(newUser);

        return "Đăng ký thành công!";
    }
}
