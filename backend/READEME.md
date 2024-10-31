# Authentication API Documentation

## Overview

This document describes the authentication routes for the application, including user registration and login. Each route includes the request method, endpoint, request body, and response structure.

## Routes

### 1. Register a New User

- **Endpoint**: `/api/auth/register`
- **Method**: `POST`
- **Request Body**:

  ```json
  {
    "userName": "string",
    "email": "string",
    "password": "string"
  }
  ```

  - `userName`: The unique username for the user (required).
  - `email`: The unique email address for the user (required).
  - `password`: The password for the user account (required).

- **Response**:
  - **Success (201)**:
    ```json
    {
      "message": "User registered successfully!",
      "token": "string",
      "user": {
        "id": "string",
        "userName": "string",
        "email": "string",
        "role": "string"
      }
    }
    ```
  - **Error (400)**:
    ```json
    {
      "message": "User already exists"
    }
    ```
  - **Error (500)**:
    ```json
    {
      "message": "Error registering user",
      "error": "string"
    }
    ```

### 2. Login a User

- **Endpoint**: `/api/auth/login`
- **Method**: `POST`
- **Request Body**:

  ```json
  {
    "email": "string",
    "password": "string"
  }
  ```

  - `email`: The email address of the user (required).
  - `password`: The password for the user account (required).

- **Response**:
  - **Success (200)**:
    ```json
    {
      "token": "string",
      "user": {
        "id": "string",
        "userName": "string",
        "email": "string",
        "role": "string"
      }
    }
    ```
  - **Error (404)**:
    ```json
    {
      "message": "User not found"
    }
    ```
  - **Error (401)**:
    ```json
    {
      "message": "Invalid credentials"
    }
    ```
  - **Error (500)**:
    ```json
    {
      "message": "Error logging in",
      "error": "string"
    }
    ```

## Example Usage

### Registering a New User

```bash
curl -X POST http://localhost:3000/api/auth/register \
-H "Content-Type: application/json" \
-d '{
  "userName": "exampleUser",
  "email": "example@example.com",
  "password": "yourPassword"
}'
```
