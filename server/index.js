const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const { number2wordlist } = require("./no2wl");
const { isString, isSequenceOfDigits } = require("./helpers");

const app = express();
const port = 4000;

app.use(helmet());
app.use(cors());

app.get("/:input", (req, res) => {
  const { input } = req.params;
  if (!isString(input)) {
    res.json({ error: "Input should be a string." });
  }
  if (!isSequenceOfDigits(input)) {
    res.json({
      error: "Input should be sequence of digits.",
    });
  }
  if (input.replace(/0|1/g, "").length > 10) {
    res.json({
      error: "Cannot accept more than 10 digits or call stack size will exceed",
    });
  }

  const wordList = number2wordlist(input);
  const result = { result: wordList };
  res.json(result);
});

app.use((req, res) => {
  res.json({
    message: "Enter a sequence of digits, e.g. 23",
  });
});

app.listen(port);

console.log(`Server started on port ${port}`);
