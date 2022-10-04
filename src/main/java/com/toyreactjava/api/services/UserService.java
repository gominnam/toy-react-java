package com.toyreactjava.api.services;

import com.toyreactjava.api.model.User;

import java.util.List;

public interface UserService {

    List<User> find(String userId);

    User save(User user);
}
