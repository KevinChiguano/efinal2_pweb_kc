import axios from "axios";

export const guardarUsuarioFachada=(cuerpo, token)=>{
    guardarUsuario(cuerpo, token);
}

const guardarUsuario=(cuerpo, token)=>{
    const headers={
        "Authorization": "Bearer "+token
    }
    axios.post(`http://localhost:8081/API/v1.0/Inscripcion/estudiantes`,cuerpo,{headers:headers});
}


export const buscarUsuarioFachada=async(cedula, token)=>{
    return buscarUsuario(cedula, token);
}

const buscarUsuario=async(cedula, token)=>{
    const headers={
        "Authorization": "Bearer "+token
    }
    return axios.get(`http://localhost:8081/API/v1.0/Inscripcion/estudiantes/${cedula}`,{headers:headers});
}