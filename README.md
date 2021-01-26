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
3. Launch the application front-end in the command line with `nodemon server.js`
4. Nodemon will show what localhost the project is launched on (most likely http://localhost:3000/). Follow the link.

## Technologies:

- Bootstrap 5.0
- MySQL & Workbench
- Vanilla JS
- Heroku
- Node.js
- NPM
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



## Contributors:


### [![](https://github.com/sayler3.png?size=50)](https://github.com/sayler3) Sam Ayler
                                                      



[![](https://github.com/kaileesmith.png?size=50)](https://github.com/kaileesmith)
### Kailee Smith



[![](https://github.com/camRight.png?size=50)](https://github.com/camRight)
### Cameron Wright


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
