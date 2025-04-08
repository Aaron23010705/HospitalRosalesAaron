const DoctorController = {};

import Doctor from "../models/Doctor.js";

DoctorController.getDoctor = async (req,res) => {

    const Doctor = await Doctor.find();
    res.json(Doctor)
   
}

DoctorController.updateDoctor = async (req,res) => {
    const {name, speciality, email, password} = req.body;
     const updatedDoctor = await Doctor.findByIdAndUpdate(req.params.id,{name, speciality, email, password},{new:true})
     res.json ({message: "Doctor updated"});

}

DoctorController.deleteDoctor = async (req,res) => {

    await Doctor.findByIdAndDelete(req.params.id);
    res.json ({message: "Doctor deleted"});

}

export default DoctorController;