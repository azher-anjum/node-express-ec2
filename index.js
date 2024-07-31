import express from 'express'

const app = express()

app.listen(5001, () => console.log("api running on port 5001 HELLO WORLD"))

app.get('/', (req,res)=> res.json("this is the second time i'm editing"))