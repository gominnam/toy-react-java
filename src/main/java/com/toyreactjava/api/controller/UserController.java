package com.toyreactjava.api.controller;

import com.toyreactjava.api.common.ApiResponse;
import com.toyreactjava.api.model.User;
import com.toyreactjava.api.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLException;
import java.util.List;

@RestController
@RequestMapping("/api")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping (value="/login")
    public ApiResponse<User> login(@RequestBody User user) throws SQLException, Exception{
        User loginUser = userService.login(user);

        if(loginUser == null){
            return new ApiResponse<>(ApiResponse.BAD_REQUEST, "invalid_user_info", null);
        }

        return new ApiResponse<>(ApiResponse.OK, "welcome_toy_world!", null);
    }
}
