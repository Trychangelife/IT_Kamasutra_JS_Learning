import express, { Request, Response, Router } from 'express'

export const mainPagesRouter = Router({})


mainPagesRouter.get('/', async (req: Request, res: Response) => { 
    res.status(200).send('Добро пожаловать на стартовую страницу')
})