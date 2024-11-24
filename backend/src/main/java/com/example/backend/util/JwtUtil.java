package com.example.backend.util;

import com.example.backend.entity.User;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;

import java.util.Date;

@Component
public class JwtUtil {
    private final String secretKey = "NamMoADiDaPhatNamMoADiDaPhatNamMoADiDaPhatNamMoADiDaPhatNamMoADiDaPhatNamMoADiDaPhatNamMoADiDaPhatNamMoADiDaPhat";
    // Tạo JWT
    public String generateToken(User user) {
        return Jwts.builder()
                .setSubject(user.getEmail())
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60 * 10)) // 10 giờ
                .signWith(SignatureAlgorithm.HS256, secretKey)
                .compact();
    }

//    // Lấy thông tin người dùng từ JWT
//    public String extractUserId(String token) {
//        return Jwts.parser()
//                .setSigningKey(secretKey)
//                .build()
//                .parseClaimsJws(token)
//                .getBody()
//                .getSubject();
//    }
//
//    // Kiểm tra token còn hiệu lực hay không
//    public boolean isTokenExpired(String token) {
//        return extractExpirationDate(token).before(new Date());
//    }
//
    private Date extractExpirationDate(String token) {
        return Jwts.parser()
                .setSigningKey(secretKey)
                .build()
                .parseClaimsJws(token)
                .getBody()
                .getExpiration();
    }
//    // Lấy các claims từ token
//    private Claims extractClaims(String token) {
//        return Jwts.parser()  // Chú ý cách sử dụng parserBuilder() thay cho parser()
//                .setSigningKey(secretKey)
//                .build()
//                .parseClaimsJws(token)
//                .getBody();
//    }

    // Phương thức trích xuất username từ token
    public String extractUsername(String token) {
        return extractClaim(token, Claims::getSubject);
    }

    // Phương thức trích xuất claim từ token
    public <T> T extractClaim(String token, ClaimsResolver<T> claimsResolver) {
        final Claims claims = extractAllClaims(token);
        return claimsResolver.resolve(claims);
    }

    // Phương thức trích xuất tất cả các claims
    private Claims extractAllClaims(String token) {
        return Jwts.parser()
                .setSigningKey(secretKey)
                .build()
                .parseClaimsJws(token)
                .getBody();
    }

    // Đối tượng giúp trích xuất claims
    public interface ClaimsResolver<T> {
        T resolve(Claims claims);
    }

    public Boolean isTokenExpired(String token) {
        return extractExpirationDate(token).before(new Date());
    }

}
