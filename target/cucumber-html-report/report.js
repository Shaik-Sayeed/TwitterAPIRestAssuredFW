$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/com/twitter/features/TweetAPI.feature");
formatter.feature({
  "name": "Tweet APIs",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Verify that Tweet is succesfully posted using PostTweetAPI",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@PostTweet"
    }
  ]
});
formatter.step({
  "name": "Post Tweet Payload with a \"\u003ctweet\u003e\" message",
  "keyword": "Given "
});
formatter.step({
  "name": "User sends \"PostTweet\" API request with \"POST\" http method",
  "keyword": "When "
});
formatter.step({
  "name": "Status code of response is 200",
  "keyword": "Then "
});
formatter.step({
  "name": "Status line of response is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.step({
  "name": "\"text\" in response body matches with \"\u003ctweet\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "\"id\" in response body is not null or empty",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "tweet"
      ]
    },
    {
      "cells": [
        "The most beautiful smile belongs to those who make others smile"
      ]
    },
    {
      "cells": [
        "Do the Good to Bad then Bad will do Good to you"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify that Tweet is succesfully posted using PostTweetAPI",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@PostTweet"
    }
  ]
});
formatter.step({
  "name": "Post Tweet Payload with a \"The most beautiful smile belongs to those who make others smile\" message",
  "keyword": "Given "
});
formatter.match({
  "location": "TweetAPIStepDefination.post_Tweet_with_a_message(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User sends \"PostTweet\" API request with \"POST\" http method",
  "keyword": "When "
});
formatter.match({
  "location": "TweetAPIStepDefination.user_sends_API_request_with_http_method(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Status code of response is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "TweetAPIStepDefination.status_code_of_response_is(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Status line of response is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.match({
  "location": "TweetAPIStepDefination.status_line_of_response_is(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"text\" in response body matches with \"The most beautiful smile belongs to those who make others smile\"",
  "keyword": "And "
});
formatter.match({
  "location": "TweetAPIStepDefination.in_response_body_matches_with(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"id\" in response body is not null or empty",
  "keyword": "And "
});
formatter.match({
  "location": "TweetAPIStepDefination.in_response_body_is_not_null_or_empty(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify that Tweet is succesfully posted using PostTweetAPI",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@PostTweet"
    }
  ]
});
formatter.step({
  "name": "Post Tweet Payload with a \"Do the Good to Bad then Bad will do Good to you\" message",
  "keyword": "Given "
});
formatter.match({
  "location": "TweetAPIStepDefination.post_Tweet_with_a_message(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User sends \"PostTweet\" API request with \"POST\" http method",
  "keyword": "When "
});
formatter.match({
  "location": "TweetAPIStepDefination.user_sends_API_request_with_http_method(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Status code of response is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "TweetAPIStepDefination.status_code_of_response_is(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Status line of response is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.match({
  "location": "TweetAPIStepDefination.status_line_of_response_is(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"text\" in response body matches with \"Do the Good to Bad then Bad will do Good to you\"",
  "keyword": "And "
});
formatter.match({
  "location": "TweetAPIStepDefination.in_response_body_matches_with(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"id\" in response body is not null or empty",
  "keyword": "And "
});
formatter.match({
  "location": "TweetAPIStepDefination.in_response_body_is_not_null_or_empty(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify that duplicate tweet is not posted using PostTweetAPI",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@PostTweet"
    }
  ]
});
formatter.step({
  "name": "Post Tweet Payload with a \"\u003ctweet\u003e\" message",
  "keyword": "Given "
});
formatter.step({
  "name": "User sends \"PostTweet\" API request with \"POST\" http method",
  "keyword": "When "
});
formatter.step({
  "name": "Status code of response is 403",
  "keyword": "Then "
});
formatter.step({
  "name": "Status line of response is \"HTTP/1.1 403 Forbidden\"",
  "keyword": "And "
});
formatter.step({
  "name": "\"errors[0].message\" in response body matches with \"Status is a duplicate.\"",
  "keyword": "And "
});
formatter.step({
  "name": "\"errors[0].code\" in response body matches with \"187\"",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "tweet"
      ]
    },
    {
      "cells": [
        "Do the Good to Bad then Bad will do Good to you"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify that duplicate tweet is not posted using PostTweetAPI",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@PostTweet"
    }
  ]
});
formatter.step({
  "name": "Post Tweet Payload with a \"Do the Good to Bad then Bad will do Good to you\" message",
  "keyword": "Given "
});
formatter.match({
  "location": "TweetAPIStepDefination.post_Tweet_with_a_message(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User sends \"PostTweet\" API request with \"POST\" http method",
  "keyword": "When "
});
formatter.match({
  "location": "TweetAPIStepDefination.user_sends_API_request_with_http_method(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Status code of response is 403",
  "keyword": "Then "
});
formatter.match({
  "location": "TweetAPIStepDefination.status_code_of_response_is(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Status line of response is \"HTTP/1.1 403 Forbidden\"",
  "keyword": "And "
});
formatter.match({
  "location": "TweetAPIStepDefination.status_line_of_response_is(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"errors[0].message\" in response body matches with \"Status is a duplicate.\"",
  "keyword": "And "
});
formatter.match({
  "location": "TweetAPIStepDefination.in_response_body_matches_with(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"errors[0].code\" in response body matches with \"187\"",
  "keyword": "And "
});
formatter.match({
  "location": "TweetAPIStepDefination.in_response_body_matches_with(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify that specified tweet is shown using GetTweetAPI",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@GetTweet"
    }
  ]
});
formatter.step({
  "name": "Get Tweet Payload with TweetId for \"\u003ctweet\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "User sends \"GetTweet\" API request with \"GET\" http method",
  "keyword": "When "
});
formatter.step({
  "name": "Status code of response is 200",
  "keyword": "Then "
});
formatter.step({
  "name": "Status line of response is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.step({
  "name": "\"text\" in response body matches with \"\u003ctweet\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "tweet"
      ]
    },
    {
      "cells": [
        "Even the worst days have an ending, and the best days have a beginning"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify that specified tweet is shown using GetTweetAPI",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@GetTweet"
    }
  ]
});
formatter.step({
  "name": "Get Tweet Payload with TweetId for \"Even the worst days have an ending, and the best days have a beginning\"",
  "keyword": "Given "
});
formatter.match({
  "location": "TweetAPIStepDefination.get_Tweet_Payload_with_TweetId_for(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User sends \"GetTweet\" API request with \"GET\" http method",
  "keyword": "When "
});
formatter.match({
  "location": "TweetAPIStepDefination.user_sends_API_request_with_http_method(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Status code of response is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "TweetAPIStepDefination.status_code_of_response_is(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Status line of response is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.match({
  "location": "TweetAPIStepDefination.status_line_of_response_is(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"text\" in response body matches with \"Even the worst days have an ending, and the best days have a beginning\"",
  "keyword": "And "
});
formatter.match({
  "location": "TweetAPIStepDefination.in_response_body_matches_with(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify that specified tweet is shown using DeleteTweetAPI",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@DeleteTweet"
    }
  ]
});
formatter.step({
  "name": "Delete Tweet Payload with TweetId for \"\u003ctweet\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "User sends \"DeleteTweet\" API request with \"POST\" http method",
  "keyword": "When "
});
formatter.step({
  "name": "Status code of response is 200",
  "keyword": "Then "
});
formatter.step({
  "name": "Status line of response is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.step({
  "name": "\"text\" in response body matches with \"\u003ctweet\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "tweet"
      ]
    },
    {
      "cells": [
        "Good companies never hesitate to help their employees #lockdown #DifficultTimes"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify that specified tweet is shown using DeleteTweetAPI",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@DeleteTweet"
    }
  ]
});
formatter.step({
  "name": "Delete Tweet Payload with TweetId for \"Good companies never hesitate to help their employees #lockdown #DifficultTimes\"",
  "keyword": "Given "
});
formatter.match({
  "location": "TweetAPIStepDefination.delete_Tweet_Payload_with_TweetId_for(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User sends \"DeleteTweet\" API request with \"POST\" http method",
  "keyword": "When "
});
formatter.match({
  "location": "TweetAPIStepDefination.user_sends_API_request_with_http_method(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Status code of response is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "TweetAPIStepDefination.status_code_of_response_is(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Status line of response is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.match({
  "location": "TweetAPIStepDefination.status_line_of_response_is(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"text\" in response body matches with \"Good companies never hesitate to help their employees #lockdown #DifficultTimes\"",
  "keyword": "And "
});
formatter.match({
  "location": "TweetAPIStepDefination.in_response_body_matches_with(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify that matching tweets are return using SearchTweetAPI",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SearchTweet"
    }
  ]
});
formatter.step({
  "name": "Search Tweet Payload with \"\u003csearchKeyword\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "User sends \"SearchTweet\" API request with \"GET\" http method",
  "keyword": "When "
});
formatter.step({
  "name": "Status code of response is 200",
  "keyword": "Then "
});
formatter.step({
  "name": "Status line of response is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.step({
  "name": "\"search_metadata.query\" in response body matches with \"\u003csearchKeyword\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "searchKeyword"
      ]
    },
    {
      "cells": [
        "COVID-19"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify that matching tweets are return using SearchTweetAPI",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SearchTweet"
    }
  ]
});
formatter.step({
  "name": "Search Tweet Payload with \"COVID-19\"",
  "keyword": "Given "
});
formatter.match({
  "location": "TweetAPIStepDefination.search_Tweet_Payload_with(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User sends \"SearchTweet\" API request with \"GET\" http method",
  "keyword": "When "
});
formatter.match({
  "location": "TweetAPIStepDefination.user_sends_API_request_with_http_method(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Status code of response is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "TweetAPIStepDefination.status_code_of_response_is(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Status line of response is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.match({
  "location": "TweetAPIStepDefination.status_line_of_response_is(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"search_metadata.query\" in response body matches with \"COVID-19\"",
  "keyword": "And "
});
formatter.match({
  "location": "TweetAPIStepDefination.in_response_body_matches_with(String,String)"
});
formatter.result({
  "status": "passed"
});
});