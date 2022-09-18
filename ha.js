#!/usr/bin/env node

const axios = require('axios')

const jokeUrl = 'https://official-joke-api.appspot.com/random_joke'

function tellJoke(joke) {
  console.log(joke.setup)
  console.log(joke.punchline);
}

// Get joke
axios.get(jokeUrl)
.then(res => {
  tellJoke(res.data)
})
.catch(_ => {
  console.error('😢 Unable to get joke')
})