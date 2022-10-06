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
        System.out.println("params : " + user);
        List<User> users2 = userService.getUsers();
        return users2;
    }

    @PostMapping (value="/login")
    public User login(@RequestBody User user) throws SQLException, Exception{
        System.out.println("params : " + user);
        return userService.getByUserId(user.getUserId());
    }
}
