import { usersRepository } from "../repositories/user-repository"
import { userType } from "../routes/user-router"
import { uuid } from "uuidv4"
import bcrypt from "bcrypt"
import { ObjectId } from "mongodb"

export const usersService = {
    async allUsers(pageSize: number, pageNumber: number): Promise<object> {
        let skip = 0
        if (pageNumber && pageSize) {
            skip = (pageNumber - 1) * pageSize
        }
        return await usersRepository.allUsers(skip, pageSize, pageNumber)
    },
    async createUser(login: string, password: string): Promise<boolean | null | userType> {
        const passwordSalt = await bcrypt.genSalt(10)
        const passwordHash = await this._generateHash(password, passwordSalt) 
        const user: userType = {
            _id: new ObjectId(),
            id: uuid(),
            login: login,
            passwordHash: passwordHash,
            passwordSalt: passwordSalt
        }
        return await usersRepository.createUser(user)
    },
    async findUserById(id: string): Promise<userType | null> {
        return await usersRepository.findUserById(id)
    },
    async findUserByLogin(login: string): Promise<userType | null> {
        return await usersRepository.findUserByLogin(login)
    },
    async _generateHash(password: string, salt: string) {
        const hash = await bcrypt.hash(password, salt)
        return hash
    },
    async checkCredentials(login: string, password: string) {
        const user = await usersRepository.findUserByLogin(login)
        if (!user) return false
        const passwordHash = await this._generateHash(password, user.passwordSalt)
        if (user.passwordHash !== passwordHash) {
            return false
        }
        return true
    },

}