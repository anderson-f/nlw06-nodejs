import "reflect-metadata"
import express from "express";

import './database'

const app = express();

app.listen(4000, () => {
  console.log("Server is running")
})

app.post('/test-post', (request, response) =>{ 
  return response.send("Olá NLW método POST")
})

app.get('/test', (request, response) => {
  return response.send('Olá Nlw')
})