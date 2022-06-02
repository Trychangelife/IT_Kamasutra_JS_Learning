import { userType } from "../routes/user-router"
import { usersCollection } from "./db"

const userViewModel = {
    projection: {
        _id: 0,
        passwordHash: 0,
        passwordSalt: 0
    }
}


export const usersRepository = {
    async allUsers (skip: number, pageSize: number, pageNumber: number): Promise<object> {
        const allUsers = await usersCollection.find({}).skip(skip).limit(pageSize)
        const totalCount = await usersCollection.count({})
        const pagesCount = Math.ceil(totalCount / pageSize)
        return {pageNumber, totalCount, pagesCount, allUsers}
    },
    async createUser(newUser: userType): Promise<userType | boolean | null> {
        await usersCollection.insertOne(newUser)
        const checkUniqueLogin = await usersCollection.count({ login: newUser.login })
        if (checkUniqueLogin > 1) {
            return false
        }
        else {
            return await usersCollection.findOne({ id: newUser.id }, userViewModel)
        }
    },
    async findUserById(id: string): Promise<userType | null> {
        const foundUser = await usersCollection.findOne({id: id}, userViewModel)
        if (foundUser)
        return foundUser
        else {
            return null
        }
    },
    async findUserByLogin(login: string): Promise<userType | null> {
        const foundUser = await usersCollection.findOne({login: login})
        if (foundUser)
        return foundUser
        else {
            return null
        }
    }
}