package com.toyreactjava.api.repositories;

import com.toyreactjava.api.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
@Transactional(readOnly=true)
public interface UserRepository extends JpaRepository<User, Long> {

    @Query("SELECT u FROM User u WHERE u.userId = ?1")
    User getByUserId(String userId);

    @Query("SELECT u FROM User u WHERE u.userId = ?1 AND u.password = ?2")
    User login(String userId, String password);

}
