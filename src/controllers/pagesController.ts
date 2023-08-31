import { Request, Response } from "express"
import { pet } from "../models/pet"

export const home = (req: Request, res: Response) => {
    res.render("pages/home", {
        all: true,
        pets: pet.getAll(),
        banner: {
            title: "Todos os animais",
            background: 'allanimals.jpg'
        }
    })
}

export const dogs = (req: Request, res: Response) => {
    res.render("pages/home", {
        dog: true,
        pets: pet.getFromType("dog"),
        banner: {
            title: "Todos os cachorros",
            background: 'banner_dog.jpg'
        }
    })
}
export const cats = (req: Request, res: Response) => {
    res.render("pages/home", {
        cat: true,
        pets: pet.getFromType("cat"),
        banner: {
            title: "Todos os gatos",
            background: 'banner_cat.jpg'
        }
    })
}
export const fishes = (req: Request, res: Response) => {
    res.render("pages/home", {
        fish: true,
        pets: pet.getFromType("fish"),
        banner: {
            title: "Todos os peixes",
            background: 'banner_fish.jpg'
        }
    })
}