# User Management System

## Objective
This User Management System is a web application designed to handle user registration, login, and management. The application is built with a backend server using Node.js, Express, and MongoDB, and a frontend using HTML, CSS, and JavaScript.

## Requirements
- Implement a RESTful API using Express.js for handling user-related operations.
- Utilize MongoDB as the database for storing user information.
- Include functionality for user registration and user login.
- Ensure proper validation and error handling throughout the application.
- Develop clear and well-structured code with appropriate comments.
- Provide API documentation, including endpoints, request/response formats, and error handling.

## Prerequisites
  - Node.js
  - MongoDB

## Setup Instructions
1. Clone the repository:
   ```sh
   git clone <repository_url>

2. Navigate to the project directory:
   ```sh
   cd user-management-system

3. Install dependencies:
   ```sh
   npm install

4. Create a `.env` file in the root of the project with the following content:
   PORT=3000
   MONGO_URI=mongodb://localhost:27017/yourdbname
   JWT_SECRET=your_jwt_secret_key
   CLIENT_URL= request-origin

5. Start the server:
   ```sh
   npm start


## API Documentation

## 1. User Registration
    Endpoint: /api/users/register
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
    Endpoint: /api/users/login
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




