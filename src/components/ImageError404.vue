<template class="container">
  <div class="row text-center mt-3">
      <div class="col-12 col-sm-12">
          <div>
              <img :src="imgError" alt="Imagen Error">  
          </div>
          
          <div>
              <button class="btn btn-secondary" @click="backToHome">Volver al inicio</button>
          </div>  
      </div>
  </div>
</template>

<script>
// Importando imagen de error 404
import Error404 from '../assets/error404.jpg.webp';
export default {
    name: 'Error404',
    data () {
        return {
            imgError: Error404
        }
    },

    methods: {
        backToHome() {
            this.$router.push('/');
        }
    }
}
</script>

<style scoped>
img {
    width: 100vw;
    height: 70vh;
}
</style>