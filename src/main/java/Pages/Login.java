package Pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import Base.Testbase;

public class Login extends Testbase {
	//page factory - OR:
			/*@FindBy(xpath="//*[@id=\"gh-ug-flex\"]/a")
			WebElement registration;*/
			
			@FindBy(xpath="//input[@type='email' and @name='email']")
			WebElement username;
			
			/*@FindBy(xpath="//*[@id=\"lastname\"]")
			WebElement lastname;*/
			
			/*@FindBy(xpath="//*[@id=\"email\"]")
			WebElement emailid;*/
			
			@FindBy(xpath="//input[@type='password' and @name='pass']")
			WebElement password;
			
			/*@FindBy(xpath="//*[@id=\"showPASSWORD\"]/ul/li/span[1]/input")
			WebElement showpassword;*/
			
			@FindBy(xpath="//input[@type='submit' and @id='u_0_b']")
			WebElement loginbutton;
			

		    /*@FindBy(xpath="//*[@id='gh-ug']/a")
			WebElement signinclick;
			
			@FindBy(xpath="//*[@id='gh-logo']")
			WebElement ebaylogo;*/
			
			//Initializing the Page Objects:
			public Login() {
				PageFactory.initElements(driver, this);
				}
			
			//Actions
			/*public String validateloginpagetitle() {
				return driver.getTitle();
			}
			
			public boolean validateebaylogo() {
			return ebaylogo.isDisplayed();
				}*/
			
			/*public void clickregister() {
				registration.click();
				
				//return new Loginpage();
				}*/

			public void registration(String un, String pwd) {
				
				username.sendKeys(un);
				//lastname.sendKeys(ln);
				//emailid.sendKeys(email);
				password.sendKeys(pwd);
				//showpassword.click();
				loginbutton.click();
				
			}


}
