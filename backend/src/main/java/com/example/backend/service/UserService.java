package com.example.backend.service;

import com.example.backend.dto.RegisterRequest;
import com.example.backend.entity.User;
import com.example.backend.repository.UserRepository;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

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

        // Mã hóa mật khẩu

        // Tạo người dùng mới
        User user = new User();
        user.setUsername(request.getUsername());
        user.setEmail(request.getEmail());
        user.setPassword(bCryptPasswordEncoder.encode(request.getPassword())); // Mã hóa mật khẩu

        userRepository.save(user);

        return "Đăng ký thành công!";
    }
}
