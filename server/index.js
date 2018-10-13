const express = require('express');
const { json } = require('body-parser');
const massive = require('massive');
require('dotenv').config()

const app = express();

// DON'T FORGET TO REQUIRE FUNCTIONS FROM CONTROLLER
const { getInventory, addThings } = require('./Controller/controller')

const port = 3003;

app.use(json());

massive(process.env.CONNECTION_STRING)
    .then(dbInstance => {
    app.set('db', dbInstance);
})
.catch(err => console.log(err));


// app.get(`/api/test`, (req, res, next) => {
//     res.sendStatus(200);
// })

app.post('/api/things', addThings);
app.get('/api/things', getInventory);
// app.delete('/api/inventory/:id', deleteThings);


app.listen(port, () => {
    console.log(`yaaaa boiiii: ${port}`)
});