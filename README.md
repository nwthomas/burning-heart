<h1 align="center"><img src="./assets/readme-images/readme-header-image.png" alt="Burning Heart repo banner" /></h1>
<h4 align="center">A micro-donation mobile and web app for people who like to give what they can, when they can.</h4>
<br>

![Burning Heart web client screenshot](./assets/readme-images/site-preview.png)

# WHAT IS BURNING HEART?

Too often in today's world, people desire to do the right thing but lack the time and resources necessary to feel like they're actually making a difference. It can be costly both in effort and money to feel like you have provided impact to those around you.

With `Burning Heart`, a micro-donation mobile application, the power to make quick, small donations to the charity of your choice is now in your hands. Written intentionally with both efficiency and simplicity of use in mind, users can instantly make a difference with small payments over time to not-for-profits around the world. Please enjoy this `Burning Heart`, and let yours give where it wants.

## TABLE OF CONTENTS

- [Getting Started](#getting-started)
- [Tech Stack](#tech-stack)
- [Server Documentation](#server-documentation)
  - [Schemas and Data Modeling](#schemas-and-data-modeling)
  - [Test Accounts](#test-accounts)
  - [Summary Table of API Endpoints](#summary-table-of-api-endpoints)
  - [API Endpoints Descriptions](#api-endpoints-descriptions)
- [Project Management](#project-management)
- [Author](#author)
- [Acknowledgements](#acknowledgements)

## GETTING STARTED

(NOTE: `Burning Heart` is currently iOS-only. There are plans to create a web application, but you will need a Mac computer with XCode installed to turn the mobile `Burning Heart` client on.)

- Fork and clone (or just clone) this repository to your local machine
- Use the command `yarn` inside both the root directory and the client directories to install dependencies for the server and client, respectively
- Utilize the command `yarn server` inside the root directory to start up the Burning Heart back-end
- Make sure that Apple's XCode is installed, and then `cd` into the `client` directory and run the `react-native run-ios` command to start up the virtual iPhone environment
- Create a `.env` file in the root directory and make `PORT` and `JWT_SECRET` variables inside of it (e.g. `PORT = 8000`, `JWT_SECRET = Whatever you want.`)
- Open the debugging pane your local browser by going to the XCode Simulator and using `command + D` to open dev tools
- Enjoy!

## TECH STACK

- [React Native](https://facebook.github.io/react-native/)
- [React Router Native](https://reacttraining.com/react-router/native/guides/quick-start)
- [React Hooks](https://reactjs.org/docs/hooks-intro.html)
- [Context API](https://reactjs.org/docs/context.html)
- [Styled Components](https://www.styled-components.com/)
- [Axios](https://www.npmjs.com/package/axios)
- [Express](https://expressjs.com/)
- [Knex](https://knexjs.org/)
- [SQLite3](https://www.sqlite.org/index.html)
- [CORS](https://github.com/expressjs/cors)
- [Helmet](https://helmetjs.github.io/)
- [Morgan](https://www.npmjs.com/package/morgan)
- [JSON Web Token](https://github.com/auth0/node-jsonwebtoken)
- [Bcrypt.js](https://www.npmjs.com/package/bcryptjs)
- [Stripe API](https://stripe.com/docs/api)

## SERVER DOCUMENTATION

### SCHEMAS AND DATA MODELING

Checkout this project's [DB Designer](https://www.dbdesigner.net/designer/schema/235466) modeling link for a visual representation of how this project's tables work.

`Accounts`

```
{
  "id": 2,                                  // Integer (primary key provided by server and autoincrements)
  "username": "admin",                      // String, required
  "password": "password",                   // String, required
  "firstName": "Nathan",                    // String
  "middleName": "Benjamin",                 // String
  "lastName": "Thomas",                     // String
  "email": "email@gmail.com"                // String, required,
  "phone": "(708) 432-1234"                 // String
  "type": "user"                            // String
  "charityId": 1                            // Integer, foreign key to charity table if user is associated
}
```

`Charities`

```
{
  "id": 3,                                  // Integer (primary key provided by server and autoincrements)
  "charityName": "Wounded Warriors",        // String, required
  "phone": 7078881298,                      // Integer, required
  "street1": "100 Street Way",              // String, required
  "street2": "P.O. Box 400",                // String
  "city": "San Francisco",                  // String, required
  "state": "CA",                            // String, required
  "zip": 94567                              // Integer, required
}
```

`Donations`

```
{
  "id": 1,                                  // Integer (primary key provided by server and autoincrements)
  "charityId": 4,                           // Integer, required (foreign key constraint to id column on charity table)
  "userId": 1,                              // Integer, required (foreign key constraint to id column on user table)
  "amount": 546                             // Integer, required
}
```

### TEST USER ACCOUNTS

`Accounts`

```
  username: "admin"
  password: "password"
```

### SUMMARY TABLE OF API ENDPOINTS

| Router    | Method | Endpoint                              | Description                                                                                                                                                                                          |
| --------- | ------ | ------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| auth      | POST   | /api/auth/register                    | Creates a new `account` profile using the information sent inside the `body` of the request and returns a message along with the new `account` and a JSON Web Token in the `body` of the response.   |
| auth      | POST   | /api/auth/login                       | Uses the credentials sent inside the `body` to authenticate the account. On successful login, returns a message with the `account` profile and a JSON Web Token token in the `body` of the response. |
| accounts  | GET    | /api/restricted/accounts              | Retrieves an array of `account` objects and returns a message with the array in the `body` of the response.                                                                                          |
| accounts  | GET    | /api/restricted/accounts/:id          | Retrieves a single `account` object and returns a message with the object inside the `body` of the response.                                                                                         |
| accounts  | PUT    | /api/restricted/accounts/:id          | Updates an `account` in the database using the information sent inside the `body` of the request and returns a message with the updated `account` profile.                                           |
| accounts  | DELETE | /api/restricted/accounts/:id          | Removes an `account` from the database using the `id` sent in the URL parameters of the response.                                                                                                    |
| charities | GET    | /api/restricted/charities             | Retrieves an array of `charities` objects and returns a message with the array in the `body` of the response.                                                                                        |
| charities | GET    | /api/restricted/charities/:id         | Retrieves a single `account` object and returns a message with the object inside the `body` of the response.                                                                                         |
| charities | POST   | /api/restricted/charities             | Creates a new `charity` in the database using the information sent inside the `body` of the request and returns a message along with the new `charity` profile.                                      |
| charities | PUT    | /api/restricted/charities/:id         | Updates a `charity` in the database using the information send inside the `body` of the request and returns a message with the updated `charity` profile.                                            |
| charities | DELETE | /api/restricted/charities/:id         | Removes a `charity` from the database using the `id` sent in the URL parameters of the response.                                                                                                     |
| donations | GET    | /api/restricted/donations             | Retrieves an array of `donations` objects and returns a message with the object inside the `body` of the response.                                                                                   |
| donations | GET    | /api/restricted/donations/:id         | Retrieves a single `donation` object and returns a message with the object inside the `body` of the response.                                                                                        |
| donations | GET    | /api/restricted/donations/account/:id | Retrieves an array of `donations` objects for a specified `account` by `id` and returns a message with the array inside the `body` of the response.                                                  |
| donations | GET    | /api/restricted/donations/charity/:id | Retrieves an array of `donations` objects for a specified `charity` by `id` and returns a message with the array inside the `body` of the response.                                                  |
| donations | POST   | /api/restricted/donations             | Creates a new `donation` in the database using the information sent inside the `body` of the request and returns a message along with the new `charity` profile.                                     |
| donations | PUT    | /api/restricted/donations/:id         | Updates a `donation` in the database using the information sent inside the `body` of the request and returns a new message with the updated `donation`.                                              |
| donations | DELETE | /api/restricted/donations/:id         | Removes a `donation` form the database using the `id` sent in the URL parameters of the response.                                                                                                    |
| data      | GET    | /api/restricted/data/donations/:id    | Retrieves an array of `month` objects specifying the `x` and `y` properties for the `account` profile specified by the `id` in the request parameters and returns it in the response.                |

### API ENDPOINTS

## PROJECT MANAGEMENT

- You can view the [Trello Board](https://trello.com/b/YWsebwOT/burning-heart) for this project to review past checkpoints and current aspects of the project timeline

## AUTHOR

- [Nathan Thomas](https://github.com/nwthomas)

## ACKNOWLEDGEMENTS

- Thanks to my family and close friends for always teaching me the value of giving back to others. I wouldn't have thought of this project idea if it weren't for you.
- Thanks to [Lambda School](https://lambdaschool.com/) for the phenomenal education I've received. You are the reason I can execute with code when I have an idea instead of stumbling around in the dark.

[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com) [![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com) [![forthebadge](https://forthebadge.com/images/badges/for-you.svg)](https://forthebadge.com)
