package com.demaxia.DEMACIAAA.service;

import com.demaxia.DEMACIAAA.dto.Request.UserCreationRequest;
import com.demaxia.DEMACIAAA.dto.Request.UserUpdateRequest;
import com.demaxia.DEMACIAAA.dto.response.OrderResponse;
import com.demaxia.DEMACIAAA.dto.response.UserReponse;
import com.demaxia.DEMACIAAA.entity.Order;
import com.demaxia.DEMACIAAA.entity.User;
import com.demaxia.DEMACIAAA.exception.AppException;
import com.demaxia.DEMACIAAA.exception.ErrorCode;
import com.demaxia.DEMACIAAA.mapper.UserMapper;
import com.demaxia.DEMACIAAA.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private UserMapper userMapper;
    public User createUser(UserCreationRequest request){
        User user = userMapper.toUser(request);

        if(userRepository.existsByUsername(request.getUsername()))
            throw new AppException(ErrorCode.USER_EXISTED);

//        user.setUsername(request.getUsername());
//        user.setPassword(request.getPassword());
//        user.setFirstname(request.getFirstname());
//        user.setLastname(request.getLastname());
//        user.setDob(request.getDob());

        return userRepository.save(user);

    }

    public UserReponse updateUser(String userId, UserUpdateRequest request){
        User user = userRepository.findById(userId).orElseThrow(() -> new RuntimeException("User not found^^"));
        userMapper.updateUser(user, request);

//        user.setPassword(request.getPassword());
//        user.setFirstname(request.getFirstname());
//        user.setLastname(request.getLastname());
//        user.setDob(request.getDob());

        return userMapper.toUserResponse(userRepository.save(user));
    }

    public void deleteUser(String userId){
        userRepository.deleteById(userId);
    }

    public List<User> getUsers(){
        return userRepository.findAll();
    }

    public UserReponse getUser(String id){
        return userMapper.toUserResponse(userRepository.findById(id).orElseThrow(() -> new RuntimeException("User not found^^")));
    }
    public UserReponse getUserByUsername(String username) {
        return userMapper.toUserResponse(
                userRepository.findByUsername(username)
                        .orElseThrow(() -> new AppException(ErrorCode.USER_NOT_FOUND))
        );
    }
}