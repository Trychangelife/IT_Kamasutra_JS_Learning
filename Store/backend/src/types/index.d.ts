import { userType } from "../routes/user-router";


declare global {
    namespace Express {
        export interface Request {
            user: userType | null
        }
    }
}