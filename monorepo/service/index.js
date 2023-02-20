const express = require('express');

const {doTask} = require('@shared/lib');


console.log(doTask(3,4));
const app = express();

app.get("/", (req, res) => {
     res.send(doTask(4,5).toString());
 });

app.listen(1234, () => console.log("server started!!!"));
