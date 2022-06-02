import { NextFunction, Request, Response, Router } from "express";
import { jwtService } from "../application/jwt-service";
import { usersService } from "../domain/user-service";


export const authRouter = Router({})



authRouter.post('/', async (req: Request, res: Response) => {
    const user = await usersService.checkCredentials(req.body.login, req.body.password)
    const foundUser = await usersService.findUserByLogin(req.body.login)
    if (!user) {
        res.send(401)
    }
    else if(foundUser && user) {
        const token = await jwtService.createJWT(foundUser)
        res.status(200).send({token})
    }
    else {
        res.sendStatus(400)
    }
}) 