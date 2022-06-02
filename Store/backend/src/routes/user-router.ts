import { Request, Response, Router } from 'express'
import { ObjectId } from 'mongodb'
import { usersService } from '../domain/user-service'
import { constructorPagination } from './pagination'

export const usersRouter = Router({})

export type userType = {
    _id: ObjectId
    id: string
    login: string
    passwordHash: string
    passwordSalt: string
}

usersRouter.get('/', async (req: Request, res: Response) => {
    const paginationData = constructorPagination(req.query.PageSize as string, req.query.PageNumber as string)
    const resultUsers = await usersService.allUsers(paginationData.pageSize, paginationData.pageNumber)
    res.status(200).send(resultUsers)
})

usersRouter.post('/create', async (req: Request, res: Response) => {
    const createdUser = await usersService.createUser(req.body.login, req.body.password)
    res.status(200).send(createdUser)
})

usersRouter.get('/:id', async (req: Request, res: Response) => {
    const resultUsers = await usersService.findUserById(req.params.id)
    if (resultUsers) {
    res.status(200).send(resultUsers)}
    else {
    res.status(404).send('User not found, check ID')
    }
})