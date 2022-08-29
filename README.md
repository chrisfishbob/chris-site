# [Chris's Corner](https://iamchrishsu.com)

<img src="https://github.com/chrisfishbob/chris-site/blob/main/blog.png?raw=true" width="400" height="250" align="right"/> 

## Introduction

This is my personal blog && profolio! The current version hosted [here](https://iamchrishsu.com) is the main branch. There are other branches, some of them are in-progress for future updates to the site, some of them are abandoned changes. Feel free to check it out, but main is should be the main reference.


## Running Instructions

To build the project and run it on your own machine:

### `npm ci`

Completes a clean install of the React project. This script will install everything you need to start the project.

### `npm start`

After the command executes, the app should be hosted at localhost:3000 \
The project can now be accessed on localhost:3000 like any other URL,

&nbsp;
## Commonly Asked Questions:

# What is being used to build this site?
The main infrastructure is entirely on AWS. 
* AWS Amplify - Serverless deployment with continuous deployment and auto-scaling
* AWS CloudFront - Content delivery network to reduce website load time
* AWS S3 - Storage for non-cached items in the site
* AWS Route 53 - Domain name registration
* AWS CloudWatch Logs - Site information logging (stores to S3)


# Is this hosted / on the internet?
Yes! This project is currently deployed on AWS. AWS Route 53 is used for domain name and hosted zones. AWS Amplify is used to deploy the website itself.


# Where can I see this?
[Right here!](https://iamchrishsu.com)



