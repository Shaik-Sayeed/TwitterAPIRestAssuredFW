package com.twitter.util;

public enum APIEndpoints 
{
    PostTweet("/statuses/update.json"),
    GetTweet("/statuses/show.json"),
    DeleteTweet("/statuses/destroy/{id}.json"),
    SearchTweet("/search/tweets.json");
    
	private String endpoint;
    APIEndpoints(String endpoint)
    {
    	this.endpoint=endpoint;
    }
    
    public String getEndpoint()
    {
    	return endpoint;
    }
    
}
