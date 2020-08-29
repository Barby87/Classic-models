<template>
  <div>
    <div>
      <NavBar/>
    </div>
    <router-view class="py-5"/>
  </div>
</template>

<script>
// Componentes
import NavBar from './components/NavBar.vue';
export default {
  name: 'App',
  components: {
    NavBar
  },
}
</script>

<style lang="scss">

</style>
