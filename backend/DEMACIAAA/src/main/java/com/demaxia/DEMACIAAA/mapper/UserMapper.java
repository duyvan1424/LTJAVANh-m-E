package com.demaxia.DEMACIAAA.mapper;

import com.demaxia.DEMACIAAA.dto.Request.UserCreationRequest;
import com.demaxia.DEMACIAAA.dto.Request.UserUpdateRequest;
import com.demaxia.DEMACIAAA.dto.response.UserReponse;
import com.demaxia.DEMACIAAA.entity.User;
import org.mapstruct.Mapper;
import org.mapstruct.MappingTarget;

@Mapper(componentModel = "spring")
public interface UserMapper {

    // Ánh xạ từ UserCreationRequest sang User, bao gồm trường role
    User toUser(UserCreationRequest request);

    // Ánh xạ từ User sang UserReponse
    UserReponse toUserResponse(User user);

    // Cập nhật User từ UserUpdateRequest, bao gồm trường role nếu có
    void updateUser(@MappingTarget User user, UserUpdateRequest request);
}
