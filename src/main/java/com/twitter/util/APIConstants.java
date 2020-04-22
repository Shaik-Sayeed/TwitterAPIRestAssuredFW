package com.twitter.util;

public class APIConstants 
{
     //File Path variables
	public static String CONFIG_FILE_PATH=System.getProperty("user.dir")+"\\src\\main\\java\\com\\twitter\\config\\config.properties";
	public static String API_LOG_FILE_PATH=System.getProperty("user.dir")+"\\APIExecutionLogs\\APILogs.txt";
	
	//API Response constants
    public static int SUCCESS_RESPONSE_CODE=200;
    public static String SUCCESS_STATUS_LINE="HTTP/1.1 200 OK";
    public static int FORBIDDEN_RESPONSE_CODE=403;
    public static String FORBIDDEN_STATUS_LINE="HTTP/1.1 403 Forbidden";
}
