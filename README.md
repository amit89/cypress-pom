## About the project
An automation framework for testing webapplication using Cypress with Typescript

## Getting started
## Prerequisite
    -- NodeJs
    -- Allure-CLI
    -- Java8

## Install Node
    -- https://nodejs.org/en/download

## Install Allure-cli

    Win
        -- npm install -g allure-commandline --save-dev

    Mac
        -- brew install allure


## Setup project
Run the below command on terminal

    -- npm install


## Run the test case:

    -- npm run test:ui           -- (this will open the interative mode of cypress and run the ui tests only)
    -- npm run test:headless     -- (this will run the testcases in headless mode)
    -- npm run cypress:api       -- (this will run the api test cases only)

## Generate allure report need to run below two commands sequentially 
  
    -- npm run allure:report
    -- npm run allure:open
