import { Request, Response } from "express"
import { pet } from "../models/pet"

export const search = (req: Request, res: Response) => {
    const { name } = req.query
    res.render("pages/search", {
        all: true,
        petName: name,
        pets: pet.getFromName(name as string),
        banner: {
            title: "Todos os animais",
            background: 'allanimals.jpg'
        }
    })
}