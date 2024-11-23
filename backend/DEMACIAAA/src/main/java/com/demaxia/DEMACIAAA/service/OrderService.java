package com.demaxia.DEMACIAAA.service;

import com.demaxia.DEMACIAAA.dto.Request.OrderCreationRequest;
import com.demaxia.DEMACIAAA.dto.Request.OrderUpdateRequest;
import com.demaxia.DEMACIAAA.dto.response.OrderResponse;
import com.demaxia.DEMACIAAA.entity.Order;
import com.demaxia.DEMACIAAA.exception.AppException;
import com.demaxia.DEMACIAAA.exception.ErrorCode;
import com.demaxia.DEMACIAAA.mapper.OrderMapper;
import com.demaxia.DEMACIAAA.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderService {

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private OrderMapper orderMapper;

    public OrderResponse createOrder(OrderCreationRequest request) {
        Order order = orderMapper.toOrder(request);

        if (orderRepository.existsByTrackingNumber(request.getTrackingNumber())) {
            throw new AppException(ErrorCode.ORDER_EXISTED);
        }

        Order savedOrder = orderRepository.save(order);
        return orderMapper.toOrderResponse(savedOrder);
    }

    public OrderResponse updateOrder(String orderId, OrderUpdateRequest request) {
        Order order = orderRepository.findById(orderId)
                .orElseThrow(() -> new AppException(ErrorCode.ORDER_NOT_FOUND));

        orderMapper.updateOrder(order, request);

        Order updatedOrder = orderRepository.save(order);
        return orderMapper.toOrderResponse(updatedOrder);
    }

    public void deleteOrder(String orderId) {
        if (!orderRepository.existsById(orderId)) {
            throw new AppException(ErrorCode.ORDER_NOT_FOUND);
        }
        orderRepository.deleteById(orderId);
    }

    public List<OrderResponse> getAllOrders() {
        List<Order> orders = orderRepository.findAll();
        return orderMapper.toOrderResponseList(orders);
    }

    public OrderResponse getOrderById(String orderId) {
        Order order = orderRepository.findById(orderId)
                .orElseThrow(() -> new AppException(ErrorCode.ORDER_NOT_FOUND));
        return orderMapper.toOrderResponse(order);
    }
}
