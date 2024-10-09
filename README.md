# User Management API

This project provides a RESTful API for managing users, including creating, retrieving, updating, and deleting user records. It is built using Node.js with Express, and it follows a well-organized folder structure to maintain separation of concerns.

## API Endpoints

The following API routes are available for user management:

- **GET** `/api/v1/users`  
  Retrieves a list of all users.

- **POST** `/api/v1/users`  
  Creates a new user.

- **GET** `/api/v1/users/:id`  
  Retrieves a single user by ID.

- **PUT** `/api/v1/users/:id`  
  Updates an existing user by ID.

- **DELETE** `/api/v1/users/:id`  
  Deletes a user by ID.

## Project Structure

project-root/
│
├── src/
│   ├── config/
│   │   ├── database.js        # Database configuration and connection
│   │   └── server.js          # Server configuration
│   │
│   ├── controllers/
│   │   └── userController.js  # Handles requests, responses, and API logic for users
│   │
│   ├── middleware/
│   │   ├── errorHandler.js    # Global error handler middleware
│   │   └── validators.js      # Validation logic for incoming data
│   │
│   ├── models/
│   │   └── userModel.js       # Mongoose/ORM model for User schema
│   │
│   ├── routes/
│   │   ├── index.js           # Main route entry point
│   │   └── userRoutes.js      # Routes related to user operations
│   │
│   ├── services/
│   │   └── userService.js     # Business logic for user operations
│   │
│   └── app.js                 # Main application entry point
│
├── .env                       # Environment variables (e.g., database credentials)
├── .gitignore                 # Files to be ignored by Git
└── package.json               # Project dependencies and scripts
