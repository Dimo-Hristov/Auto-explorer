Project Documentation

Overview
This document provides an overview of the car trading platform project, including its purpose, features, architecture, and key components.

Project Description
Car Trading Platform - Discover, Trade, and Share Cars

Explore Section: Immerse yourself in the world of cars, where users can explore and discover a variety of vehicles. Whether you're interested in buying, selling, or just browsing, the platform offers a diverse range of cars for automotive enthusiasts.

Contribute Your Cars: As a registered user, you have the opportunity to share your own cars with the community. Whether you want to showcase your collection, sell a vehicle, or explore cars liked by others, the platform provides a hub for car enthusiasts.

Categorized Sections: Seamlessly navigate between Liked Cars and Uploaded Cars sections. Discover cars you've liked or explore the ones you've uploaded to the platform.

User-Generated Content: Experience the automotive world through the eyes of real users, ensuring an authentic and valuable platform for car trading.

Easy Contribution: Adding a car is simple – upload images, provide details, and engage with a community passionate about automobiles.

Project Architecture
The car trading platform is built using React, and Node.js. The application architecture comprises various components and services working together to create a dynamic and engaging platform.

Components
Header Component: Provides navigation links and user account options for seamless interaction with the platform.
Footer Component: Offers additional information and links for users, enhancing their overall experience.
Profile Page Component: Displays a user's liked and uploaded cars, providing a personalized view of their automotive journey.
Catalog Item Component: Represents a single car item, showcasing details and allowing users to explore individual vehicles.
Register Page Component: Facilitates user registration, allowing enthusiasts to join the platform and contribute to the community.
Logout Component: Enables users to log out, ensuring secure access control and account management.
Publish Page Component: Allows users to publish and share details about their cars with the community.
Login Page Component: Manages user authentication, providing a secure and streamlined login process.
Error Handler Component: Handles and displays error messages, enhancing user experience and communication.
Services
Auth Service: Manages user authentication, registration, and logout functionality.
Car Service: Handles communication with the backend API to fetch, create, edit, and delete cars. Also, retrieves liked cars and updates car likes.
Like Service: Manages likes on cars, allowing users to express interest in specific vehicles.
Routes
The car trading platform utilizes React Router for efficient navigation:

/: Home page displaying a selection of liked and uploaded cars.
/catalog: Catalog page showcasing a list of cars available for exploration.
/catalog/:carId: Details page providing in-depth information about a specific car.
/publish: Publish page enabling users to contribute their cars to the platform.
/profile: User profile page showcasing liked and uploaded cars.
Data Flow
Users interact with the application by exploring liked and uploaded cars, contributing new vehicles, and engaging with the community. Components communicate with relevant services to fetch or update data. Services interact with the backend API to retrieve car information and manage user authentication. The retrieved data is displayed in the components, allowing users to contribute new cars and engage with the automotive community.

How to Run the App
Download the Repository
Navigate to the server directory and run npm install followed by node server.js
Navigate back to the root directory, then to the client directory, and run npm install followed by npm start
Now, you can explore and engage with the car trading platform on http://localhost:3000/.

Link for server documentation: https://github.com/softuni-practice-server/softuni-practice-server
