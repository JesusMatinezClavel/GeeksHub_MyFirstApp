import { Request, Response } from "express";


export const getRoles = (req: Request, res: Response) => {
    res.status(200).json(
        {
            success: true,
            message: `roles retrieved succesfuly`
        }
    )
    console.log(req.params.id)
}
export const createRoles = (req: Request, res: Response) => {
    const food = req.body.food
    req.body.nuevocampo = 'info nueva'
    res.status(200).send(
        {
            success: true,
            message: (`roles created succesfuly`),
            body: req.body,
            url: req.url,
            id: req.params.id,
            query: req.query
        }
    )
    console.log(`me gusta la ${food}`)
}
export const updateRoles = (req: Request, res: Response) => {
    res.status(200).json(
        {
            success: true,
            message: `roles updated succesfuly`
        }
    )
}
export const deleteRoles = (req: Request, res: Response) => {
    res.status(200).json(
        {
            success: true,
            message: `roles deleted succesfuly`
        }
    )
    console.log(req.body)
}
