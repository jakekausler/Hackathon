# Hackathon

This is the development code for the hackathon.

## Getting Started

Our code is split into frontend and backend. Frontend is in the `web/` directory and backend is in the `server/` directory.

### Frontend

After pulling the repo, run `npm install` in the `web/` directory. This will install all packages required. Source code is in the `web/src` directory, and build code will be output to the `web/dist` directory (which is ignored when uploading to git).

Webpack is controlling the build. The config is found at `web/webpack.dev.config.js`. To run a build, use `npm run buildDev` in the `web/` directory. This will output to the `web/dist` directory, which is where the server grabs files. Webpack will package all javascript into a single `main.js` file.

### Backend

Flask is controlling Environment variables are found in `dev/environment.env`. To run the server, first source this file and then run `server/server.py`. It will look in `web/dist` directory for files at the `/` endpoint.

On the AWS machine, as root run `runserver` to source the env and run the server on `0.0.0.0:80`.

## Prerequisites

You will need:
* [Python 3](https://www.python.org/downloads/)
* [NodeJS](https://nodejs.org/en/)
* [MySQL](https://www.mysql.com/)

To install the required python packages, run the following:
`pip install flask-restful`
`pip install mysql-connector`
