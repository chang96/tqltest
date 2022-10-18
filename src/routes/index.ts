import { Router, Response, Request } from "express";
import { calculateAgeController } from "../controllers";
const router = Router();

router.get("/", function(req:Request, res:Response): void{
    res.send("This app helps you calculate your date of birth")
})

router.get("/howold", calculateAgeController)

export {
    router
}