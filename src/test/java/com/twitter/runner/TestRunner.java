package com.twitter.runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;



@RunWith(Cucumber.class)
@CucumberOptions( features="src/test/java/com/twitter/features",
                  glue=   {"com.twitter.stepDefinations"}, 
                  plugin= {"pretty","html:target/cucumber-html-report","json:target/cucumber.json"}
		        )

public class TestRunner 
{

}
