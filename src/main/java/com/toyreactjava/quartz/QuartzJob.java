package com.toyreactjava.quartz;

import org.quartz.Job;
import org.quartz.JobExecutionContext;
import org.quartz.JobExecutionException;
import org.springframework.beans.factory.annotation.Autowired;

public class QuartzJob implements Job {
    @Autowired
    private JobService service;

    @Override
    public void execute(JobExecutionContext jobExecutionContext) throws JobExecutionException {
        service.hello();
    }
}
