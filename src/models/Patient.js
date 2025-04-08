/*nombre, edad, correo, contraseña, celular, is verified*/

import { Schema, model } from "mongoose";

const PatientSchema = new Schema(
{ name:{
type:String,
require:true,
maxLength:100
},
age:{
    type:Number,
    min:0,
    max:100
},
email:{
    type: String,
    requiere:true,
    maxLength:100

},
password:{
    type: String,
    require: false,
    maxLength:100
    },
    cellphone:{
        type: String,
        require: false,
        maxLength:100
    },
    isVerified:{
        type: Boolean,
        require: true,
        }

},{
    timestamps:true,
    strict:false
}
)

export default model ("Patient", PatientSchema);
