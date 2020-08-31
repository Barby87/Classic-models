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
              <label for="exampleInputEmail1">Email address</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" v-model="user">
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
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
      error: ''
    }
  },

  methods: {
    ...mapActions([
      'guardaToken',
      ]),

    login() {
      if (!this.user && !this.password) {
        this.error = 'Debe ingresar los datos del usuario';
      }else {
         this.guardaToken(this.user, this.password).then(()=>{
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