This project is in production at [Acoustic Content](http://acoustic-content-app.s3-website.us-east-2.amazonaws.com/)
deployed via an AWS S3 bucket as static files from a bundled React SPA

## Acoustic Frontend App

### Overview

This app calls a REST endpoints within the IBM Watson Content Hub to fetch data for a particular article. With the heading, mainImage, author, date and body elements, it renders the article.

#### Instructions :

- git clone or download zip from github
- run npm i or yarn from root directory
- run npm start or yarn start from root directory
- the app should load on [http://localhost:3000/](http://localhost:3000/)

#### Technology Used :

- React 16.12 (hooks api)
- Material UI component library
- Lodash (get helper function)
- React HTML parser for rendering strings including marku
