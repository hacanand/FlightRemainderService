# Welcome to  FlightRemainderService
 This is a simple flight remainder service that send email remainder to the user about the flight details.And use message queue to send the email to the user.Use cron job to send the email to the user.

## Installation
1. Clone the repository
2. Run `npm install`
3. Create a `.env` file in the root directory and add the following environment variables
```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=root
PORT=3000

```
4. Run `npm start`
5. The server will start at `http://localhost:3000`

## Features
1. Email to the user about the flight details
2. Use message queue to send the email to the user
3. cron job to send the email to the user

## Scope for Improvement
1. Add more error handling
2. Add more validations
3. Add more tests
4. Add more features
5. Add more documentation
