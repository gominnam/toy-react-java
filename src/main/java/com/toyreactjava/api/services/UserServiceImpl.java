package com.toyreactjava.api.services;

import com.toyreactjava.api.model.User;
import com.toyreactjava.api.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service("uerService")
public class UserServiceImpl implements UserService{

    @Autowired
    private UserRepository userRepository;

    @Transactional(readOnly = true)
    public List<User> getUsers() {
        return userRepository.findAll();
    }

    @Override
    public List<User> find(String userId) {
        return userRepository.findByUserId(userId);
    }

    @Override
    public User save(User user) {
        userRepository.save(user);
        return user;
    }

}
