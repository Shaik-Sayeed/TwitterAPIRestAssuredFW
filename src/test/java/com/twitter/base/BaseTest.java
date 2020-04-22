package com.twitter.base;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.PrintStream;
import java.util.HashMap;
import java.util.Map;
import java.util.Properties;

import com.twitter.util.APIConstants;

import io.restassured.authentication.OAuthScheme;
import io.restassured.builder.RequestSpecBuilder;
import io.restassured.builder.ResponseSpecBuilder;
import io.restassured.filter.log.RequestLoggingFilter;
import io.restassured.filter.log.ResponseLoggingFilter;
import io.restassured.specification.RequestSpecification;
import io.restassured.specification.ResponseSpecification;

/**
 * This class is the Base class for all the test classes.
 * This contains common methods which are used in all the test classes.
 * This allows code-reusability. 
 * @author Vasant Varma
 *
 */
public class BaseTest 
{
	//Variable declaration
	public Properties prop;
	public static RequestSpecification requestSpec;
	public ResponseSpecification responseSpec;
	
	/**
	 * This method initializes config.properties file 
	 * This will is used to read the properties inside the config.properties file.
	 * @return the value of the specified property
	 */
    public String get_property(String key)
    {
    	try {
			FileInputStream file=new FileInputStream(APIConstants.CONFIG_FILE_PATH);
			prop=new Properties();
	    	prop.load(file);
		 } 
    	catch (FileNotFoundException e)
    	{
			System.out.println("Config file was not found");
			e.printStackTrace();
			
		} catch (IOException e) 
    	{
			System.out.println("Error occured while reading the Config file");
			e.printStackTrace();
		}
    	//Get the value of the specified property.
    	return prop.getProperty(key);
    }
    
    /**
     * This method is used to create RequestSpecBuilder and ResponseSpecBuilder.
     * RequestSpecBuilder contains common parameters which we need to pass to all the API request.Example -base URI,Authorization parameters,headers etc.
     * ResponeSpecBuilder contains common parameters which we need to assert/validate from all the API request.Example -status code,headers etc.
     */
    
    public void setUp()
    {
          
		
		//Creating RequestSpec Builder based on the auth_mode property in config.proeprties file.
		if(requestSpec==null)
		{
			//For Request and Response logging to a file
	    	  PrintStream logFile=null;
			try {
				logFile = new PrintStream(new FileOutputStream(APIConstants.API_LOG_FILE_PATH));
			    } 
			    catch (FileNotFoundException e) 
			    {
				e.printStackTrace();
			    }
		                   OAuthScheme oauthOne=new OAuthScheme();
		                   oauthOne.setConsumerKey(get_property("consumer_key"));
		                   oauthOne.setConsumerSecret(get_property("consumer_secret_key"));
		                   oauthOne.setAccessToken(get_property("access_token"));
		                   oauthOne.setSecretToken(get_property("access_token_secret"));
			               requestSpec=new RequestSpecBuilder()
    			                           .setBaseUri(get_property("baseURI"))
    			                           .setAuth(oauthOne)
    			                          .addFilter(RequestLoggingFilter.logRequestTo(logFile))  
    			                          .addFilter(ResponseLoggingFilter.logResponseTo(logFile))
    			                          .build();
		}
		//Creating ResponseSpec Builder.
	      Map<String,Object> headers=new HashMap<String,Object>();
	      headers.put("content-type","application/json;charset=utf-8");
	      headers.put("content-encoding","gzip");
	      
          responseSpec=new ResponseSpecBuilder()
        		          .expectHeaders(headers)
        		          .build();			    
    }
    
}
