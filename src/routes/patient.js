
import express from "express";
import patientController from "../Controllers/PatientController.js";

const router = express.Router();


router.route("/")
.get(patientController.getPatient)

router.route("/:id")
.put(patientController.updatePatient)
.delete(patientController.deletePatient)

export default router