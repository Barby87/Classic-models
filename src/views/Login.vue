<template>
  <div>
      <h1 class="text-center mb-5">Login</h1>
      <div class="row d-flex justify-content-center">
        <div class="col-md-4">
          <form class="container">
            <div class="alert alert-danger" role="alert" v-if="error">
              {{error}}
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Correo electrónico</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" v-model="user">
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Contraseña</label>
              <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" v-model="password">
            </div>
            <button type="submit" class="btn btn-primary btn-block" @click.prevent="login">Ingresar</button>
          </form> 
        </div>
      </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex';

export default {
  name:'Login',
  data() {
    return {
      password: '',
      user: '',
      error: '',
      regEx: /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/
    }
  },

  methods: {
    ...mapActions([
      'guardaToken',
    ]),

    login() {
      if (!this.user || !this.password) {
        this.error = 'Debe ingresar los datos del usuario';
      } else if(!this.regEx.test(this.user)) {
        this.error = 'Ingrese un correo válido';
      } else {
         this.guardaToken(this.user, this.password).then(()=>{
           this.error= '';
           this.$router.push('/'); 
           console.log('token ok');
        });
      }
    }
  }
}
</script>

<style>

</style>