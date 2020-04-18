# TwitterAPIRestAssuredFW
Twitter API Automation using Rest Assured,Cucumber, Junit and Maven

The Twitter API allows you to access the features of Twitter without having to go through the website interface.
Twitter is an information network and communication mechanism that produces more than 200 million tweets a day. 
The Twitter platform offers access to that corpus of data, via our APIs.

Twitter API documentation is available on https://developer.twitter.com/en/docs/tweets/post-and-engage/overview.

Using Rest Assured java library I have automated some of the API endpoints.

## Features

* Implemented OAuth 1.0 for authorization of the API Requests.

* Implemented RequestSpecBuilder and ResponseSpecBuilder for passing/asserting common values across all API Requests.

* Implemented Serialization for constructing API Request Payload using POJO classes.

### Prerequisites

1.Twitter Developer Account

2.Java 8 or higher

3.Eclipse IDE with Natural Plugin installed

4.Maven 


## Getting Started

Step 1 : Create a twitter developer account.Link- developer.twitter.com/en/

Step 2 : Create an app to get Access Token and other secret keys(This will be used in API Requests).

Step 3 : 

Step 4 : Clone or download this repository.

Step 5 : Import it as a Maven Project in Eclipse IDE.

Step 6 : Open pom.xml file. If required edit it according to your requirements.

Step 7 : Click on Project>Maven>Update Project.

Step 8 : Open config.properties file present under src/main/java>com.jira.config package.

Step 9 : Provide your API base URI, Jira Username and Password and other details.Save the changes.

Step 10 : You can execute the testcases using the testng.xml file present under src/test/resources>TestRunner or maven commands.


## Built With

* Cucumber - BDD tool
* JUint - Unit Testing Framework
* Page Object Model - Design Pattern
* Maven - Build Automation and Dependency Management
* Rest Assured - Java library for RESTful APIs automation


## Author

* **Vasant Verma** -(https://github.com/vasantverma)



