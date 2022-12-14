import "dotenv/config";
import express, { Express, Request, Response } from "express";
import { router } from "./routes/index";
import { rateLimiter } from "./middlewares";

const PORT:string = process.env.PORT || "3005";

const app: Express = express();
app.use(rateLimiter);
app.use("/", router);
app.use("*", function(req: Request, res: Response): void {
    res.status(404).json({"message": "route not found"})
});

app.listen(PORT, (): void =>{
    console.log(`running on http://localhost:${PORT}`)
})