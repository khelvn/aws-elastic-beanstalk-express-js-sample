const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello Ubezuo family, I am happy to let you know that i am now a devops engineer!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
