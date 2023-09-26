## About the project
An automation framework for testing webapplication using Cypress with javascript

## Getting started
## Prerequisite
    -- NodeJs
    -- Allure-CLI
    -- Java8

Install Node
    -- https://nodejs.org/en/download

Win
    -- npm install -g allure-commandline --save-dev

Mac
    -- brew install allure

## Setup project
Hit the below command on terminal
    -- npm install

## Run the test case:
    -- npm run cypress:ui           -- (this will open the interative mode of cypress)
    -- npm run cypress:headless     -- (this will run the testcases in headless mode)
    -- npm run cypress:allure       -- this will run test cases in headless mode and generate allure report
    -- allure serve allure-results  -- after above command execution gets completed run this commnd on terminal it will open the allure report on your machine
