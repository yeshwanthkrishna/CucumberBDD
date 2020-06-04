package stepdefinitions;

import Base.Testbase;
import Pages.Login;
import Pages.signin;
import cucumber.api.java.en.Given;

public class Tagsdefinitions extends Testbase{
	Login log = new Login();
	
	
	@Given("^open browser$")
	public void open_browser() throws Throwable {
		Testbase.initialization();
	    
	}

	@Given("^check the details$")
	public void check_the_details() throws Throwable {
	
	}

	@Given("^enter credentials$")
	public void enter_credentials() {
	    
	}

	@Given("^enter correctly$")
	public void enter_correctly() throws Throwable {
	    
	}

	@Given("^register to facebook$")
	public void register_to_facebook() throws Throwable {
	    log.registration(prop.getProperty("username"), prop.getProperty("password"));
	}

	@Given("^check the spelling$")
	public void check_the_spelling() throws Throwable {
	    
	}

	@Given("^check gmail for updates$")
	public void check_gmail_for_updates() throws Throwable {
	    
	}

	@Given("^birthday selected$")
	public void birthday_selected() throws Throwable {
	    
	}


	

}
