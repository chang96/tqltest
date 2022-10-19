import { Response, Request } from "express"
import { calculateAge } from "../utils"
const calculateAgeController = function(req:Request, res:Response):void{
    let dob:string = String(req.query.dob)
    let age:string = calculateAge(dob);
    let rgx = /years$|year$/
    if(age)
    res.status(200).json({"statusCode":200, "age": age})
    else 
    res.status(400).json({"statusCode": 400, "age": `${age}`, "response": {"status": 400, "data": {"error":"invalid age parameter"}}})
}

export {calculateAgeController}