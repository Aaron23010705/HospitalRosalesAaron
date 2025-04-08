/* nombre especialidad correo y contraseña */

import { Schema, model } from "mongoose";

const DoctorSchema = new Schema(
{ name:{
type:String,
require:true,
maxLength:100
},
speciality:{
    type:String,
    maxLength:100
},
email:{
    type: string,
    requiere:true,
    maxLength:100
},
password:{
type: String,
require: false,
maxLength:100
}
},{
    timestamps:true,
    strict:false
}
)

export default model ("Doctor", DoctorSchema);
