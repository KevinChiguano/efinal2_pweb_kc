<template>
    <div class="navigation">
      <router-link to="/generarToken" class="nav-link">Generar Token</router-link>
      <router-link to="/guardarEstudiante" class="nav-link">Estudiante</router-link>
    </div>
  </template>
  
  <script>
  export default {};
  </script>
  
  <style scoped>
  .navigation {
    background-color: #333; 
    padding: 10px; 
  }
  
  .nav-link {
    text-decoration: none; 
    color: #fff; 
    margin-right: 20px; 
    font-weight: bold; 
  }
  
  .nav-link:hover {
    text-decoration: underline; 
  }
  </style>
  