Feature: Tweet APIs

@PostTweet
Scenario Outline: Verify that Tweet is succesfully posted using PostTweetAPI 
    Given Post Tweet Payload with a "<tweet>" message
    When  User sends "PostTweet" API request with "POST" http method
    Then  Status code of response is 200
    And   Status line of response is "HTTP/1.1 200 OK"
    And   "text" in response body matches with "<tweet>" 
    And   "id" in response body is not null or empty
   
Examples:
          |tweet                                                          |
          |The most beautiful smile belongs to those who make others smile|
          |Do the Good to Bad then Bad will do Good to you                |
   
@PostTweet          
Scenario Outline: Verify that duplicate tweet is not posted using PostTweetAPI
    Given Post Tweet Payload with a "<tweet>" message
    When  User sends "PostTweet" API request with "POST" http method
    Then  Status code of response is 403
    And   Status line of response is "HTTP/1.1 403 Forbidden"
    And   "errors[0].message" in response body matches with "Status is a duplicate." 
    And   "errors[0].code" in response body matches with "187"           
 
Examples:
          |tweet                                          |
          |Do the Good to Bad then Bad will do Good to you| 
        
@GetTweet          
Scenario Outline: Verify that specified tweet is shown using GetTweetAPI
    Given Get Tweet Payload with TweetId for "<tweet>"
    When  User sends "GetTweet" API request with "GET" http method
    Then  Status code of response is 200
    And   Status line of response is "HTTP/1.1 200 OK"       
    And   "text" in response body matches with "<tweet>" 
Examples:
          |tweet                                                                  |
          |Even the worst days have an ending, and the best days have a beginning | 
     

@DeleteTweet    
Scenario Outline: Verify that specified tweet is shown using DeleteTweetAPI
    Given Delete Tweet Payload with TweetId for "<tweet>" 
    When  User sends "DeleteTweet" API request with "POST" http method
    Then  Status code of response is 200
    And   Status line of response is "HTTP/1.1 200 OK"   
    And   "text" in response body matches with "<tweet>"           

Examples:
          |tweet                                                                           |
          |Good companies never hesitate to help their employees #lockdown #DifficultTimes | 
              
@SearchTweet    
Scenario Outline: Verify that matching tweets are return using SearchTweetAPI
    Given Search Tweet Payload with "<searchKeyword>"
    When  User sends "SearchTweet" API request with "GET" http method
    Then  Status code of response is 200
    And   Status line of response is "HTTP/1.1 200 OK"  
    And   "search_metadata.query" in response body matches with "<searchKeyword>"
     
Examples:
          |searchKeyword  |                                                                 
          |COVID-19       |             