package com.toyreactjava.api.controller;

import com.toyreactjava.api.model.User;
import com.toyreactjava.api.services.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLException;
import java.util.List;

@RestController
@RequestMapping("/api")
public class UserController {

    @Autowired
    private UserServiceImpl userService;

    @ResponseBody
    @GetMapping (value="/hello")
    public List<User> hello(@ModelAttribute("user") User user) throws SQLException, Exception{
        List<User> users = userService.find(user.getUserId());
        return users;
    }
}
