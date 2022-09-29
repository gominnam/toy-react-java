package com.toyreactjava.api.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class HelloController {

    @ResponseBody
    @GetMapping(value="/hello")
    public String sayHello(@RequestParam(value = "myName", defaultValue = "World..?") String name){
        return String.format("Hello %s!", name);
    }
}
