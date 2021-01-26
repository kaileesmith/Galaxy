# Galaxy

Galaxy Planning is a full-stack application designed to make household planning easier. A user or users can keep track of what chores they each person is responsible for. All credentials are protected with encryption. A Sequelize ORM coupled with GET and POST enables server-side CRUD functionality.  

## Table of Contents

* [Installation](#installation)
* [Technologies](#technologies)
* [Standards](#standards)
* [Contributors](#contributors)

* [License](#license)
* [Contact](#contact)


## Installation

### How to launch on Local Host:

1. Install all dependencies by running `npm install` in your terminal (no arguments).
    - by default npm will install all modules listed as depencies in package.json.
    - if nodemon is not installed globally run npm install nodemon in the command line for this project.
2. Copy and Paste the schema into MySQL Workbench and run all code.
3. Launch the application in the command line with `nodemon server.js`
4. Nodemon will show what localhost the project is launched on. Follow the link.

## Technologies:

- Bootstrap 5.0
- MySQL & Workbench
- Vanilla JS
- Heroku
- NPM & NODE.js
    - express
    - dotenv
    - bcryptjs
    - mysql2
    - sequelize
    - passport
    - handlebars.js
    - nodemon

## Standards:

- Meets MVC Folder Structure Paradigm
/snyk/vulnerabilities/github/:camRight/:Galaxy


## Contributors:
- Sam
- Kailee 
- Cameron 

## License

### MIT License [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)



## Application Requirements
* Must use a Node and Express server
* Must use Handlebars.js as the template engine [apparently this is now optional]
* Must be backed by a MySQL database with a Sequelize ORM
* Must utilize both GET and POST routes for retrieving and adding new data
* Must be deployed using Heroku (with data)
* Must utilize at least one new library, package, or technology that we haven’t discussed
* Must have a polished front end/UI
* Must have a folder structure that meets the MVC paradigm
* Must meet good quality coding standards (indentation, scoping, naming)
* Must protect API keys in Node with environment variables
