<template>
  <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark"> 
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <router-link class="nav-link" to='/'>Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to='/orders'>Ordenes</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to='/inventory'>Inventario</router-link>
                </li>
            </ul>
            <span>
                <ul class="navbar-nav ml-auto">
                    <li>
                        <router-link class="nav-link" to='/profile'>Profile</router-link>
                    </li>
                    <li>
                        <a class="nav-link" href="#" @click="logout">Logout</a>
                    </li>
                </ul>
            </span>
        </div>
      </nav>
  </div>
</template>

<script>
import {mapActions} from 'vuex';

export default {
    methods: {
        ...mapActions([
            'resetToken',
        ]),

        logout() {
            this.resetToken();
            this.$router.push('/login');
        }
    }
}
</script>

<style>
.jumbotron {
    background-color: #fff!important;
}
</style>