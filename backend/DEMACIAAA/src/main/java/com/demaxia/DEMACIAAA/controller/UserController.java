package com.demaxia.DEMACIAAA.controller;

import com.demaxia.DEMACIAAA.dto.Request.ApiResponse;
import com.demaxia.DEMACIAAA.dto.Request.UserCreationRequest;
import com.demaxia.DEMACIAAA.dto.Request.UserUpdateRequest;
import com.demaxia.DEMACIAAA.dto.response.UserReponse;
import com.demaxia.DEMACIAAA.entity.User;
import com.demaxia.DEMACIAAA.service.UserService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "http://localhost:3001")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping()
    public ResponseEntity<ApiResponse<User>> createUser(@RequestBody @Valid UserCreationRequest request) {
        ApiResponse<User> apiResponse = new ApiResponse<>();
        apiResponse.setResult(userService.createUser(request));
        return ResponseEntity.ok(apiResponse);
    }

    @GetMapping
    public ResponseEntity<List<User>> getUsers() {
        return ResponseEntity.ok(userService.getUsers());
    }

    @GetMapping("/{userId}")
    public ResponseEntity<UserReponse> getUser(@PathVariable("userId") String userId) {
        return ResponseEntity.ok(userService.getUser(userId));
    }

    @GetMapping("/username/{username}")
    public ResponseEntity<UserReponse> getUserByUsername(@PathVariable("username") String username) {
        return ResponseEntity.ok(userService.getUserByUsername(username));
    }

    @PutMapping("/{userId}")
    public ResponseEntity<UserReponse> updateUser(@PathVariable String userId, @RequestBody UserUpdateRequest request) {
        return ResponseEntity.ok(userService.updateUser(userId, request));
    }

    @DeleteMapping("/{userId}")
    public ResponseEntity<String> deleteUser(@PathVariable String userId) {
        userService.deleteUser(userId);
        return ResponseEntity.ok("User with ID " + userId + " has been successfully deleted.");
    }
}
