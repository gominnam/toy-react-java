package com.toyreactjava.api.services;

import com.toyreactjava.api.model.User;
import com.toyreactjava.api.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Transactional
@Service("uerService")
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public List<User> getUsers() {
        return userRepository.findAll();
    }

    @Transactional
    public User getByUserId(String userId) {
        return userRepository.getByUserId(userId);
    }

    @Transactional
    public User login(User user) {
        return userRepository.login(user.getUserId(), user.getPassword());
    }

    @Transactional
    public User signup(User user) {
        return userRepository.login(user.getUserId(), user.getPassword());
    }
}
