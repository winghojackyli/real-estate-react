I understand. Here's the revised README.md template without JWT-based Authentication:

---

# Real Estate MERN Stack Web App

Welcome to the Real Estate MERN (MongoDB, Express, React, Node.js) Stack Web App! This application allows users to manage rental listings and user accounts. It is built using the MERN stack along with additional technologies like Redux Toolkit, Bootstrap, and bcryptjs for password hashing.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Features](#features)
  - [User Authentication](#user-authentication)
  - [CRUD Operations](#crud-operations)
  - [News Updates](#news-updates)
- [Technologies Used](#technologies-used)
- [Getting Help](#getting-help)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) and npm (Node Package Manager)
- [MongoDB](https://www.mongodb.com/)

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/winghojackyli/real-estate-react.git
   ```

2. Navigate to the project directory:

   ```sh
   cd real-estate-react
   ```

3. Install server and client dependencies:

   ```sh
   cd backend
   npm install
   cd real-property-app
   npm install
   ```

4. Configure environment variables:

   Create a `.env` file in the backend directory with the following variable:

   ```env
   MONGO_URL=your_mongodb_connection_uri
   ```

   Create a `.env` file in the real-property-app directory with the following variable:

   ```env
   REACT_APP_NEWS_API_KEY=your_new_api_key
   ```

   News API key can be obtained form https://newsdata.io.

5. Run the application:

   ```sh
   cd backend
   npm start
   cd real-property-app
   npm start
   ```

The application will be accessible at `http://localhost:3000`.

## Features

### User Authentication

- **Registration**: Users can create accounts with their name, email, and password. Passwords are securely hashed using bcryptjs.
- **Login**: Registered users can log in using their email and password.

### CRUD Operations

- **Rental Listings**: Authenticated users can perform CRUD (Create, Read, Update, Delete) operations on rental listings.
- **User Profiles**: Users can view and update their profiles.

### News Updates

- **News API Integration**: The application fetches news updates from the [News API](https://newsdata.io) to provide users with the latest news articles related to real estate.

## Technologies Used

- **MongoDB**: Database system used to store user data and rental listings.
- **Express.js**: Backend framework for handling HTTP requests and routes.
- **React**: Frontend library used to build user interfaces.
- **Node.js**: Server environment for running JavaScript on the server side.
- **Redux Toolkit**: State management library for managing application state.
- **Bootstrap**: CSS framework for responsive and visually appealing designs.
- **bcryptjs**: Library for hashing passwords before storing them in the database.

## Getting Help

If you encounter issues or need assistance, feel free to [create an issue](https://github.com/winghojackyli/real-estate-react/issues) in the GitHub repository.

### Admin Account Credentials

#### Username: admin@test.com

#### Password: 12345
