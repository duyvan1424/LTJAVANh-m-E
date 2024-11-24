package com.example.backend.controller;

import com.example.backend.dto.AuthStatusResponse;
import com.example.backend.dto.LoginRequest;
import com.example.backend.dto.RegisterRequest;
import com.example.backend.entity.User;
import com.example.backend.repository.UserRepository;
import com.example.backend.service.UserService;
import com.example.backend.util.JwtUtil;
import jakarta.servlet.http.HttpServletRequest;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
    @Autowired
    private UserService userService;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody RegisterRequest request) {
        String result = userService.register(request);
        if (result.equals("Đăng ký thành công!")) {
            return ResponseEntity.ok(result);
        } else {
            return ResponseEntity.badRequest().body(result);
        }
    }
    // Đăng nhập người dùng
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) {
        // Kiểm tra người dùng có tồn tại không
        User user = userRepository.findByEmail(loginRequest.getEmail()).orElse(null);
        if (user == null) {
            return ResponseEntity.status(401).body("Tài khoản không tồn tại!");
        }

        // Kiểm tra mật khẩu nhập vào với mật khẩu đã mã hóa trong cơ sở dữ liệu
        if (!bCryptPasswordEncoder.matches(loginRequest.getPassword(), user.getPassword())) {
            return ResponseEntity.status(401).body("Mật khẩu không chính xác!");
        }

        // Nếu đăng nhập thành công, tạo JWT và trả về
        String token = jwtUtil.generateToken(user);

        // Tạo đối tượng Response chứa token và role
        Map<String, Object> response = new HashMap<>();
        response.put("token", token);
        response.put("role", user.getRole());  // Assuming `getRole()` is the method to get the user's role

        return ResponseEntity.ok(response); // Return both token and role
    }

    // API kiểm tra trạng thái và role người dùng
    @GetMapping("/status")
    public ResponseEntity<?> checkStatus(HttpServletRequest request) {
        String token = request.getHeader("Authorization");

        if (token == null || !token.startsWith("Bearer ")) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Không có token hoặc token không hợp lệ");
        }

        token = token.substring(7);

        try {
            String username = jwtUtil.extractUsername(token);
            System.out.println("Username từ token: " + username); // Log username
            System.out.println("token: " + token); // Log username

            User user = userRepository.findByEmail(username).orElse(null);
            if (user == null) {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Người dùng không tồn tại");
            }

            if (jwtUtil.isTokenExpired(token)) {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Token đã hết hạn");
            }

            // Trả về thông tin với đối tượng AuthStatusResponse
            return ResponseEntity.ok(new AuthStatusResponse(true, user.getRole()));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Token không hợp lệ");
        }
    }

}
