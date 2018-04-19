# No2WL Converter

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Remember the old days of [T9](https://en.wikipedia.org/wiki/T9_(predictive_text))? If you are nostalgic about this thumb intensive form of writing, this app is just what you need!

## Table of Contents

- [Requirements](#requirements)
- [Getting started](#getting-started)
  - [Folder Structure](#folder-structure)
  - [Launching the app](#launching-the-app)
- [Testing](#testing)
  - [the server](#the-server)
  - [the front-end application](#the-front-end-application)

## Requirements
- [nodejs](https://nodejs.org/en/)
- [yarn](https://yarnpkg.com/en/) (or npm)
## Getting started
  Make sure you have the requirements installed before continuing.
  To get a copy of the files locally, you need to clone the repository:
  ```bash
    git clone https://github.com/RobinCsl/no2wl-converter.git
  ```

  Then, execute the following commands:
  ```bash
    cd no2wl-converter
    yarn install
  ```

  You now have all the necessary setup to launch the app.

  ### Folder structure

  The app comprises of two parts:
  1. the server part, which you can inspect in the `server/` folder;
  2. the front-end application part, which you can find under the `app/` folder.

  ### Launching the app

  To launch the app, make sure you start the server first by executing in one terminal
  ```bash
    yarn start-server
  ```
  which should print the following:
  
  > yarn run v1.5.1  
  > $ node ./server/index.js  
  > Server started on port 4000  

  To know more about the available API, please refer to the specific [README](./server/README.md) file for the server.

  Then, in *another* terminal, execute
  ```bash
    yarn start
  ```
  to launch the front-end React application; it should print the following

  > Compiled successfully!
  >  
>  You can now view **no2wl-converter** in the browser.
>  
>  **Local**:            [http://localhost:**3000**/](http://localhost:3000/)  
>  **On Your Network**:  [http://\*\*\*.\*\*\*.\*.\*\*:**3000**/](http://localhost:3000/)
>  
>  Note that the development build is not optimized.  
>  To create a production build, use _yarn build_.

### Note

There are two branches worth inspecting:
- The `master` branch displays all the possible combinations of letters.
- The `word-filtering` branch displays all the possible words (and prefixes of words) stemming from the chosen combination of letters which are available in a 10,000-word dictionary.

If you decide to inspect `word-filtering`, make sure to run `yarn install` again as some additional library is used before running the app (there are no changes on the server-side).
## Testing...

  Some test suites are available.
  
  ### ...the server
  To run the test suites corresponding to the server part, open the terminal and execute
  ```bash
    yarn test-server
  ```
  There is also a development mode which will run the tests on every file modification inside of the `server/` folder:
  ```bash
    yarn test-server:dev
  ```

  ### ...the front-end application
  To run the test suites corresponding to the front-end part, open the terminal and execute
  ```bash
    yarn test-react
  ```
  for a one-off test, or 
  ```bash
    yarn test
  ```
  to run the more interactive test runner/watcher.

