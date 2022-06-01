import dotenv from "dotenv"
dotenv.config()
import express, { Request, Response, Router } from 'express'
import cors from 'cors'
import bodyParser from "body-parser"
import { mainPagesRouter } from "./routes/main-router"


const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(bodyParser.json())
app.use('/', mainPagesRouter)


app.listen(port, () => {
    console.log(`Why did you summon me on port ${port} ?`)
})