# Mental Well-Being

[link to the deployed app](https://well-being-nine.vercel.app/)

## Project Overview

The Mental Well-Being website is a comprehensive platform designed to support and enhance mental health awareness and practices. It is built using the MERN stack, encompassing MongoDB, Express.js, React.js, and Node.js. The application offers a range of interactive features tailored to individuals seeking resources for mental well-being.The frontend of the app has been deployed using `Vercel`, and the backend has been deployed using `Render`.

### Key Features

- **User Authentication**: Users can register and log in securely, with credentials stored safely in the database.
- **Journaling**: A personal space for users to write, view, edit, and delete their journal entries, aiding in self-reflection and mental health tracking.
- **Meditation Techniques**: Detailed information on various meditation practices, including descriptions, related images, and resources like YouTube videos for guided sessions.
- **Panic Button**: An emergency feature offering instant calming instructions and stress-relief exercises, with a redirection option for further counseling or expert advice.
- **Mental Health Articles**: Access to informative articles about different mental health conditions, providing insights, guidance, and support.
- **Responsive Design**: The website is fully responsive, ensuring a seamless experience across different devices and screen sizes.

---

## Installation and Setup

### Prerequisites

- Node.js and npm (Node Package Manager) installed on your system.
- MongoDB (local installation or MongoDB Atlas for a cloud-based solution).
- A modern web browser.

---

### Installation Steps

1.  **Clone the Repository**:

```bash
git clone [repository URL]
```

2.  **Install Backend Dependencies**:  
    Navigate to the backend directory and install dependencies:

```bash
cd backend
npm install
```

3.  **Set Up Environment Variables**:  
    In the backend directory, create a `.env` file with the following content (update values accordingly):

```plaintext
MONGODB_URI=YourMongoDBConnectionString
JWT_SECRET=YourJWTSecretKey
```

4.  **Start the Backend Server**:

```bash
npm start
```

5.  **Install Frontend Dependencies**:  
    In a new terminal, navigate to the frontend directory and install dependencies:

```bash
cd frontend
npm install
```

6.  **Start the Frontend Application**:

```bash
npm start
```

7.  **Access the Application**:  
    Open a web browser and navigate to `http://localhost:3000`.

---

## Directory Structure Overview

### Backend (`/backend`)

- `/controllers`: Contains logic for handling API requests.
- `/models`: MongoDB models for user and journal data.
- `/routes`: Express routes for the API.
- `.env`: Environment variables for database connection and JWT.

### Frontend (`/frontend`)

- `/public`: Public assets and HTML entry point.
- `/src`:
  - `/components`: Reusable UI components (Navbar, Footer, etc.).
  - `/pages`: Components representing different pages.
  - `/assets`: Static files like images and styles.
  - `App.js`: Main application component with routing setup.

---

## Authentication and Security

The Mental Wellbeing App backend uses two important security mechanisms: **bcrypt** and **JWT (JSON Web Tokens)**.

### Bcrypt for Password Hashing

To ensure the security of user passwords, we employ bcrypt, a widely-used password hashing library. When a user registers, their password is hashed using bcrypt before being stored in the database. Bcrypt is known for its strength in protecting user passwords from being exposed, even if the database is compromised.

### JWT for Authentication

We use JWT for user authentication and authorization. JWT is a stateless, compact, and self-contained token format that can be easily transmitted between the client and server. Here's how it works in the Mental Wellbeing App:

- **User Registration**: After successful registration, a JWT is issued containing the user's ID and a secret key.
- **User Login**: When a user logs in with valid credentials, they receive a JWT that is stored on the client-side.
- **Securing Routes**: JWTs are used to secure routes and verify user identities. When a user accesses a protected route, the JWT is sent with the request. The server validates the JWT and grants access if it's valid.
- **Token Expiry**: JWTs have an expiration time to enhance security.

This combination of bcrypt for password security and JWT for authentication ensures the safety and integrity of user data in the Mental Wellbeing App.

---

## Good Programming Practices

- **Environment Variables**: Using `.env` for sensitive data ensures security and flexibility.
- **Responsive Design**: CSS and React techniques are employed for a seamless cross-device experience.
- **Modular and Reusable Components**: Enhances code maintainability and scalability.
- **RESTful API**: Clean and intuitive API endpoints for frontend-backend communication.
- **Data Validation and Security**: Robust validation and security practices including JWT and bcrypt.
- **Error Handling**: Comprehensive error handling for reliability and user feedback.

---

## Dependencies and Libraries

### Frontend

- **React.js**: For building the user interface.
- **React Router**: Managing application routes.
- **Axios**: Making HTTP requests to the backend.

### Backend

- **Express.js**: Web application framework.
- **Mongoose**: MongoDB object modeling.
- **jsonwebtoken**: Handling JWTs.
- **bcryptjs**: Password hashing.

---

## Conclusion

In conclusion, the "Mental Wellbeing App" is a comprehensive web application designed to promote mental health awareness and well-being. It offers users a wide range of features and functionalities to help them manage their mental health effectively. From the Panic Button for immediate assistance during distressing moments to guided meditations and informative articles on mental health conditions, the app aims to provide valuable resources and support.

The project follows good programming practices, including the use of environment variables to store sensitive information, responsive design for seamless user experiences on various devices, and a well-structured directory layout for maintainability.

We encourage users to explore the app, register to access personalized features, and take advantage of the meditation sessions, articles, and journaling capabilities to improve their mental well-being. We are committed to continuously enhancing and expanding the app's features to provide even more support and resources for mental health.

Thank you for using the "Mental Wellbeing App." We hope it makes a positive impact on your mental health journey.

**Stay mentally healthy, and take care!**
