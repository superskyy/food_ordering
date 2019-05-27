# Pinocchio Pizza

Pinocchio Pizza is a food-take-out-ordering application that serves both: the customer and the restaurant. It acts as an intermediary. When the customer submits the order they provide their phone number, restaurant receives the order as a SMS message. The restaurant sends a response to the customer also by SMS, which lets them know how long it will take until the order is ready for pickup. 

## Features
![home](docs/home html.png?raw=true "Home Page")
![index](docs/index html.png?raw=true "Index Page")

## Getting Started

1. Create the `.env` by using `.env.example` as a reference: `cp .env.example .env`
2. Update the .env file with your correct local information
3. Install dependencies: `npm i`
4. Fix to binaries for sass: `npm rebuild node-sass`
5. Run migrations: `npm run knex migrate:latest`
  - Check the migrations folder to see what gets created in the DB
6. Run the seed: `npm run knex seed:run`
  - Check the seeds file to see what gets seeded in the DB
7. Run the server: `npm run local`
8. Visit `http://localhost:8080/`

## Dependencies

- Node 5.10.x or above
- NPM 3.8.x or above
- Body Parser 1.15.x or above
- Dotenv 2.0.x or above
- EJS 2.4.x or above
- Express 4.13.x or above 
- Knex 0.11.x
- Knex Logger 0.1.x or above
- Morgan 1.7.x or above
- Node SASS Middleware 0.9.x or above
- pg 6.0.2 or above
- Twilio 3.31.x or above
- Nodemon 1.9.x or above
