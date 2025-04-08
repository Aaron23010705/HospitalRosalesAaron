import express from "express";
import AppointmentRoute from "./src/routes/appointment.js"
import DoctorRoute from "./src/routes/doctor.js"
import PatientRoute from "./src/routes/patient.js"
import loginRoute from "./src/routes/login.js"
import logoutRoute from "./src/routes/logout.js"
import registerPatient from "./src/routes/registerPatient.js"
import registerDoctor from "./src/routes/registerDoctor.js"
import cookieParser from "cookie-parser";



//creo una constante que es igual
//a la libreria que importe y se ejecuta
const app = express();
app.use(cookieParser())

//Uso un mmiddleware para que acepte datos jason
app.use (express.json());
//Definir la ruta
//Emboids, asi se llaman estas rutas
app.use("/api/Appointment", AppointmentRoute)
app.use("/api/Doctor", DoctorRoute)
app.use("/api/Patient", PatientRoute)
app.use("/api/Login", loginRoute)
app.use("/api/Logout", logoutRoute)
app.use("/api/registerPatient", registerPatient)
app.use("/api/registerDoctor", registerDoctor)


//Exporto la constante para poder usar express en otros lados
export default app;    
