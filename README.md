<<<<<<< HEAD

# akweb_portfolio

# Resume - Abhay Biradar created with React and TailwindCSS
=======

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
>>>>>>> 4e4fd4a (Initial commit of beautiful_portfolio)

# Beautiful Portfolio - Abhay Biradar

This is a personal portfolio website created using **React**, **Vite**, and **TailwindCSS**. The portfolio showcases projects, skills, and contact information in a visually appealing and responsive design.

## Table of Contents

- [akweb\_portfolio](#akweb_portfolio)
- [Resume - Abhay Biradar created with React and TailwindCSS](#resume---abhay-biradar-created-with-react-and-tailwindcss)
- [React + Vite](#react--vite)
  - [Expanding the ESLint configuration](#expanding-the-eslint-configuration)
- [Beautiful Portfolio - Abhay Biradar](#beautiful-portfolio---abhay-biradar)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Technologies Used](#technologies-used)
  - [Project Structure](#project-structure)
  - [Setup and Installation](#setup-and-installation)

---

## Features

- **Loading Screen**: A dynamic loading screen with a typewriter effect.
- **Responsive Design**: Fully responsive layout for all devices.
- **Smooth Animations**: Scroll-based animations using `IntersectionObserver`.
- **Projects Section**: Highlights featured projects with descriptions and links.
- **About Section**: Showcases skills, education, and work experience.
- **Contact Form**: Integrated with **EmailJS** for sending messages.
- **Dark Theme**: A visually appealing dark theme with gradient highlights.
- **Mobile Menu**: A collapsible menu for mobile devices.

---

## Technologies Used

- **React**: Frontend framework for building the UI.
- **Vite**: Fast build tool for modern web development.
- **TailwindCSS**: Utility-first CSS framework for styling.
- **EmailJS**: For handling contact form submissions.
- **React Icons**: For social media and navigation icons.

---

## Project Structure

   beautiful_portfolio/ ├── public/ # Static assets │ ├── vite.svg │ └── images/ # Images used in the project ├── src/ # Source code │ ├── assets/ # Additional assets │ ├── components/ # Reusable components │ │ ├── Navbar.jsx │ │ ├── MobileMenu.jsx │ │ ├── LoadingScreen.jsx │ │ ├── backGroundImage.jsx │ │ ├── RevealOnScroll.jsx │ │ └── sections/ # Sections of the portfolio │ │ ├── home.jsx │ │ ├── About.jsx │ │ ├── projects.jsx │ │ └── contact.jsx │ ├── App.jsx # Main application component │ ├── main.jsx # Entry point │ ├── App.css # Global styles │ └── index.css # TailwindCSS configuration ├── .gitignore # Ignored files for Git ├── index.html # HTML template ├── package.json # Project metadata and dependencies ├── vite.config.js # Vite configuration └── README.md # Project documentation

---

## Setup and Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/AKBiradar02/akweb_portfolio.git
   cd akweb_portfolio

