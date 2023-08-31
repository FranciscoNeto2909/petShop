import { Router } from "express";
import * as pagesController from "../controllers/pagesController";
import * as searchController from "../controllers/searchController";

const router = Router()


router.get('/', pagesController.home)
router.get('/dogs', pagesController.dogs)
router.get('/cats', pagesController.cats)
router.get('/fishes', pagesController.fishes)
router.get('/search', searchController.search)

export default router;