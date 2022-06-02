import jwt from "jsonwebtoken";
import { settings } from "../settings";
import { userType } from "../routes/user-router";


export const jwtService  = {
    async createJWT(user: userType) {
        const token = jwt.sign({id: user.id}, settings.JWT_SECRET, {expiresIn: '12h'})
        return token
    },
    async getUserByToken(token: string) {
        try {
            const result: any = jwt.verify(token, settings.JWT_SECRET)
            return result.id
        }catch (error) {
            return null
        }
    }
}