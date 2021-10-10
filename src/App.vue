<template>
  <div id="app">
    <Header/> 
    <Main/>
    <Ubicacion/>
    <Entrenadores/>
    <FormInscripcion/>
    <Crud/>
    <Footer/>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/notas">Notas</router-link>
    </div>
    <router-view/> -->
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Main from  './components/Main.vue'
import Ubicacion from './components/Ubicacion.vue'
import Entrenadores from './components/Entrenadores.vue'
import FormInscripcion from './components/FormInscripcion.vue'
import Footer from './components/Footer.vue'
import Crud from './components/Crud.vue'
export default {
  name: 'App',
  
  data: () => ({

  }),
  components:{
    Header,
    Main,
    Ubicacion,
    Entrenadores,
    FormInscripcion,
    Crud,
    Footer,
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
} */
</style>
