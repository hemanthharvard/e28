# Assignment #5 - REST APIs

The description of this assignment can be found in Canvas at [Assignment #5](https://canvas.harvard.edu/courses/54354/assignments/249114) (Spring 2019)

You should build your application in this repo cloned for you in Github Classroom. You'll submit your project and github URLs in Canvas.

**Project setup:-**

1. `git clone` this repository.
2. We recommend using node version `v13.8.0`.
3. Run `npm install`.

Note:- This project works on macOS and Ubuntu.

**Instructions to run the application locally:-**

1. Run `npm start` to start the application or run `npm start-dev` to start the application in development mode.
2. Open the browser with the URL [http://localhost:8080](http://localhost:8080).

**Instructions to run the tests in Terminal:-**

1. Run `node runTests.js`

Note:- This script will start the application locally, run some tests, display the results in the terminal and kill the application. This hits the local server.

**Instructions to run the tests in the Browser Locally:-**

1. Run `npm start` to start the application or run `npm start-dev` to start the application in development mode.
2. Open the browser with the URL [http://localhost:8080/apiTests](http://localhost:8080/apiTests).
3. Open the web developer console in the browser.
4. Click `Run tests` button and observe the console for logs.
5. When you run locally, you can change the hostname value in the text box to `hemanthkishen.com` to test CORS setup. This will hit the APIs hosted in my Digital Ocean server.

**Instructions to run the tests in the Browser (Digital Ocean):-**

1. Go to [http://hemanthkishen.com:8080/apiTests](http://hemanthkishen.com:8080/apiTests).
2. The page will automatically populate the hostname and the port for you in the form.
3. Open the web developer console in the browser.
4. Click `Run tests` button and observe the console for logs.