package com.toyreactjava.quartz;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Service
@Slf4j
public class JobService {

    public void hello() {
       log.info("Hello World!");
    }
}
