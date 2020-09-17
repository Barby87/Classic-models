<template>
  <div class="container">
    <p>{{$route.name}}</p>

    <h4 class="font-weight-bold">Orden #{{$route.params.item}}</h4>
    <!-- <p>Ruta: {{$route.path}}</p> -->

    <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
        <li class="nav-item" role="presentation">
            <router-link class="nav-link active" :to='`/general/${this.$route.params.item}`'>General</router-link>
            <!-- <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Home</a> -->
        </li>
        <li class="nav-item" role="presentation">
            <router-link class="nav-link" :to='`/data-client/${this.$route.params.item}`'>Datos Cliente</router-link>
            <!-- <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Profile</a> -->
        </li>
        <li class="nav-item" role="presentation">
            <router-link class="nav-link"  :to='`/products/${this.$route.params.item}`'>Productos</router-link>
            <!-- <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Contact</a> -->
        </li>
    </ul>

    <!-- <div class="tab-content" id="pills-tabContent">
        <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">...</div>
        <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">...</div>
        <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">...</div>
    </div> -->
    
    <router-view></router-view>
  </div>     
</template>

<script>
import { conectionApi } from '@/config/configApi';

export default {
    name: 'DetailOrder',

    mounted() {
        conectionApi(`secure/ordenes/${this.$route.params.item}`).then(response => {
            console.log('response Detalle Orden', response)
            this.$store.dispatch('saveDetailOrder', response);
        }).catch(error => console.error(error));
    }
}
</script>

<style>

</style>