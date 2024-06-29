# User Management Backend

## Objective
Design and develop a user management backend system using Express.js and MongoDB, allowing users to create and login accounts.

## Requirements
- Implement a RESTful API using Express.js for handling user-related operations.
- Utilize MongoDB as the database for storing user information.
- Include functionality for user registration and user login.
- Ensure proper validation and error handling throughout the application.
- Develop clear and well-structured code with appropriate comments.
- Provide API documentation, including endpoints, request/response formats, and error handling.

## Folder Structure
    user-management-backend/
    ├── config/
    │ └── db.js
    ├── controllers/
    │ └── userController.js
    ├── models/
    │ └── userModel.js
    ├── routes/
    │ └── userRoutes.js
    ├── node_modules/
    ├── .env
    ├── app.js
    ├── index.js
    ├── package-lock.json
    └── package.json


## Setup Instructions
1. Clone the repository:
   ```sh
   git clone <repository_url>

2. Navigate to the project directory:
   ```sh
   cd user-management-backend

3. Install dependencies:
   ```sh
   npm install

4. Create a `.env` file in the root of the project with the following content:
   PORT=3000
   MONGO_URI=mongodb://localhost:27017/yourdbname
   JWT_SECRET=your_jwt_secret_key

5. Start the server:
   ```sh
   npm start


## API Documentation

## 1. User Registration
    Endpoint: /users/register
    Method: POST
    Request:
        {
        "name": "John Doe",
        "email": "johndoe@example.com",
        "password": "password123"
        }
    Response:
        {
        "success": true,
        "message": "User registered successfully",
        "token": "jwt_token_here"
        }

## 1. User login
    Endpoint: /users/login
    Method: POST
    Request:
        {
        "email": "johndoe@example.com",
        "password": "password123"
        }
    Response:
        {
        "success": true,
        "message": "User logged in successfully",
        "token": "jwt_token_here"
        }




