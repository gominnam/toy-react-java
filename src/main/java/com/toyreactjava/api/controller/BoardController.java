package com.toyreactjava.api.controller;

import com.toyreactjava.api.common.ApiResponse;
import com.toyreactjava.api.common.RealTimeSignalDTO;
import com.toyreactjava.quartz.JobService;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import static com.toyreactjava.quartz.JobService.RealTimeSignalData.realTimeSignalData;

@RestController
@RequestMapping("/api")
public class BoardController {

    List<RealTimeSignalDTO> rankData = new ArrayList<>();

    @GetMapping(value="/real-time")
    public ApiResponse<List<RealTimeSignalDTO>> getSignalList() throws Exception{
        try {
            rankData = JobService.RealTimeSignalData.getRealtimeSignalData();
            //todo : if quartz don't get real-time-data then do run scheduler
        } catch(Exception e){
            return new ApiResponse<>(ApiResponse.BAD_REQUEST, "request error", null);
        }

        return new ApiResponse<>(ApiResponse.OK, "naver real-time signal", rankData);
    }

}
