
# TwitterAPIRestAssuredFW
Twitter API Automation using Rest Assured,Cucumber, Junit and Maven.

The Twitter API allows you to access the features of Twitter without having to go through the website interface.
Twitter is an information network and communication mechanism that produces more than 200 million tweets a day. 
The Twitter platform offers access to that corpus of data, via our APIs.

Twitter API documentation is available on https://developer.twitter.com/en/docs/tweets/post-and-engage/overview.

Using Rest Assured java library I have automated some of the API endpoints.

## Features

* Implemented OAuth 1.0 for authorization of the API Requests.

* Implemented RequestSpecBuilder and ResponseSpecBuilder for passing/asserting common values across all API Requests.

* Implemented testcases in BDD style.

### Prerequisites

1.Twitter Developer Account

2.Java 8 or higher

3.Eclipse IDE with Natural Plugin installed

4.Maven 


## Getting Started

Step 1 : Create a twitter developer account.Link- developer.twitter.com/en/

Step 2 : Create an app to get Access Token and other secret keys(This will be used in API Requests).

Step 3 : Clone or download this repository.

Step 4 : Import it as a Maven Project in Eclipse IDE.

Step 5 : Open pom.xml file. If required edit it according to your requirements.

Step 6 : Click on Project>Maven>Update Project.

Step 7 : Open config.properties file present under src/main/java>com.twitter.config package.

Step 8 : Provide your consumer key and other secret keys.Save the changes.

Step 9 : You can execute the testcases using the TestRunner.java class present under src/test/java>com.twitter.runner or using "mvn       verify" maven command.


## Built With

* Cucumber - BDD tool
* JUint - Unit Testing Framework
* Maven - Build Automation and Dependency Management
* Rest Assured - Java library for RESTful APIs automation
* Maven-Cucumber-Reporting- HTML reports generation library 


## Author

* **Vasant Verma** -(https://github.com/vasantverma)



