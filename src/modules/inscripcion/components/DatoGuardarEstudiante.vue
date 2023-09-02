<template>
  <div class="contenedor-guardar">
    <label for="basic-url" class="form-label">Token</label>
    <div class="input-group mb-3">
      <input
        v-model="token"
        type="text"
        class="form-control"
        id="basic-url"
        aria-describedby="basic-addon3"
      />
    </div>
    <label for="basic-url" class="form-label">Nombre</label>
    <div class="input-group mb-3">
      <input
        v-model="nombre"
        type="text"
        class="form-control"
        id="basic-url"
        aria-describedby="basic-addon3"
      />
    </div>
    <label for="basic-url" class="form-label">Apellido</label>
    <div class="input-group mb-3">
      <input
        v-model="apellido"
        type="text"
        class="form-control"
        id="basic-url"
        aria-describedby="basic-addon3"
      />
    </div>
    <label for="basic-url" class="form-label">Cedula</label>
    <div class="input-group mb-3">
      <input
        v-model="cedula"
        type="text"
        class="form-control"
        id="basic-url"
        aria-describedby="basic-addon3"
      />
    </div>
    <button @click="guardarEstudiante" type="button" class="btn btn-outline-primary">
      Guardar
    </button>
  </div>
</template>

<script>
import { guardarUsuarioFachada } from "../helpers/ClienteInscripcion.js";

export default {
  data() {
    return {
      token: null,
      nombre: null,
      apellido: null,
      cedula: null,
      estudiante: null,
    };
  },

  methods: {
    guardarEstudiante() {
      const dato = {
        nombre: this.nombre,
        apellido: this.apellido,
        cedula: this.cedula,
      };

      this.estudiante = dato;

      this.$emit("enviarEstudiante", dato);


      guardarUsuarioFachada(dato, this.token);
    },
  },

  emits:['enviarEstudiante']

};
</script>

<style scoped>

.contenedor-guardar{
    width: 500px;
    border: 2px dashed;
}

</style>