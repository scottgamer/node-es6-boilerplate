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

## Project folder structure
TODO...

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







