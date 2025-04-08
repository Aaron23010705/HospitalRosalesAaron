import express from "express";
import AppointmentRoute from "./src/routes/appointment.js"



//creo una constante que es igual
//a la libreria que importe y se ejecuta
const app = express();
app.use(cookieParse())

//Uso un mmiddleware para que acepte datos jason
app.use (express.json());
//Definir la ruta
//Emboids, asi se llaman estas rutas
app.use("/api/Appointment", AppointmentRoute)

//Exporto la constante para poder usar express en otros lados
export default app;    
