<template>
    <div class="contenedor-tabla">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Cedula</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="estudiante in estudiantesTabla" :key="estudiante.id">
            <td>{{ estudiante.id }}</td>
            <td>{{ estudiante.nombre }}</td>
            <td>{{ estudiante.apellido }}</td>
            <td>{{ estudiante.cedula }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import { buscarUsuarioFachada } from "../helpers/ClienteInscripcion.js";
  
  export default {
    props: {
      estudiantes: Object,
      token: String,
    },
  
    data() {
      return {
        estudiantesTabla: [],
        cedula: null,
      };
    },
  
    methods: {
      async buscarEstudiante() {
        this.cedula = this.estudiantes.cedula;
  
   
        const estudianteEncontrado = await buscarUsuarioFachada(this.cedula);
  
 
        if (estudianteEncontrado) {
          this.estudiantesTabla.push(estudianteEncontrado);
        } else {
          console.log('Estudiante no encontrado');
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .contenedor-tabla {
    margin-top: 30px;
    width: 500px;
    border: 2px dashed;
  }
  </style>
  