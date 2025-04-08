import express from "express";
import AppointmentController from "../Controllers/AppointmentController.js";

const router = express.Router();


router.route("/")
.get(AppointmentController.getAppointment)
.post(AppointmentController.insertAppointment)

router.route("/:id")
.put(AppointmentController.updateAppointment)
.delete(AppointmentController.deleteAppointment)

export default router