package stepdefinitions;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

//import junit.framework.Assert;

public class loginstepdefinitions {

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
	
	//regular expression
	//\"(.*)\" (OR) \"([^\"]*)\"
	
	/*@Then("^user enters \"(.*)\" and \"(.*)\"$")
	public void user_enters_email_id_and_password(String username, String password)  {
	    driver.findElement(By.xpath("//*[@id=\"email\"]")).sendKeys(username);
	    driver.findElement(By.xpath("//*[@id=\"pass\"]")).sendKeys(password);
	    
	}*/
	
	@Then("^user enters \"(.*)\" and \"(.*)\" and \"(.*)\" and \"(.*)\"$")
	public void user_enters_firstname_lastname_email_password(String Firstname, String Lastname, String email, String password)  {
	    driver.findElement(By.xpath("//input[@type='text' and @name='firstname']")).sendKeys(Firstname);
	    driver.findElement(By.xpath("//input[@type='text' and @name='lastname']")).sendKeys(Lastname);
	    driver.findElement(By.xpath("//input[@type='text' and @name='reg_email__']")).sendKeys(email);
	    driver.findElement(By.xpath("//input[@type='password' and @name='reg_passwd__']")).sendKeys(password);
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
