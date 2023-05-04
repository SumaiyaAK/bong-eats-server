const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

const recipes = require('./data/recipes.json')
const Recipe = require('./data/recipeDetail.json')

app.use(cors())

app.get('/', (req, res) =>{
    res.send('Bong-Eats is running')
});

app.get('/recipes', (req, res) =>{
    res.send(recipes)
})

app.get('/recipe', (req, res) =>{
    res.send(Recipe)
})

app.get('/recipe/:id', (req, res) =>{
    const id = req.params.id;
    console.log(id)
    const selectedRecipe = Recipe.find(r => r.id === id)
    res.send(selectedRecipe)
})

app.get('/recipes/:id', (req, res) => {
    const id = parseInt(req.params.id);
    console.log(id)
    const recipeId = Recipe.filter(r => parseInt(r.recipe_id) === id);
    res.send(recipeId)
})

app.listen(port, ()=> {
    console.log(`Bong-Eats API is running on port: ${port}`)
})
