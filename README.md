# Skeleton Node
Skeleton Node is a RESTful API framework build on top of Express.

## Requirements
- Node.js 10.16
- NPM 6.12
- PM2 4.1

## How to run this project
Clone the repo to your local folder

```bash
npm install
``` 
```bash
npm start
```
The process should start running on a PM2 instance.

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
    "synchronize": false, //set to true to create the tables based on the models
    "logging": false, //set to ture to display logging messages
    ...
  }
```





