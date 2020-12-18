# Cars Dashboard
 Created a dashboard that features cars from 2020. Can apply fiters on the dashboards using 
 quarterly timeline (Q1 2020, Q2 2020, Q3 2020 and Q4 2020) and also based on release status(Released/ Upcoming). You can click on show more button under each car to view more about the car. You can click on Reset button to Reset the filter. Within the details page You can click on the Return to Home button or the logo on the navbar to go back to home page. It is equipped with Mobile view as well.

## Installation
### Front end Setup
  - Please refer to README in carsdashboard.
  - cd carsdashboard
  - npm install -g @angular/cli@latest
  - npm install
  - ng serve
  - Application should run on localhost:4200
### Backend end Setup 
  - The database is on cloud. The credentials are in the code file as well. Just for sample project purpose. Normally i dotenv library and .env file to configure my credentials.
  - cd server
  - npm install
  - node server.js
  - Server should run on localhost:3000
### Utilized Libraries
- On the backend used Node.js as runtime and MongoDB as database.
- It is a simple dataset with database name cars and collection name cars that has documents of type: 

  ```sh

  { _id?:string;
  make?:string;
  model?:string;
  vin?:string;
  date?:string;
  released?:string;
  picture_url?:string
 }

```
- The front end is built using Angular framework.
Please refer to the Screenshots folder for views of the application and api data screen shots.

### Api Endpoints
 - GET request on http://localhost:3000/api/dashboard/car/:id for getting individual car data.
 - GET request on http://localhost:3000/api/dashboard/cars for getting all cars data.
 - POST request on http://localhost:3000/api/dashboard/ for adding new car data

### Versions
 - Angular 11
 - Node.js v12.8.4