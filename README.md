# myFlix-client

## Overview

myFlix-client is the client-side part of a movie app built using React, Parcel, and Bootstrap. This app allows users to browse movies, register, log in, add movies to their list of favorites, and manage their profile.

## Features

- User registration and login.
- Display of a list of movies fetched from a RESTful API.
- Filtering movies by title.
- Viewing detailed information about each movie, including genre, director, and actors.
- Adding or removing movies from the favorites list.
- Updating user profile information (username, email, and password).
- Responsive design using Bootstrap.

## Tech Stack

- **React** - For building the user interface.
- **Parcel** - For bundling and serving the app.
- **Bootstrap** - For responsive design and styling.
- **Sass** - For custom styles.
- **RESTful API** - Provides movie data and user management.

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) and npm should be installed on your machine.

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/myFlix-client.git
   cd myFlix-client


   	2.	Install the dependencies:

    npm install

    3.	Run the app in development mode:

    npm start

   4.	Build the app for production:

    npm run build

    Movie Filtering Feature
   ```

In the latest version of the app, you can filter movies by title using the search bar on the main page. This allows you to quickly find a movie by typing its name.

Scripts

    •	npm start - Runs the app in development mode using Parcel.
    •	npm run build - Builds the app for production.

API Endpoints

This app communicates with a RESTful API to fetch movies and manage users. The main API endpoints are:

    •	/movies - Fetches the list of movies.
    •	/users - Handles user registration, login, and updates.
    •	/users/:username/movies/:movieId - Adds or removes a movie from the user’s list of favorites.

Deployment

The app is hosted on Netlify and uses Parcel for bundling. To deploy it on Netlify, make sure that Parcel is installed as a local dependency in the project.

Deploying to Netlify:

    1.	Connect your GitHub repository to Netlify.
    2.	Set the build command to:

    parcel build src/index.html --public-url /

    	3.	Set the publish directory to dist.

Known Issues

    •	Sass Deprecation Warnings: Some warnings may appear due to changes in the Sass compiler’s handling of nested rules.

Contributing

If you’d like to contribute, please fork the repository and use a feature branch. Pull requests are warmly welcome.

License

This project is licensed under the MIT License - see the LICENSE file for details.
