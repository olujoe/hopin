# hopin
Hopin's Test and Automation Challenge

## Task 1: Test Environment Setup ##
The aim of this task was to creat a public repository and push the screenshot taken at the start of the exercise please see Screenshot 2021-04-25 at 18.02.13.pg for details.

## Task 2: Create a test plan and run it mannually ##
Details of the test plan can be see 

## ***MAKE sure the API Server and UI Server are both running on seperate command lines*** ##
**Follow the TestEnvironment.md instructions to start the API Server and the UI** 

## Task 3: Create an automated API level test scenario ##
1) From the command line enter the following

        % pwd
    you should be on the **hopin**

2) Type in **cd api-tests** in the command line     

        % cd api-tests
    you will be in the api-tests folder

3) Type **npm install** on the command line to install the required libraries

        % npm install

4) Type **npm test** on the command line to start the test

        % npm test
5) Alternatively skip step 2 to 4 and run the following scripts on the command line

        % ./npm-install-api.sh && ./run-api-test.sh                

## Task 4: Create an automated UI level test scenario ##
1) From the command line enter the following

        % pwd

    you should be on the **hopin**

2) Type in **cd ui-tests** in the command line

        % cd ui-tests
    you will be in the **ui-tests** folder

3) Type **npm install** on the command line to install the required libraries

        % npm install

4) Type **npm test** on the command line to start the test

        % npm test

5) Alternatively skip step 2 to 4 and run the following scripts on the command line

        % ./npm-install-ui.sh && ./run-ui-test.sh        

## If you really just want to go make a cup of tea then come back to see all the test run this command
        % ./run-npm-install-all.sh && ./run-all-tests.sh

## UI Test solution explained
The test has leveraged testcafe-cucumber reuse code to help speedup solutions delivery
 
        with happy path & unhappy path mixed in on the same test feature file

The tests can easily be extended by specifying additional test scenarios in the **test_plan.feature** file as well as supplying new code in the **test_plan_steps.js** file.
