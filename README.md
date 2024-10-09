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

	•	config/: Contains configuration files such as the database connection and server settings.
	•	controllers/: Contains the logic for handling incoming requests and returning responses.
	•	middleware/: Contains custom middleware such as validators and error handling.
	•	models/: Defines the data schema for the User entity.
	•	routes/: Defines the API routes and ties them to the corresponding controller methods.
	•	services/: Contains business logic and services, such as database interactions.
	•	app.js: The main application file that ties everything together and starts the server.

