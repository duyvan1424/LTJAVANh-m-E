package com.example.backend.service;

import com.example.backend.dto.OrderRequest;
import com.example.backend.dto.OrderResponse;
import com.example.backend.entity.Order;
import com.example.backend.entity.User;
import com.example.backend.repository.OrderRepository;
import com.example.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class OrderService {
    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private UserRepository userRepository;

    public Order createOrder(OrderRequest orderRequest, String username) {
        // Find the user by username
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new IllegalArgumentException("User not found"));

        // Map OrderRequest to Order entity
        Order order = new Order();
        order.setUser(user);
        order.setSenderName(user.getUsername());
        order.setSenderAddress(orderRequest.getSenderAddress());
        order.setReceiverName(orderRequest.getReceiverName());
        order.setReceiverAddress(orderRequest.getReceiverAddress());
        order.setReceiverPhone(orderRequest.getReceiverPhone());
        order.setStatus(0); // Set status to PENDING
        // Đảm bảo trackingCode là duy nhất
        while (orderRepository.existsByTrackingCode(order.getTrackingCode())) {
            order.setTrackingCode(order.generateUniqueTrackingCode());
        }
        // Save the order
        return orderRepository.save(order);
    }

    public Order findByTrackingCode(String trackingCode) {
        return orderRepository.findByTrackingCode(trackingCode)
                .orElseThrow(() -> new RuntimeException("Không tìm thấy đơn hàng với mã vận đơn: " + trackingCode));
    }

    // Phương thức tìm kiếm theo mã vận đơn hoặc username
    public List<OrderResponse> getAllOrders() {
        List<Order> orders = orderRepository.findAll(); // Lấy tất cả đơn hàng từ DB
        List<OrderResponse> orderResponses = new ArrayList<>();

        for (Order order : orders) {
            OrderResponse orderResponse = new OrderResponse(
                    order.getTrackingCode(),
                    order.getUser().getUsername(),
                    order.getReceiverName(),
                    order.getSenderAddress(),
                    order.getReceiverAddress(),
                    order.getReceiverPhone(),
                    order.getStatus()
            );
            orderResponses.add(orderResponse);
        }

        return orderResponses;
    }
    public String getStatusName(int status) {
        switch (status) {
            case 0: return "Đang chờ xác nhận";
            case 1: return "Đã đặt hàng";
            case 2: return "Đang giao";
            case 3: return "Đã giao";
            case 4: return "Đã hủy";
        }
        return "";
    }

    public List<OrderResponse> searchOrders(String query) {
        List<Order> orders = orderRepository.findByTrackingCodeContainingOrSenderNameContaining(query, query);
        List<OrderResponse> orderResponses = new ArrayList<>();

        for (Order order : orders) {
            OrderResponse orderResponse = new OrderResponse(
                    order.getTrackingCode(),
                    order.getUser().getUsername(),
                    order.getReceiverName(),
                    order.getSenderAddress(),
                    order.getReceiverAddress(),
                    order.getReceiverPhone(),
                    order.getStatus()
            );
            orderResponses.add(orderResponse);
        }
        return orderResponses;
    }

    public void updateOrderStatus(String trackingCode, int newStatus) {
        Order order = orderRepository.findByTrackingCode(trackingCode)
                .orElseThrow(() -> new RuntimeException("Không tìm thấy: " + trackingCode));
        order.setStatus(newStatus);
        orderRepository.save(order);
    }
}
