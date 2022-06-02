import dotenv from "dotenv"
dotenv.config()
import { MongoClient, ServerApiVersion } from "mongodb"
import { userType } from "../routes/user-router";



const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1,
};

const uri:any = process.env.mongoURI

const client = new MongoClient(uri, options)
export const db = client.db("shop")
export const usersCollection = db.collection<userType>("users")

export async function runDb () {
try {
    await client.connect() 
    console.log("Connected successfully to mongo server")
    // await listDatabases(client)
} catch (e) {
    console.error(e);
}}