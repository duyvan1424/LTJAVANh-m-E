package com.demaxia.DEMACIAAA.controller;

import com.demaxia.DEMACIAAA.dto.Request.ApiResponse;
import com.demaxia.DEMACIAAA.dto.Request.UserCreationRequest;
import com.demaxia.DEMACIAAA.dto.Request.UserUpdateRequest;
import com.demaxia.DEMACIAAA.dto.response.UserReponse;
import com.demaxia.DEMACIAAA.entity.User;
import com.demaxia.DEMACIAAA.service.UserService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "http://localhost:3001")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping()
    ApiResponse<User> createUser(@RequestBody @Valid UserCreationRequest request){
        ApiResponse<User> apiResponse = new ApiResponse<>();
        apiResponse.setResult(userService.createUser(request));
        return apiResponse;
    }

    @GetMapping
    List<User> getUsers(){
        return userService.getUsers();

    }
    @GetMapping("/{userId}")
    UserReponse getUser(@PathVariable("userId") String userId) {
        return userService.getUser(userId); // Gọi phương thức trong UserService để lấy thông tin người dùng theo userId
    }

    // Lấy thông tin người dùng theo username
    @GetMapping("/username/{username}")
    public UserReponse getUserByUsername(@PathVariable("username") String username) {
        return userService.getUserByUsername(username);
    }


    @PutMapping("/{userId}")
    UserReponse updateUser(@PathVariable String userId, @RequestBody UserUpdateRequest request){
        return userService.updateUser(userId, request);
    }

    @DeleteMapping("/{userId}")
    String deleteUser(@PathVariable String userId){
        userService.deleteUser(userId);
        return "user has been xoa r";
    }

}
