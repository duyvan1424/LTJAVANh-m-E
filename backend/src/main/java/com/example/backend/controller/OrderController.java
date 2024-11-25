package com.example.backend.controller;

import com.example.backend.dto.OrderRequest;
import com.example.backend.dto.OrderResponse;
import com.example.backend.entity.Order;
import com.example.backend.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/orders")
public class OrderController {
    @Autowired
    private OrderService orderService;

    @PostMapping
    public ResponseEntity<Map<String, String>>  createOrder(@RequestBody OrderRequest orderRequest, @RequestParam String username) {
        Order createdOrder = orderService.createOrder(orderRequest, username);
        // Tạo phản hồi chứa mã vận đơn
        Map<String, String> response = new HashMap<>();
        response.put("trackingCode", createdOrder.getTrackingCode()); // Lấy mã vận đơn từ order
        response.put("message", "Đơn vận chuyển được tạo thành công!");

        return ResponseEntity.ok(response);
    }

    @GetMapping("/tracking")
    public ResponseEntity<?> getOrderByTrackingCode(@RequestParam String code) {
        try {
            Order order = orderService.findByTrackingCode(code);

            OrderResponse orderResponse = new OrderResponse(
                    order.getTrackingCode(),
                    order.getUser().getUsername(),
                    order.getReceiverName(),
                    order.getSenderAddress(),
                    order.getReceiverAddress(),
                    order.getReceiverPhone(),
                    order.getStatus()
            );

            return ResponseEntity.ok(orderResponse);
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
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

    // Lấy tất cả đơn hàng hoặc tìm kiếm theo mã vận đơn hoặc username
    @GetMapping
    public ResponseEntity<List<OrderResponse>> getOrders(@RequestParam(required = false) String search) {
        List<OrderResponse> orders;

        if (search != null && !search.isEmpty()) {
            orders = orderService.searchOrders(search);
        } else {
            orders = orderService.getAllOrders();
        }

        return ResponseEntity.ok(orders);
    }

    @PutMapping("/{trackingCode}")
    public ResponseEntity<String> updateOrderStatus(
            @PathVariable String trackingCode,
            @RequestBody Map<String, Integer> payload) {

        Integer newStatus = payload.get("status");
        if (newStatus == null) {
            return ResponseEntity.badRequest().body("Status is required");
        }

        try {
            orderService.updateOrderStatus(trackingCode, newStatus);
            return ResponseEntity.ok("Order status updated successfully");
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    }
}
