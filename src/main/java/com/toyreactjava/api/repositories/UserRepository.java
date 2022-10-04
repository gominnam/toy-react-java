package com.toyreactjava.api.repositories;

import com.toyreactjava.api.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserRepository extends JpaRepository<User, Long> {

    List<User> findByUserId(String userId);
    User save(User user);
}
