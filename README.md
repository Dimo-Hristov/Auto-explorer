# Car Trading Platform - Project Documentation

## Overview

This document provides a comprehensive overview of the Car Trading Platform project, detailing its purpose, features, architecture, and essential components.

## Project Description

**Car Trading Platform - Discover, Trade, and Share Cars**

**Explore Section:** Immerse yourself in the world of cars, where users can explore and discover a variety of vehicles. Whether you're interested in buying, selling, or just browsing, the platform offers a diverse range of cars for automotive enthusiasts.

**Contribute Your Cars:** As a registered user, you have the opportunity to share your own cars with the community. Whether you want to showcase your collection, sell a vehicle, or explore cars liked by others, the platform provides a hub for car enthusiasts.

**Categorized Sections:** Seamlessly navigate between Liked Cars and Uploaded Cars sections. Discover cars you've liked or explore the ones you've uploaded to the platform.

**User-Generated Content:** Experience the automotive world through the eyes of real users, ensuring an authentic and valuable platform for car trading.

**Easy Contribution:** Adding a car is simple – upload images, provide details, and engage with a community passionate about automobiles.

## Project Architecture

The Car Trading Platform is built using React and Node.js. The application architecture comprises various components and services working together to create a dynamic and engaging platform.

## Custom Hooks

1. **useForm Custom Hook:**

Reusability: The useForm hook encapsulates form state management, making it easily reusable across different components. This promotes a clean and modular code structure.

Error Handling: Integration with the ErrorContext for error message handling demonstrates an effective way to manage and display form-related errors to users.

Dynamic Form Handling: The hook efficiently handles dynamic form input changes, making it suitable for various forms with different structures.

Submission Handling: The onSubmit function ensures that form submission is conditioned on the completeness of the form, providing a user-friendly experience by preventing submission with missing properties.

2. **useFormValidate Custom Hook:**

Dynamic Validators: The ability to dynamically select validators based on the formType enhances the flexibility of the hook. This allows you to reuse the same hook for different forms with distinct validation requirements.

Real-time Validation: The hook performs real-time validation as users interact with the form. This ensures immediate feedback on form validity, contributing to a smoother user experience.

State Management: The hook effectively manages and updates the form's error state, keeping it in sync with the form values. The use of useEffect reflects a well-thought-out approach to handling state changes.

Overall Form Validity: The isFormValid state provides a convenient way to track the overall validity of the form, facilitating conditional rendering or interaction based on the form's current state.

## Components

1. **Header Component:** Provides navigation links and user account options for seamless interaction with the platform.

2. **Footer Component:** Offers additional information and links for users, enhancing their overall experience.

3. **Profile Page Component:** Displays a user's liked and uploaded cars, providing a personalized view of their automotive journey.

4. **Catalog Item Component:** Represents a single car item, showcasing details and allowing users to explore individual vehicles.

5. **Register Page Component:** Facilitates user registration, allowing enthusiasts to join the platform and contribute to the community.

6. **Logout Component:** Enables users to log out, ensuring secure access control and account management.

7. **Publish Page Component:** Allows users to publish and share details about their cars with the community.

8. **Login Page Component:** Manages user authentication, providing a secure and streamlined login process.

9. **Add Destination Component:** Empowers users to contribute their unique travel experiences, enriching the platform with diverse destinations.

10. **Edit Destination Component:** Offers users the ability to modify and update details of destinations they've contributed, ensuring accurate and engaging information.

11. **Details Page Component:** Provides in-depth information about a specific destination, including images, descriptions, and user interactions.

12. **About Page Component:** Offers information about the platform and its purpose, enhancing user understanding.

13. **Contacts Page Component:** Provides contact details for users to reach out, fostering communication.

14. **Catalog Page Component:** Catalog Component: Displays a list of cars available for exploration, providing a comprehensive view of the available vehicles. It includes a filtration feature for easy browsing and narrowing down options based on user preferences.

## Services

1. **Auth Service:** Manages user authentication, registration, and logout functionality.
2. **Car Service:** Handles communication with the backend API to fetch, create, edit, and delete cars. Also, retrieves liked cars and updates car likes.
3. **Like Service:** Manages likes on cars, allowing users to express interest in specific vehicles.

## Routes

The Car Trading Platform utilizes React Router for efficient navigation:

2. **Guest routes:**

- `/`: Home page displaying a selection of uploaded cars and their likes.
- `/catalog`: Catalog page showcasing a list of cars available for exploration.
- `/login`: Login page where you can login if you have account.
- `/register`: Register page where you can register as a new user.
- `/about`: About us page.
- `/contac`: Contact us form.

2. **User routes:**

- `/catalog/:carId`: Details page providing in-depth information about a specific car.
- `/publish`: Publish page enabling users to contribute their cars to the platform.
- `/profile`: User profile page showcasing liked and uploaded cars.
- `/logout`: sign out from your account.

## Data Flow

Users interact with the application by exploring liked and uploaded cars, contributing new vehicles, and engaging with the community. Components communicate with relevant services to fetch or update data. Services interact with the backend API to retrieve car information and manage user authentication. The retrieved data is displayed in the components, allowing users to contribute new cars and engage with the automotive community.

## How to Run the App

1. **Download the Repository**
2. Navigate to the `server` directory and run `npm install` followed by `node server.js`
3. Navigate back to the root directory, then to the `client` directory, and run `npm install` followed by `npm start`

Now, you can explore and engage with the Car Trading Platform on [http://localhost:4200/](http://localhost:4200/).

**Link for server documentation:** [SoftUni Practice Server](https://github.com/softuni-practice-server/softuni-practice-server)
