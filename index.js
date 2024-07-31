import express from 'express'

const app = express()

app.listen(5001, () => console.log("api running on port 5001 HELLO WORLD"))

app.get('/', (req,res)=> res.json('my api running so hello world heyyyyy'))