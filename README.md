# gobarber-backend
A complete application for scheduling and managing beauty services

This backend is implemented in  **Node.js** and provides a REST API for the features available in GoBarber. The frontend client consumig this API is available at [gobarber-frontend](https://github.com/jonathasgabriel/gobarber-frontend) and is intended for use by providers only. The mobile application is intended for use by customers and is **under construction**

## features
- User creation/edition (customers and providers)
- User authentication (JWT token)
- Appointments for beauty service (CRUD)
- Notifications for providers
- Email sending for cancelled appointments (providers)
- Schedule listing for providers
- Available time slot listing
- File upload for users

## how to run

- You need to have an instance of mongodb, postgres and redis(optional for mailing) running
- Please configure the `.env` file in the root directory with your access information
- In the root directory, run `yarn` and then `yarn dev` (`yarn queue` in parallel is optional for mailing)




