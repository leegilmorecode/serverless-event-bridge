# serverless-event-bridge

## Introduction

_How and why you should build your Serverless architectures to be event-driven first using Amazon EventBridge for resilience, and some of the pitfalls to think about._

This repo is associated to the article [Serverless Event-Driven Systems 🚀](/)

This article aims to cover why you should have an event-driven first mindset when building out your Serverless architectures, and why Amazon EventBridge should underpin them. We will also be covering some of the pitfalls that you can hit when working with an eventually consistent systems.

![image](./docs/images/header.png)

> This is a minimal set of code to demonstrate the points discussed in the article, so coding and architecture best practices have not been adhered too (inc unit testing)

## Getting started

**Note: This will incur costs in your AWS account on running the load tests which you should account for.**

To get the project up and running, in the root of the folder run `npm i` which will install all of the dependencies.

## Deploying the services

To deploy the services run the following command in the root folder: `npm run deploy:develop` (_or equivelant for the environment your working with_)

## Removing the services

To remove the services run the following command in the root folder: `npm run remove:develop` (_or equivelant for the environment your working with_)
