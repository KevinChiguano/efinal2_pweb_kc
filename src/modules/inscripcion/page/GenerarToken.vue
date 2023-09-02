<template>

<div class="contenedor-page-token">
    <DatoTokenObtenerVue/>
</div>
    
  
</template>

<script>
import DatoTokenObtenerVue from '../components/DatoTokenObtener.vue';



export default {
    components:{
        DatoTokenObtenerVue
    }
};
</script>

<style scoped>

.contenedor-page-token{
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>