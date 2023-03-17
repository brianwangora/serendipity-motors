# SERENDIPITY MOTORS
# By: Brian Wangora

# Project Description


## API
Launch the local json server to view the API.
In the terminal, write the following: json-server --watch db.json
The server will launch at: http://localhost:3000/cars 

The json is hosted at: https://api.npoint.io/f2cc3422bff618316460/cars

## Live Site
The project is hosted on: "https://brianwangora.github.io/serendipity-motors"

## Description
This is a single web application with 1 index.html file for a car dealership called Serendipity Motors.

It has 9 component folders; App, Card, Contact, Details, Header, Home, Inventory, Navbar and Form.

it has 4 client-side routes; Home, Contact, Inventory and Add a Vehicle. Whereby Inventory has nested routes that point to more information.

Once you open the URL for the live site, click on any of the links seen at the top of the page. 

You can also refer to this video ("https://www.youtube.com/watch?v=Gc4chFanPhc&t=1s") to explain how to move around on the site.

The links are explained below.

### 1. Home
Here the user is presented with information about the dealership and can toggle dark mode or light mode depending on preference.

### 2. Contact
Here the user finds contact information belonging to the dealership.

### 3. Inventory
Here the user finds the dealership's inventory which is obtained using a GET method to obtain data from the API.
By clicking on the "DETAILS" button, the user is directed to a page that contains all the information about the car that has been clicked.

### 4. Add A Vehicle
Here the user can add a vehicle of choice to a form.
This will result in a POST request being made then the new vehicle will be displayed in Inventory along with the others.



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
