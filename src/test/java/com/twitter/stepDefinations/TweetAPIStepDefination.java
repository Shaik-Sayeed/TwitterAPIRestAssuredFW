package com.twitter.stepDefinations;

import com.twitter.base.BaseTest;
import com.twitter.util.APIEndpoints;
import com.twitter.util.CommonMethods;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import static io.restassured.RestAssured.*;
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

public class TweetAPIStepDefination extends BaseTest
{
	RequestSpecification reqSpec;
	Response response;
	CommonMethods cm;
	
	//Constructor
	public TweetAPIStepDefination()
	{
		//Calling setUp method of BaseTest class to initialize RequestSpecBuilder and ResponseSpecBuilder
		 setUp();
	}
	
	@Given("Post Tweet Payload with a {string} message")
	public void post_Tweet_with_a_message(String tweet)
	{
	reqSpec=given()
			      .spec(requestSpec)
			      .queryParam("status",tweet);
	}

	@When("User sends {string} API request with {string} http method")
	public void user_sends_API_request_with_http_method(String requestName, String httpMethod)
	{
		APIEndpoints endpoint=APIEndpoints.valueOf(requestName);
		String endpointName=endpoint.getEndpoint();
		if(httpMethod.equalsIgnoreCase("POST"))
		{
		response= reqSpec.when()
		                       .post(endpointName);
		}
		else if(httpMethod.equalsIgnoreCase("GET"))
		{
			response= reqSpec.when()
                                    .get(endpointName);
		}
		cm=new CommonMethods(response.asString());                        
	}

	@Then("Status code of response is {int}")
	public void status_code_of_response_is(int statusCode)
	{
	    assertEquals(statusCode,response.getStatusCode());	
	}

	@Then("Status line of response is {string}")
	public void status_line_of_response_is(String statusLine)
	{
		assertEquals(statusLine,response.getStatusLine());	
	}
	
	@Then("{string} in response body matches with {string}")
	public void in_response_body_matches_with(String key,String value)
	{
		 
		assertEquals(cm.getStringValue(key),value);	
	}
	
	@Then("{string} in response body is not null or empty")
	public void in_response_body_is_not_null_or_empty(String key)
	{
		assertTrue(cm.isNullOrEmpty(key));	
	}
	
	@Given("Get Tweet Payload with TweetId for {string}")
	public void get_Tweet_Payload_with_TweetId_for(String tweetMsg)
	{
         //Getting the tweet Id
	      post_Tweet_with_a_message(tweetMsg);
	      user_sends_API_request_with_http_method("PostTweet","POST");
		
		//Getting tweet Id from the response
        String tweetId=cm.getStringValue("id");
        
        //Constructing the Get Tweet API Payload
		reqSpec=given()
				       .spec(requestSpec)
				       .queryParam("id", tweetId);
	}
	
	@Given("Delete Tweet Payload with TweetId for {string}")
	public void delete_Tweet_Payload_with_TweetId_for(String tweetMsg) 
	{
		 //Getting the tweet Id
	      post_Tweet_with_a_message(tweetMsg);
	      user_sends_API_request_with_http_method("PostTweet","POST");
		
		//Getting tweet Id from the response
        String tweetId=cm.getStringValue("id");
        
        //Constructing the Delete Tweet API Payload
		reqSpec=given()
				       .spec(requestSpec)
				       .pathParam("id",tweetId);
	}
	
	@Given("Search Tweet Payload with {string}")
	public void search_Tweet_Payload_with(String searchKeyword)
	{
        //Constructing the Search Tweet API Payload
		reqSpec=given()
				       .spec(requestSpec)
				       .queryParam("q",searchKeyword);
	}
	
}
