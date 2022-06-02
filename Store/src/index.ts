import dotenv from "dotenv"
dotenv.config()
import express, { Request, Response, Router } from 'express'
import cors from 'cors'
import bodyParser from "body-parser"
import { usersRouter } from "./routes/user-router"
import { runDb } from "./repositories/db"
import { authRouter } from "./routes/auth-routes"


const app = express()
const port = process.env.PORT || 5000


app.use(cors())
app.use(bodyParser.json())
app.use('/users', usersRouter)
app.use('/login', authRouter)



const startApp = async () => {
    await runDb()
    app.listen(port, () => {
      console.log(`Server listening on post: ${port}`)
    })
  }
  
  startApp()