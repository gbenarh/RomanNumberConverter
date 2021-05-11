const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.post('/romanapi', (req, res) => {
  //convert string
  const { string } = req.body;
  const num = string.toUpperCase();

  const decimal = RomanConverter(num);

  // send response
  res.json(decimal);
});

const Value = (str) => {
  switch (str) {
    case 'I':
      return 1;
    case 'V':
      return 5;
    case 'X':
      return 10;
    case 'L':
      return 50;
    case 'C':
      return 100;
    case 'D':
      return 500;
    case 'M':
      return 1000;
  }
};

const RomanConverter = (str) => {
  let size = str.length - 1,
    previous = 0,
    answer = 0;

  for (let i = size; i >= 0; i--) {
    Value(str[i]) >= previous
      ? (answer += Value(str[i]))
      : (answer -= Value(str[i]));

    previous = Value(str[i]);
  }

  return answer;
};

const port = 4000;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
