# Project 3
+ By: Hemanth Kishen Udupi Vedavysa
+ Production URL: <a href="http://e28p3.hemanthkishen.com/" target="_blank">http://e28p3.hemanthkishen.com/</a>

## Outside resources
- None

## Notes for instructor
- This application has been tested with Chrome browser.
- Steps to test:-
  
  1. Go to <a href="http://e28p3.hemanthkishen.com/" target="_blank">http://e28p3.hemanthkishen.com/</a>.
  2. Click on `Create a new account` in case you want to create a new account, else you can use the following test account:-
        ```  
        username: test
        password: test
        ```
        *Note:- There is backend (server) validation for username to be unique. If a duplicate username key is detected, an error message is displayed.*
  3. Enter the `username` and `password`, click `Login`.
        
        *Note:- Submitting incorrect credentials will display an error message from the server.*
  4. Click on `Create new note` tab, enter title, message and check favorite box (optional), then click on `Add` button. There is front-end validation here for required fields.
  5. Click on `Logout, your_username` button on top-right.
  
        *Note:- This will request the server to destroy the session/cookie and the variable `username` in Vuex is set to `null` which makes the application to default to the login page.*

## How is authentication being used in your application?
- After user signup, the user logs in and the server sets a token via a cookie which times out after 24 hours.
- With every network call the cookie is expected, else the server responds with a 401 (Unauthorized) error.
- On page reload, a `authUser` GET call is made which sends the token from the cookie and the username is returned. This is set in Vuex which provides the logged in experience.
- In case the token has expired/deleted or there is no authentication cookie, `authUser` returns the status as unauthorized and the Vue application redirects to the login page by default.
- After clicking on `logout` button, we send a request to the server to destroy the session/cookie.

## What data entities of your application are being managed via Vuex?
- The `notes` data fetched from the server in the Homepage and Favorites page.
- The `username` set by login network call or `authUser` network call.

## E2E Testing screenshot
![Note Keeper passing E2E tests](https://github.com/hemanthharvard/e28/blob/main/p3/e2e-tests.png?raw=true)