const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

const recipes = require('./data/recipes.json')

app.use(cors())

app.get('/', (req, res) =>{
    res.send('Bong-Eats is running')
});

app.get('/recipes', (req, res) =>{
    res.send(recipes)
})

app.listen(port, ()=> {
    console.log(`Bong-Eats API is running on port: ${port}`)
})
