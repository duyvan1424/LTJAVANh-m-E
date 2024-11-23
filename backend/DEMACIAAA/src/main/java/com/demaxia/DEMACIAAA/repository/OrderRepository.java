package com.demaxia.DEMACIAAA.repository;

import com.demaxia.DEMACIAAA.entity.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderRepository extends JpaRepository<Order, String> {
    boolean existsByTrackingNumber(String trackingNumber);
}
