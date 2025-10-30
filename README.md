# CineScope

Welcome to **CineScope** — a modern, AI-powered movie discovery and recommendation app built with **React**!  
CineScope lets users explore trending movies and TV shows, view genre-based lists, and receive personalized AI recommendations — all in a beautifully designed interface.


## Live Link

[CineScope on Netlify](https://cinescope-1.netlify.app/)



## Project Overview

CineScope allows users to:

* Browse trending, popular, and genre-based movies.
* View detailed information about each movie.
* Get personalized **AI movie recommendations**.
* Search for movies by name or category.
* Sign up and sign in using **Firebase Authentication**.
* Enjoy a clean, fast, and responsive design built with **Tailwind CSS**.

This project was created to practice and demonstrate:

* React component architecture
* Context API for authentication
* Routing with `react-router-dom`
* API integration and async data fetching
* Reusable component design
* Continuous deployment via GitHub Actions + Netlify

# Screenshot
Home Page
![Home Page](./src/assets/screencapture-cinescope-1-netlify-app-2025-10-30-13_23_44.png)


##  Learning Goals

* Build a full-featured web app using **React** and **Firebase**.
* Practice **state management**, **context**, and **React hooks**.
* Integrate external APIs and AI-based recommendation logic.
* Understand project structuring for scalability.
* Implement a CI/CD workflow using **GitHub Actions**.


##  App Architecture

### Folder Structure

REACT-CINESCOPE/
├── public/
├── src/
│ ├── assets/ # Images and icons
│ │ ├── CardImage.jpg
│ │ ├── HeroImage.jpg
│ │ ├── favicon.ico
│ │ └── ...
│ │
│ ├── components/ # Reusable UI components
│ │ ├── Anime.jsx
│ │ ├── CardList.jsx
│ │ ├── Footer.jsx
│ │ ├── GenreList.jsx
│ │ ├── Hero.jsx
│ │ ├── MovieRecommendation.jsx
│ │ ├── NavBar.jsx
│ │ ├── NewAndPopular.jsx
│ │ ├── SearchResults.jsx
│ │ └── TvShows.jsx
│ │
│ ├── context/ # Global state management
│ │ └── AuthContext.jsx
│ │
│ ├── firebase/ # Firebase configuration
│ │ ├── firebase.js
│ │
│ ├── Library/ # AI logic and helper files
│ │ └── AI.js
│ │
│ ├── pages/ # Main application pages
│ │ ├── AIRecommendation.jsx
│ │ ├── Homepage.jsx
│ │ ├── Movie.jsx
│ │ ├── SignIn.jsx
│ │ └── SignUp.jsx
│ │
│ ├── routes/ # Route definitions
│ ├── utility/ # Helper utilities
│ │
│ ├── App.jsx # Root component
│ ├── index.css # Global styles
│ └── main.jsx # App entry point
│
├── .github/workflows/
│ └── cinescope-deploy.yml # GitHub Actions CI/CD workflow
│
├── package.json
├── vite.config.js
└── README.md

## Setup and Installation

### 1. Clone the Repository

bash
```
git clone https://github.com/Hillary90/React-CineScope.git

cd React-CineScope/
```

### 2. Install Dependencies

bash
```
npm install
```

# Contributing

Contributions, issues, and feature requests are welcome!
Feel free to check out the issues page.

## Author

*Hillary Tanui*


# License

This project is licensed under the MIT License– see the [LICENSE](LICENSE.md) file.
 file for details.