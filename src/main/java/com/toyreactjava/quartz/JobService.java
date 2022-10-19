package com.toyreactjava.quartz;

import com.toyreactjava.api.common.RealTimeSignalVO;
import lombok.extern.slf4j.Slf4j;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@Slf4j
public class JobService {

    public static List<RealTimeSignalVO> realTimeSignalData = new ArrayList<>();

    public void getRealTimeSignal(){
        System.setProperty("webdriver.chrome.driver", "/Users/minjunko/application/chromedriver");
        WebDriver driver = new ChromeDriver();
        List<RealTimeSignalVO> realTimeData = new ArrayList<>();

        try {
            driver.navigate().to("https://www.signal.bz/");
            List<WebElement> elements = driver.findElements(By.className("rank-column"));
            RealTimeSignalVO rtg = new RealTimeSignalVO();

            for (WebElement element : elements) {
                List<WebElement> rankElements = element.findElements(By.tagName("div"));

                for(WebElement el : rankElements){
                    rtg.setHref(el.findElement(By.tagName("a")).getAttribute("href"));
                    rtg.setTitle(el.findElement(By.className("rank-text")).getText());
                    realTimeData.add(rtg);

                    System.out.println("value = " + el.findElement(By.tagName("a")).getAttribute("href"));
                }
            }

            realTimeSignalData = realTimeData;
        } catch(Exception e){
            log.error(e.getMessage());
        }
        finally {
            driver.quit();
        }
    }

}
