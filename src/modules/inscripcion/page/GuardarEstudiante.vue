<template>
  <div class="contenedor-page">
    <div>
      <DatoGuardarEstudiante @enviarEstudiante="guardarDato" />
    </div>
    <div>
      <DatoBuscarEstudiante :estudiantes="estudiante" :token="token"/>
    </div>
  </div>
</template>

<script>
import DatoGuardarEstudiante from "../components/DatoGuardarEstudiante.vue";
import DatoBuscarEstudiante from "../components/DatoBuscarEstudiante.vue";

export default {
  components: {
    DatoGuardarEstudiante,
    DatoBuscarEstudiante,
  },

  data() {
    return {
      estudiante: null,
      token:null
    };
  },

  methods: {
    guardarDato(dato,token) {
      this.estudiante = dato;
      this.token = token;
    },
  },
};
</script>

<style scoped>
.contenedor-page {
  margin-top: 30px;
  margin-left: 50px;
}
</style>