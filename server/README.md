# Description of the API

To start the server, execute `yarn start-server`, and then go to [localhost:4000](http://localhost:4000) to see the response from the server.

## Available endpoints

* `GET /:input`: Will return the corresponding word list if the input is a valid sequence of digits

  Example of responses:

  ```
  GET /23
  {"result":["ad","ae","af","bd","be","bf","cd","ce","cf"]}
  ```

  ```
  GET /23G
  {"error":"Input should be sequence of digits."}
  ```

* `GET /*`: catch-all endpoint.

  Example of responses:

  ```
  GET /
  {"message":"Enter a sequence of digits, e.g. 23"}
  ```
