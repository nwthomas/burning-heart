<h1 align="center"><img src="./assets/readme-images/readme-header.png" alt="Burning Heart repo banner" /></h1>
<h4 align="center">A charitable micro-donation app for people who like to give</h4>
<br>

# What is Burning Heart?

Too often in today's world, people desire to do the right thing but lack the time and resources necessary to feel like they're actually making a difference. It can be costly both in effort and money to feel like you have provided impact to those around you.

With `Burning Heart`, a micro-donation mobile application, the power to make quick, small donations to the charity of your choice is now in your hands. Written intentionally with both efficiency and simplicity of use in mind, users can instantly make a difference with small payments over time to not-for-profits around the world. Please enjoy this `Burning Heart`, and let yours give where it wants.

## Table of Contents

- [Getting Started](#getting-started)
- [Built With](#built-with)
- [Server Documentation](#server-documentation)
  - [Schemas and Data Modeling](#schemas-and-data-modeling)
  - [API Endpoints](#api-points-and-data-modeling)
- [Project Management](#project-management)
- [Author](#author)
- [Acknowledgements](#acknowledgements)

## Getting Started

(NOTE: `Burning Heart` is currently iOS-only. There are plans to create a web application, but you will need a Mac computer with XCode installed to turn the mobile `Burning Heart` client on. If you don't have one, I've prepared a `Snack` example link for you up above in the Github header for this repo.)

- Fork and clone (or just clone) this repository to your local machine
- Use the command `yarn` inside both the root directory and the client directories to install dependencies for the server and client, respectively
- Utilize the command `yarn server` inside the root directory to start up the Burning Heart back-end
- Execute the command `yarn start` inside the root directory to start up the server
- Make sure that Apple's XCode is installed, and then `cd` into the `client` directory and run the `react-native run-ios` command to start up the virtual iPhone environment
- Create a `.env` file in the root directory and make `PORT` and `JWT_SECRET` variables inside of it (e.g. `PORT = 8000`, `JWT_SECRET = Whatever you want.`)
- Enjoy!

## Built With

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

## Server Documentation

### Schemas and Data Modeling

Checkout the [DB Designer](https://www.dbdesigner.net/designer/schema/235466) modeling link for a visual representation of how this project's tables work.

### API Endpoints

## Project Management

- You can view the [Trello Board](https://trello.com/b/YWsebwOT/burning-heart) for this project to review past checkpoints and current aspects of the project timeline

## Author

- [Nathan Thomas](https://github.com/nwthomas)

## Acknowledgements

- Thanks to my family and close friends for always teaching me the value of giving back to others. I wouldn't have thought of this project idea if it weren't for you.
- Thanks to [Lambda School](https://lambdaschool.com/) for the phenomenal education I've received. You are the reason I can execute with code when I have an idea instead of stumbling around in the dark.

[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)
