package com.twitter.base;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;

import com.twitter.util.APIConstants;

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
	public RequestSpecification requestSpec;
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
     * RequestSpecBuilder contains common parameters which we need to pass to all the API request.Example -base URI,headers etc.
     * ResponeSpecBuilder contains common parameters which we need to assert/validate from all the API request.Example -status code,headers etc.
     */
    public void setUp()
    {
              
    }
    
}
