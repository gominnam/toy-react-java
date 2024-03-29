package com.toyreactjava.quartz;

import com.toyreactjava.api.common.RealTimeSignalDTO;
import lombok.extern.slf4j.Slf4j;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@Slf4j
public class JobService {

    public static class RealTimeSignalData{
        public static List<RealTimeSignalDTO> realTimeSignalData = new ArrayList<>();

        public static List<RealTimeSignalDTO> getRealtimeSignalData(){
            return realTimeSignalData;
        }
    }

    //public static List<RealTimeSignalVO> realTimeSignalData = new ArrayList<>();

    public void getRealTimeSignal(){
        System.setProperty("webdriver.chrome.driver", "./chromedriver");
        ChromeOptions options = new ChromeOptions();
        options.addArguments("--remote-allow-origins=*");
        WebDriver driver = new ChromeDriver(options);
        List<RealTimeSignalDTO> realTimeData = new ArrayList<>();

        try {
            driver.navigate().to("https://www.signal.bz/");
            List<WebElement> elements = driver.findElements(By.className("rank-column"));

            for (WebElement element : elements) {
                List<WebElement> rankElements = element.findElements(By.tagName("div"));

                for(WebElement el : rankElements){
                    RealTimeSignalDTO rtg = new RealTimeSignalDTO();
                    rtg.setHref(el.findElement(By.tagName("a")).getAttribute("href"));
                    rtg.setTitle(el.findElement(By.className("rank-text")).getText());
                    realTimeData.add(rtg);
                }
            }

            RealTimeSignalData.realTimeSignalData = realTimeData;
        } catch(Exception e){
            log.error(e.getMessage());
        }
        finally {
            driver.quit();
        }
    }

}
