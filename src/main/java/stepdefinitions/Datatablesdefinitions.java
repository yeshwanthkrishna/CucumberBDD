/*package stepdefinitions;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Datatablesdefinitions {
WebDriver driver;
	
	
	@Given("^User is at sign up page$")
	public void user_at_login_page() {
		
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\sai\\Downloads\\QA\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("https://www.facebook.com");
	}
	
	
	@When("^title is facebook$")
	public void title_is_facebook() {
		String title = driver.getTitle();
		System.out.println(title);
		
	}
	
	@Then("^user enters email and password$")
	public void user_enters_email_password(DataTable credentials) {
   List<List<String>> data = credentials.raw();
    driver.findElement(By.xpath("//input[@type='email' and @name='email']")).sendKeys(data.get(0).get(0));
    driver.findElement(By.xpath("//input[@type='password' and @name='pass']")).sendKeys(data.get(0).get(1));
}
	
	@Then("^user enters firstname and lastname and address and pwd$")
	public void user_enters_details(DataTable details) {
		List<List<String>> data1 = details.raw();
	driver.findElement(By.xpath("//input[@type='text' and @name='firstname']")).sendKeys(data1.get(0).get(0));
	driver.findElement(By.xpath("//input[@type='text' and @name='lastname']")).sendKeys(data1.get(0).get(1));
	driver.findElement(By.xpath("//input[@type='text' and @name='reg_email__']")).sendKeys(data1.get(0).get(2));
	driver.findElement(By.xpath("//input[@type='password' and @name='reg_passwd__']")).sendKeys(data1.get(0).get(3));
	
}
	@Then("^Select Birthday$")
	public void Select_Birthday()  {
	    driver.findElement(By.xpath("//*[@id=\"month\"]/option[3]")).click();
	    driver.findElement(By.xpath("//*[@id=\"day\"]/option[20]")).click();
	    driver.findElement(By.xpath("//*[@id=\"year\"]/option[24]")).click();
	}
	
	@Then("^guy opt for gender$")
	public void guy_opt_for_gender() {
		driver.findElement(By.xpath("//input[@type = 'radio' and @value = '2']")).click();
	}
	
	@Then("^user clicks signup button$")
	public void user_clicks_signup_button() {
		driver.findElement(By.name("websubmit")).click();
	}
	
	@Then("close the browser")
	public void close_browser() throws InterruptedException {
		Thread.sleep(2000);
		driver.quit();
		}
}
*/