package com.toyreactjava.api.controller;

import com.toyreactjava.api.model.MailDto;
import com.toyreactjava.api.services.MailService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/api")
@RequiredArgsConstructor
public class MailController {
    private final MailService mailService;

    @PostMapping("/mail")
    public void execMail(MailDto mailDto) {
        mailService.mailSend(mailDto);
    }

}
