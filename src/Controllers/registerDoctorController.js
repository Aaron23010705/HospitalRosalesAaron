//Importamos el modelo de la base dre datos
import EmployeeModel from "../models/Employees.js"
import bcryptjs from "bcryptjs"; //Encriptar contraseña o correos
import jsonwebtoken from "jsonwebtoken" //Generar tokens
//cookie-parse sirve para generar cookies
import {config} from "../config.js" //Se importa la configuración del proyecto
//creamos un array de funciones
const registerEmployessController = {}


registerEmployessController.register = async (req, res) => {

    //Pedimos todos los datos
    const {name, lastname, birthday, email, adress, hireDate, password, telephone, dui, issNumber, isVerified} = req.body;

    try{
//Verificamos si el empleado ya existe
        const doesEmployeeExist = await EmployeeModel.findOne({email}); //Se busca el empleado por el email

        if (doesEmployeeExist) {

            return res.json({message : "Employee already exists"})
        }
        //Encriptar o Hashear la contraseña

        const passwordHash = await bcryptjs.hash(password, 10); //este 10 significa cuantas veces se va a encriptar

        //Guardar el empleado en la base de datos
 const newEmployee = new EmployeeModel({name, 
    lastname, 
    birthday, 
    email, 
    adress, 
    hireDate, 
    password: passwordHash, //Se cambia  la contraseña a que se guarde la contraseña encriptada
    telephone,
     dui, 
     issNumber,
      isVerified});

    await newEmployee.save();
    res.json ({message: "Employee saved in Register"});

    //Generar un token que valide que ya estoy registrado y que puedo acceder a todas las páginas
    //El token es el que valida si ya se inició sesión/se ha registrado el usuario, es por sesión, por lo que se genera cada vez que se entra
    //Un token tiene los siguientes requerimientos 1-Qué se va a guardar, 2-La palabra secreta, 3-Cuando expira el token, 4-Función flecha
    jsonwebtoken.sign(
//1- Que voy a guardar 
            {id: newEmployee._id},
//2- pALABRA SECRETA (Se guarda en env)
 config.JWT.secret,

 //3- Cuando expira
 { expiresIn: 
    config.JWT.expiresIN},
//4 Función flecha
(error, token) => {
    if(error) console.log(error);
    res.cookie("authToken", token);
    res.json ({message: "Empleado registrado"})

}

    )
    }

catch (error) {
console.log(error);
res.json ({message: "Erro al registrar empleado"})

}


}

export default registerEmployessController