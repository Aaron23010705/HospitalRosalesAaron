const AppointmentController = {}

import AppointmentModel from "../models/Appointment.js";

//Select
AppointmentController.getAppointment = async (req,res) => {

    const Appointment =  await AppointmentModel.find().populate("idDoctor").populate("idPatient");
    res.json(Appointment)
   
}

AppointmentController.insertAppointment = async (req,res) => {

    const {date, hour, motive, idDoctor, idPatient} = req.body;
    const newAppointment = new AppointmentModel({date, hour, motive, idDoctor, idPatient})
    await newAppointment.save();
    res.json ({message: "Appointment saved"});
}

AppointmentController.updateAppointment = async (req,res) => {
    const {date, hour, motive, idDoctor, idPatient} = req.body;
     const updatedAppointment = await AppointmentModel.findByIdAndUpdate(req.params.id,{date, hour, motive, idDoctor, idPatient},{new:true})
     res.json ({message: "Appointment updated"});

}

AppointmentController.deleteAppointment= async (req,res) => {

    await AppointmentModel.findByIdAndDelete(req.params.id);
    res.json ({message: "Appointment deleted"});

}

export default AppointmentController;