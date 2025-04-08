const PatientController = {};

import Patient from "../models/Patient.js";

PatientController.getPatient = async (req,res) => {

    const Patients = await Patient.find();
    res.json(Patients)
   
}

PatientController.updatePatient = async (req,res) => {
    const {name, age,  email,   password, cellphone,  isVerified} = req.body;
     const updatedPatient = await Patient.findByIdAndUpdate(req.params.id,{name, age,  email,   password, cellphone,  isVerified},{new:true})
     res.json ({message: "Patient updated"});

}

PatientController.deletePatient = async (req,res) => {

    await Patient.findByIdAndDelete(req.params.id);
    res.json ({message: "Patient deleted"});

}

export default PatientController;