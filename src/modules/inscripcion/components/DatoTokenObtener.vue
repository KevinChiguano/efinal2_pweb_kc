<template>
  <div class="contenedor-token">
    <label for="basic-url" class="form-label">Semilla</label>
    <div class="input-group mb-3">
      <input
        v-model="semilla"
        type="text"
        class="form-control"
        id="basic-url"
        aria-describedby="basic-addon3"
      />
    </div>
    <label for="basic-url" class="form-label">Tiempo de vigencia</label>
    <div class="input-group mb-3">
      <input
        v-model="tiempo"
        type="number"
        class="form-control"
        id="basic-url"
        aria-describedby="basic-addon3"
      />
    </div>
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
    <button @click="obtenerToken" type="button" class="btn btn-outline-primary">
      Generar
    </button>
  </div>
</template>

<script>
import { obtenerTokenFachada } from "../helpers/ClienteToken.js";

export default {
  data() {
    return {
      semilla: null,
      tiempo: null,
      token: null,
    };
  },

  methods: {
    async obtenerToken() {
      const dato = {
        username: "kevin",
        password: "password",
      };

      this.token =  await obtenerTokenFachada(dato);

      localStorage.setItem('token', this.token);
    },
  },
};
</script>

<style scoped>

.contenedor-token{
    width: 500px;
}
</style>