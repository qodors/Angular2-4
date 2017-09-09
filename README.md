# Angular2/4 Demo

Here is a Basic Demo for Angular2/4 with Laravel5.2 Service for Book management.
We also tried to incorporate all basic requirement like Bootstrap Material Admin panal, Bootstrap modal, Datatables, Charts, Alerts etc.

# Technical Terms

This project is generated with angular-cli version 1.0.4

It also includes angular 4 features like Selectors, Controllers, Dependency Injection, Template Integration, Expression, Directives, Components, Routers, Input/Output Properties, Json Parsing using components, and most important Typescript and Unit Testing.

# Requirements
  - Angular v2+
  - angular-cli for angular2/4
  - ng server
  - Angular MonsterAdminTemplate for UI
  
# Instalation
```sh
$ git clone https://github.com/qodors/Angular2-4.git
$ cd Angular2-4
$ npm install
```

# Execute
Before Serve this project, following Service changes are require
Go to development environment and set your service urls
```
$ cd src
$ cd environments
$ open environment.ts
```
Set your service urls to **server** and **serverUrl** like
```
export const environment = {
  production: false,
  server: 'http://192.168.0.1:8989',
  serverUrl: 'http://192.168.0.1:8989/api/',
};
```
After instalation, go to your cloned project directory and run following command to start running Project
```
$ ng serve [--host your_ip] [--port port]
```
# Features
 - JWT Token Itegration
 - Template Integration
 - Charts 
 - Bootstrap Css and Functionalities

# Test
Basic Tests for all Services available to loading Data
```
$ ng test
```
### Development
Want to contribute? Great!
Contribute your codes and suggessions for better development