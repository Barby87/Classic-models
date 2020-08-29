<template>
  <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <div class="container">
                <router-link class="navbar-brand font-weigth-bold shadows" to='/'>Classic Models</router-link>
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
                                <router-link class="nav-link" to='/login'>Logout</router-link>
                            </li>
                        </ul>
                    </span>
                </div>
          </div>
      </nav>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>