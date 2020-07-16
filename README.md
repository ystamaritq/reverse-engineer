# Reverse Engineering Code

## Description

A tutorial explaining _every_ file and its purpose.

## User Story

```
AS A developer

I WANT a walk-through of the codebase

SO THAT I can use it as a starting point for a new project
```

## Developing

This project is based on **MVC** (_model-view-control_) **design** that separates bussiness logics, UI design and user interaction.

<img src="./Assets/imgs/mvc.jpg" width = "300px">

---

## Key Files

#### Below is a summary of the key files for this project and their purpose:

- **package.json** - node package definition
- **server.js** - main application entry point
- **Develop/config** - _Configuration_ utilities that contains the project configuration.
- **Develop/models** - _Model_ utilities that represents the application core.
- **Develop/public** - _View_ utilities that displays the data.
- **Develop/routes** - _Controller_ utilities handles the input to our database.

<img src="./Assets/imgs/files.png" width = "300px">

#### Dependecies used by the project and for this project and their purpose:

<img src="./Assets/imgs/dev.png" width = "300px">

_**bcryptjs**_ Is used to obtain secure random numbers.

_**express**_ A web application framework for Node.js. It is designed for building web applications and APIs.

_**express_session**_ Every user of your API or website will be assigned a unique session, and this allows you to store the user state.

_**mysql2**_ A modern, simple and very fast MySQL library.

_**password**_ Is a simple server-side memorable password generator for Node.js.

_**passport-local**_ Lets the user authenticate using a username and password in your Node. js applications.

_**sequelize**_ Used since the beginning in order to automate the creation of every table in your database.

---
