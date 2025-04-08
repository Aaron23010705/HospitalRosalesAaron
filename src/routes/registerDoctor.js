
import express from "express";
import registerDoctor from "../Controllers/registerDoctorController.js"
const router = express.Router();


router.route("/").post(registerDoctor.register)


export default router