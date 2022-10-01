package com.toyreactjava.api.controller;

import org.springframework.web.bind.annotation.*;

import java.sql.SQLException;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class HelloController {

    @ResponseBody
    @PostMapping (value="/login")
    public Map<String, Object> login(@RequestBody Map<String,Object> paramMap) throws SQLException, Exception{
        Map <String, Object> resultMap = new HashMap<String, Object>();

        if(paramMap.get("id").equals("kk") && paramMap.get("password").equals("1")) {
            resultMap.put("User", "login success");
        }else {
            resultMap.put("User", "login fault");
        }

        return resultMap;
    }
}
