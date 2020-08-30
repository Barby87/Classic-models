<template>
  <div>
    <div>
      <!-- <NavBar1/> -->
      <NavBar2/>
    </div>
    <router-view class="py-5"/>
  </div>
</template>

<script>
// Componentes
// import NavBar1 from './components/NavBar1.vue';
import NavBar2 from './components/NavBar2.vue';
export default {
  name: 'App',
  components: {
    // NavBar1,
    NavBar2
  },
}
</script>

<style lang="scss">

</style>
