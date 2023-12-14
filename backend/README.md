# Mental Wellbeing App - Backend

Welcome to the Mental Wellbeing App backend repository! This backend server powers the Mental Wellbeing App, which is designed to promote mental wellness through various features such as user management, journaling, and more. Here's a guide to get you started:

## Table of Contents

- [Project Overview](#project-overview)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

The Mental Wellbeing App backend provides essential functionality to the app, including:

- User registration and authentication
- Handling journal entries
- Secure storage of user data and journal entries
- API endpoints for frontend communication
- Integration with MongoDB for data storage

## Installation

To run the backend of the app locally, follow these steps:

1. Clone this repository to your local machine.
   ```sh
   git clone <backend-repo-url>
   ```
2. Navigate to the project directory.
   ```sh
   cd mental-wellbeing-app-backend
   ```
3. Install the project dependencies.
   ```sh
   npm install
   ```
4. Start the server.
   ```sh
   npm start
   ```
5. The backend server will run on http://localhost:3001 by default.

## Usage

The backend is responsible for handling API requests from the frontend. It provides endpoints for user registration, authentication, journal entry creation, and more. You can integrate this backend with the frontend to build a complete Mental Wellbeing App.

## Features

- User Registration and Authentication
- Secure Storage of User Data and Journal Entries
- API Endpoints for Frontend Communication
- MongoDB Integration
- Error Handling and Validation

## API Endpoints

- `POST /api/users/register`: Register a new user.
- `POST /api/users/login`: Log in an existing user.
- `POST /api/journals`: Create a new journal entry.
- `GET /api/journals`: Get all journal entries for a user.
- `GET /api/journals/:id`: Get a specific journal entry by ID.
- `PUT /api/journals/:id`: Update a specific journal entry by ID.
- `DELETE /api/journals/:id`: Delete a specific journal entry by ID.
