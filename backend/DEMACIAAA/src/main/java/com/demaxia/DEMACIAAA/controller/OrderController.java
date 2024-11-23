package com.demaxia.DEMACIAAA.controller;

import com.demaxia.DEMACIAAA.dto.Request.ApiResponse;
import com.demaxia.DEMACIAAA.dto.Request.OrderCreationRequest;
import com.demaxia.DEMACIAAA.dto.Request.OrderUpdateRequest;
import com.demaxia.DEMACIAAA.dto.response.OrderResponse;
import com.demaxia.DEMACIAAA.entity.Order;
import com.demaxia.DEMACIAAA.service.OrderService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3001")
@RequestMapping("/orders")
public class OrderController {

    @Autowired
    private OrderService orderService;

    @PostMapping
    public ApiResponse<OrderResponse> createOrder(@RequestBody @Valid OrderCreationRequest request) {
        ApiResponse<OrderResponse> apiResponse = new ApiResponse<>();
        apiResponse.setResult(orderService.createOrder(request)); // createOrder trả về OrderResponse
        return apiResponse;
    }


    // Lấy danh sách tất cả đơn hàng
    @GetMapping
    public List<OrderResponse> getOrders() {
        return orderService.getAllOrders();
    }

    // Lấy thông tin chi tiết một đơn hàng
    @GetMapping("/{id}")
    public OrderResponse getOrder(@PathVariable("id") String id) {
        return orderService.getOrderById(id);
    }

    // Cập nhật thông tin một đơn hàng
    @PutMapping("/{id}")
    public OrderResponse updateOrder(@PathVariable String id, @RequestBody OrderUpdateRequest request) {
        return orderService.updateOrder(id, request);
    }

    // Xóa một đơn hàng
    @DeleteMapping("/{id}")
    public String deleteOrder(@PathVariable String id) {
        orderService.deleteOrder(id);
        return "Order has been deleted.";
    }
}
