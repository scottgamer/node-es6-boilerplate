# Skeleton Node
Skeleton Node is a RESTful API framework build on top of Express.

## Requirements
- node.js 10.16
- typescript 3.6
- npm 6.12
- pm2 4.1

These packages must be installed globally.

** Example: ```npm install typescript -g``` 

## How to run this project
1. Clone the repo to your local folder
1. Run ```npm install``` command
1. Run ```npm start``` command

The process should start running on a pm2 instance.

## Project structure

```
Project
|--src                              // typescript source code
|   |--config                       // configuration files
|   |   |--config.ts                // main configuration file
|   |--docs                         // place to store documentation
|   |   |--postman                  // place to store postman collections
|   |       |--pm_collection.json   // postman collection
|   |--http                         // place to store related http requests, controllers,...
|   |   |--controllers              // place to store controllers
|   |   |   |--authController.ts    // sample authentication controller
|   |   |   |--usersController.ts   // sample users controller
|   |   |--entities                 // place to store entities (a.k.a models)
|   |   |   |--User.ts              // sample user entity
|   |   |--middleware               // place to store related http middleware
|   |   |   |--jwt.ts               // sample jwt middleware
|   |   |   |--role.ts              // sample role validation middleware
|   |   |--migrations               // place to store migration scripts (seeders)
|   |   |   |--CreateAdminUser.ts   // sample migration script
|   |   |--processes                // place to store data manipulation processes
|   |   |   |--authProcess.ts       // sample authentication process
|   |   |--repositories
|   |   |   |--userRepository.ts    // sample script with functions to query DB
|   |   |--routes                   // place to store de-coupled routes for each controller
|   |   |   |--authRoutes.ts        // sample authentication routes
|   |   |   |--usersRoutes.ts       // sample users routes
|   |   |--services                 // place to store scripts related to external services
|   |   |   |--jsonPlaceholderService.ts  // sample external service
|   |   |--transformers             // place to store data transformers
|   |   |   |--errorTransformer.ts  // script to format error messages
|   |   |--validators               // place to store validation scripts
|   |       |--authValidator.ts     // script with functions to validate authentication
|   |       |--validator.ts         // sample validator script
|   |--middleware                   // place to store common express middleware
|   |   |--common.ts                // common http middleware
|   |   |--errorHandlers.ts         // sample http error handlers using express router
|   |   |--index.ts                 // entry point for middleware
|   |--utils                        // utilitarian scripts and functions
|   |   |--ErrorHandler.ts          // sample http response errors
|   |   |--httpErrors.ts            // sample Error classes
|   |   |--index.ts                 // entry point for utils
|   |   |--validator.ts             // sample validator script
|   |--routes.ts                    // unifies all routes to export to server.ts
|   |--server.ts                    // start point of application
|--.env                             // file with environment variables
|--.env.example                     // sample file with environment variables
|--.gitignore                       // sample .gitignore file
|--ormconfig.json                   // sample ORM configuration file
|--package-lock.json                // dependency lock file
|--package.json                     // sample script with tasks and dependencies
|--pm2.yaml                         // sample pm2 file with configuration parameters
|--tsconfig.json                    // typescript compiler configuration file
```

## Database configuration
### TypeORM
The project uses TypeORM as its relational mapper. It supports different SQL dialects like SQlite, MySQL, MariaDB, SQLServer.

Some of its functionality includes: 
- Synchronization
- Migrations
- Entities
- Repositories
- Relations
- Async transactions

Refer to the official docs to dive deeper: https://typeorm.io/

### Installation

Run ```npm install typeorm -g``` command.

This allows running commands from the TypeORM cli to create migrations.

### Configuration
To set the connection to the database modify the following parameters in ./ormconfig.json file:
```json
  {
    "type": "mysql",
    "host": "localhost",
    "port": 3306,
    "username": "your_username",
    "password": "your_password",
    "database": "your_database",
    "synchronize": false, 
    "logging": false,
    ...
  }
```
#### *Important:
The parameters ```synchronize``` and ```logging``` should only be set to ```true``` during development.

### Migrations
TypeORM allows running migration scripts to seed the databse with initial values.

If you need to create a new migration run the following command:

```bash
typeorm migration:create -n MigrationtName
```

This will save a time-stamped migration script in the /dist/http/migrations folder. Edit the file with suitable data.

To run the migrations run the following command: 

```bash
npm run migration:run
```







