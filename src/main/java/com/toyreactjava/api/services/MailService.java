package com.toyreactjava.api.services;

import com.toyreactjava.api.model.MailDto;
import lombok.AllArgsConstructor;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class MailService {

    private JavaMailSender javaMailSender;
    private static final String FROM_ADDRESS = "show2991@gmail.com";

    public void mailSend(MailDto mailDto){
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(mailDto.getAddress());
        message.setSubject(mailDto.getTitle());
        message.setText(mailDto.getMessage());
        javaMailSender.send(message);
    }
}
