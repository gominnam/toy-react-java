package com.toyreactjava.api.controller;

import com.toyreactjava.api.common.ApiResponse;
import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@RestController
@RequestMapping("/api")
public class BoardController {

    @GetMapping(value="/real-time")
    public ApiResponse<HashMap<String, ArrayList<String>>> getSignalList() throws Exception{
        System.setProperty("webdriver.chrome.driver", "/Users/minjunko/application/chromedriver");
        WebDriver driver = new ChromeDriver();
        HashMap<String, ArrayList<String>> hm = new HashMap<>();
        ArrayList<String> hrefList = new ArrayList<>();
        ArrayList<String> titleList = new ArrayList<>();

        try {
            driver.navigate().to("https://www.signal.bz/");
            List<WebElement> elements = driver.findElements(By.className("rank-column"));

            for (WebElement element : elements) {
                List<WebElement> rankElements = element.findElements(By.tagName("div"));

                for(WebElement el : rankElements){
                    hrefList.add(el.findElement(By.tagName("a")).getAttribute("href"));
                    titleList.add(el.findElement(By.className("rank-text")).getText());
                    System.out.println("value = " + el.findElement(By.tagName("a")).getAttribute("href"));
                }
            }

            hm.put("title", titleList);
            hm.put("href", hrefList);

        } catch(Exception e){
            return new ApiResponse<>(ApiResponse.BAD_REQUEST, "request error", null);
        }
        finally {
            driver.quit();
        }

        return new ApiResponse<>(ApiResponse.OK, "naver real-time signal", hm);
    }

}
