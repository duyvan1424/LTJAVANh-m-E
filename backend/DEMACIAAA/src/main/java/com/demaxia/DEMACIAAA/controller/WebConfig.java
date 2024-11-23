package com.demaxia.DEMACIAAA.controller;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**") // Định nghĩa đường dẫn API mà bạn muốn cho phép
                .allowedOrigins("http://localhost:3001") // Cho phép từ localhost:3001
                .allowedMethods("GET", "POST", "PUT", "DELETE") // Phương thức HTTP nào được phép
                .allowedHeaders("*"); // Các header được phép
    }
}
