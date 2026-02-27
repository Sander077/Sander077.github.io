import express, { Request, Response } from "express";
import path from "path";

const router = express.Router();

router.get("/", (req: Request, res: Response): void => {
    res.sendFile(path.join(__dirname,"views", "index.html"))
})

router.get("/seats", (req: Request, res: Response): void => {
    res.sendFile(path.join(__dirname,"views", "seats.html"))
})



export default router;