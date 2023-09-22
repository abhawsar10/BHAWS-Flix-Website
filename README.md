# Film-and-TV-Website
Project developed as a part of Web Technologies Course at USC. Web application developed using Angular, Bootstrap for Frontend and NodeJS, ExpressJS for the Backend that showcases the latest movies and TV shows. Can we viewed at https://abhawsar.uc.r.appspot.com/

To run the project on your local, run the following commands:

`cd node_backend`

`npm install`

`node node_server.js`

To make changes to Angular frontend follow these steps:

- Make changes in Angular folder to frontend
- Preview changes using `ng serve`
- Once acceptable, run `ng build`
- Copy the newly updated 'dist' folder from 'angular-frontend' folder to 'node_backend' folder
- Push changes to Github repo
- Using Gcloud CLI, run command from node_backend folder: `gcloud app deploy`
- App should be running at https://bhaws-flix.uw.r.appspot.com/
