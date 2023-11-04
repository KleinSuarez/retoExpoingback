const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(require('./router/user'));
app.use(require('./router/sport'));
app.use(require('./router/challenge'));

app.listen(8080);
console.log("Server Up")