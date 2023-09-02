import axios from "axios";


export const obtenerTokenFachada=async(cuerpo)=>{
    return obtenerToken(cuerpo);
}


export const obtenerToken=async(cuerpo)=>{

    return axios.patch(`http://localhost:8080/API/v1.0/Autorizacion/tokens`,cuerpo).then(r=>r.data);

    
}