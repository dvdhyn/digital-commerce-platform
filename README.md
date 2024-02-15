# Digital Commerce Platform


## Table of Contents
* [User Story](#user-story)
* [Acceptance Criteria](#acceptance-criteria)
* [Process](#process)
* [Demonstration](#demonstration)

## User Story

```
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```


## Acceptance Criteria

```
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia Core for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
THEN I am able to successfully create, update, and delete data in my database
```

## Process

This week we were given starter code. This included a functioning Express.js API.

Programs used to handle queries / manage database
```
MySQL Workbench, MAMP, Node.js, Insomnia
```
npm package dependencies
```
dotenv - loads environment variables from a .env file
mysql2 - connects to SQL database through JavsScript
express - web application framework for Node.js
sequelize - Object-Relational Mapping (ORM) library for Node.js
```
Before running the script, install any dependencies with `npm install`.

Create a `.env` file inside the Develop root folder that contains this structure with your SQL credentials
```
DB_NAME='your_db' ('ecommerce_db' in this case)
DB_USER='your_username'
DB_PW='your_password'
```

Execute the queries found in `Develop/db/schema.sql` in MySQL Shell to initialize the `ecommerce_db`.

Run `npm run seed` to populate database with the already provided information.

To start the server, use the command `npm start`.


## Demonstration
https://app.screencastify.com/v3/watch/9IxVcARytCmm2Tw8Bjf5
