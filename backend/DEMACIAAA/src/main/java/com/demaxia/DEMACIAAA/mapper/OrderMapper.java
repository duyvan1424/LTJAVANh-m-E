package com.demaxia.DEMACIAAA.mapper;

import com.demaxia.DEMACIAAA.dto.Request.OrderCreationRequest;
import com.demaxia.DEMACIAAA.dto.Request.OrderUpdateRequest;
import com.demaxia.DEMACIAAA.dto.response.OrderResponse;
import com.demaxia.DEMACIAAA.entity.Order;
import org.mapstruct.Mapper;
import org.mapstruct.MappingTarget;

import java.util.List;

@Mapper(componentModel = "spring")
public interface OrderMapper {
    // Phương thức ánh xạ từ OrderCreationRequest sang Order
    Order toOrder(OrderCreationRequest request);

    // Phương thức cập nhật Order từ OrderUpdateRequest
    void updateOrder(@MappingTarget Order order, OrderUpdateRequest request);

    // Phương thức ánh xạ từ Order sang OrderResponse
    OrderResponse toOrderResponse(Order order);

    // Phương thức ánh xạ từ danh sách Order sang danh sách OrderResponse
    List<OrderResponse> toOrderResponseList(List<Order> orders);
}
