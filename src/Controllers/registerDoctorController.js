//Importamos el modelo de la base dre datos
import DoctorModel from "../models/Doctor.js"
import bcryptjs from "bcryptjs"; //Encriptar contraseña o correos
import jsonwebtoken from "jsonwebtoken" //Generar tokens
//cookie-parse sirve para generar cookies
import {config} from "../config.js" //Se importa la configuración del proyecto
//creamos un array de funciones
const registerDoctorController = {}


registerDoctorController.register = async (req, res) => {

    //Pedimos todos los datos
    const {name, speciality, email, password} = req.body;

    try{
//Verificamos si el empleado ya existe
        const doesDOctorExist = await DoctorModel.findOne({email}); //Se busca el empleado por el email

        if (doesDOctorExist) {

            return res.json({message : "Doctor already exists"})
        }
        //Encriptar o Hashear la contraseña

        const passwordHash = await bcryptjs.hash(password, 10); //este 10 significa cuantas veces se va a encriptar

        //Guardar el empleado en la base de datos
 const newDoctor = new DoctorModel({name,
    speciality, 
    email,
    password: passwordHash, //Se cambia  la contraseña a que se guarde la contraseña encriptada
 });
 await newDoctor.save();
  

    jsonwebtoken.sign(
//1- Que voy a guardar 
            {id: newDoctor._id},
//2- pALABRA SECRETA (Se guarda en env)
 config.JWT.secret,

 //3- Cuando expira
 { expiresIn: 
    config.JWT.expiresIN},
//4 Función flecha
(error, token) => {
    if(error) console.log(error);
    res.cookie("authToken", token);
    res.json ({message: "Doctor registrado"})

}

    )
    }
    

catch (error) {
console.log(error);
res.json ({message: "Error al registrar al Doctor"})

}


}

export default registerDoctorController