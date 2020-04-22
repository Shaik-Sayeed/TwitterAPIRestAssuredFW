package com.twitter.util;

import io.restassured.path.json.JsonPath;

public class CommonMethods 
{
	String resp;
	JsonPath js;
	
    public CommonMethods(String response)
    {
    	resp=response;
    }
    
    public String getStringValue(String key)
    {
    	js=new JsonPath(resp);
    	return js.getString(key);
    }
    
    public int getArraySize(String key)
    {
    	js=new JsonPath(resp);
    	return js.getInt(key+".size()");
    }
    
    public boolean isNullOrEmpty(String property)
    {
    	
    	if(getStringValue(property).isEmpty() || getStringValue(property)==null)
    	{
    		return false;
    	}
    	return true;
    }
}
