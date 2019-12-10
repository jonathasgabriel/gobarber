# gobarber-backend
A complete application for scheduling and managing beauty services

This backend is implemented in  **Node.js** and provides a REST API for the features available in GoBarber. The frontend reactjs client consumig this API is available at [gobarber-frontend](https://github.com/jonathasgabriel/gobarber-frontend) and is used by providers only. The react-native mobile application is used by customers and is available at [gobarber-mobile](https://github.com/jonathasgabriel/gobarber-mobile).

## features
- User creation/edition (customers and providers)
- User authentication (JWT token)
- Appointments for beauty service (CRUD)
- Notifications for providers
- Email sending for cancelled appointments (providers)
- Schedule listing for providers
- Available time slot listing
- File upload for users

## some of the leveraged techs/libs/tools
- Nodemon / Sucrase
- ESLint, Prettier, EditorConfig
- Docker
- Sequelize
- Express
- Nodemailer
- Yup
- Bee-queue jobs
- Postgres
- Mongo db
- Redis
- Express-brute
- Express-rate-limit
- Bcript
- Sentry

## how to run

- You need to have running instances of mongodb, postgres and redis (optional for mailing customers). Below docker commands will get your instances up and running from scratch (you must have [docker](https://docs.docker.com/install/) installed on your machine):
    - docker run --name postgres-database-dev -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres:11
    - docker run --name mongo-database-dev -p 27017:27017 -d -t mongo
    - docker run --name redis-database-dev -p 6379:6379 -d -t redis:alpine
- Please configure the `.env.example` file in the root directory with your corresponding information and rename it to `.env`
- Run `yarn sequelize db:migrate` in the root directory to run database migrations
- In the root directory, run `yarn` to resolve node packages and then `yarn dev` to start the application (open a new terminal window in the root directory and run `yarn queue` in parallel to start the mailing queue)




