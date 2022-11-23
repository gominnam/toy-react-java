package com.toyreactjava.api.services;

import com.toyreactjava.api.common.MailHandler;
import com.toyreactjava.api.model.MailDto;
import lombok.AllArgsConstructor;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import java.util.concurrent.ThreadLocalRandom;

@Service
@AllArgsConstructor
public class MailService {

    private JavaMailSender javaMailSender;

    public void mailSend(MailDto mailDto){
        try {
            MailHandler mailHandler = new MailHandler(javaMailSender);
            mailHandler.setTo(mailDto.getEmail());
            mailHandler.setSubject("안녕하세요. REVOLUTION 인증메일입니다.");
            String htmlContent = "<p>" + ThreadLocalRandom.current().nextInt(100000, 1000000) + "<p> <img src='cid:sample-img'>";
            mailHandler.setText(htmlContent, true);
            //mailHandler.setAttach(mailDto.getFile().getOriginalFilename(), mailDto.getFile());
            //mailHandler.setInline("sample-img", mailDto.getFile());
            mailHandler.send();
        }
        catch (Exception e){
            e.printStackTrace();
        }

//        SimpleMailMessage message = new SimpleMailMessage();
//        message.setTo(mailDto.getEmail());
//        message.setSubject("제목");
//        message.setText("text");
//        javaMailSender.send(message);
    }
}
