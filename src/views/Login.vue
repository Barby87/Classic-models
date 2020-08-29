<template>
  <div>
      <h1 class="text-center">Login</h1>

      <form class="container">
        <div class="alert alert-danger" role="alert" v-if="error">
          {{error}}
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" v-model="email">
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" v-model="password">
        </div>
        <div class="form-group form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1">
          <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" class="btn btn-primary btn-block" @click.prevent="login">Ingresar</button>
      </form> 
  </div>
</template>

<script>
export default {

  name:'Login',
  data() {
    return {
      password: '',
      email: '',
      error: ''
    }
  },

  methods: {
    login() {
      if (!this.email && !this.password) {
        this.error = 'Debe ingresar los datos del usuario';
      } else if(this.password.length < 6){
        this.error = 'La contraseña debe ser mayor a 6 digitos'
      }else {
        this.$router.push('/');
      }
    }
  }
}
</script>

<style>

</style>