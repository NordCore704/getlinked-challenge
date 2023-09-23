# GetLinked Hackathon UI Challenge

This project is a UI challenge for the GetLinked Hackathon landing page. The landing page allows users to register via a form, with data sent to a backend API built using Next.js, Framer Motion, and Tailwind CSS.

## Project Overview

### Features

- User-friendly landing page design.
- Registration form with input validation.
- Smooth animations using Framer Motion.
- Integration with a backend API for user registration.

### Technologies Used

- Next.js: A React framework that enables server-rendered and statically generated applications.
- Framer Motion: A motion library for React that allows for easy animations.
- Tailwind CSS: A utility-first CSS framework for building responsive and design-driven web applications.

## How I Built It

### Frontend

The frontend of the GetLinked Hackathon landing page was built using Next.js, providing a solid foundation for server-side rendering and routing. Tailwind CSS was used for styling, allowing for rapid development with utility classes.

Framer Motion was integrated to create smooth animations for a more engaging user experience. Animations were carefully implemented to enhance the visual appeal of the landing page without compromising on performance.

### Backend API

The backend API was also built using Next.js, allowing for server-side processing of form submissions. The API handles the registration process, validating the form data before persisting it to a database or external service.

### Form Validation

Input validation was implemented on the client side to ensure that users provide valid information. The validation logic was organized into a separate utility function for maintainability and reusability.

### Project Structure

```
|-- components
|   |-- ...
|-- pages
|   |-- index.js
|-- styles
|   |-- ...
|-- utils
|   |-- postForm.js
|   |-- validateForm.js
|-- ...
```

- `components`: Contains reusable UI components used in the landing page.
- `pages`: Contains the main page components, with `index.js` serving as the entry point.
- `styles`: Houses any additional styles or overrides specific to the project.
- `utils`: Contains utility functions for sending form data (`postForm.js`) and validating form inputs (`validateForm.js`).

## How to Run the Project

1. Clone the repository to your local machine.
2. Install the required dependencies using `npm install`.
3. Run the project locally with `npm run dev`.

## Acknowledgements

Special thanks to the GetLinked team for organizing this hackathon and providing the opportunity to work on this UI challenge project.

## Future Improvements

- Implement authentication and user management features.
- Enhance accessibility for a wider audience.
- Optimize performance for faster page loading.

Feel free to reach out if you have any questions or feedback!

---

*Note: This README provides an overview of the project, but actual URLs, code snippets, and specific details may vary based on your project's structure and implementation.*