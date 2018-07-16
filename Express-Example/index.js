const express = require('express');
const app = express();

app.get('/', (req,res) => res.send('Hello to your world !!!'));

app.listen(3000,() => console.log("Example prog is running on port number 3000"));