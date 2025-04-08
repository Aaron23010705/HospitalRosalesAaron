
import express from "express";
import RegisterEmployee from "../Controllers/registerEmployeesController.js"
const router = express.Router();


router.route("/").post(RegisterEmployee.register)


export default router