package Runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		
		//features is path of the features file
		features = "C:\\Users\\sai\\eclipse-workspace\\FacebookBDD\\src\\main\\java\\Features\\Tags.feature" ,
		
		glue = {"stepdefinitions"}, //glue is path of the step definitions file
		
		plugin = {"html:target/cucumber-html-report", "json:target/cucumber-json-report.json", "junit:target/fbBDD.xml" },
		
		dryRun = false, //every time before executing we have to put dryRun = true because if we missed to write any
		                //feature in the step definition class and then we execute the test it will shows that you have 
		                //missed something
		
		monochrome = true, //display the console output in a proper readable format
		
		strict = true, //it will check if any step is not defined inside in step definition class
		
		tags = {"@Smoketest, ~@Regressiontest, ~@end2endtest"}
		)
public class TestRunner {
	
	

}
