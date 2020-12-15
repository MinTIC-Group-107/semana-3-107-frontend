<template>
  <div id="app">
    <nav class="navbar navbar-expand-sm navbar-dark bg-primary">
      <div class="container-fluid">
        <a class="navbar-brand h1 mb-0" href="/"><img src="@/assets/logo.png" alt="Grupo 107" height="40px"></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <!-- <template v-if="user"> -->
              <li class="nav-item">
                <router-link to="/home" class="nav-link">Inicio</router-link>
              </li>
              <!-- <li class="nav-item dropdown"> -->
                <!-- <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"> -->
                  <!-- {{ firstName }} -->
                <!-- </a> -->
                <!-- <ul class="dropdown-menu" aria-labelledby="navbarDropdown"> -->
                  <!-- <li><a class="dropdown-item" href="#">Action</a></li> -->
                  <!-- <li><a class="dropdown-item" href="#">Another action</a></li> -->
                  <!-- <li><hr class="dropdown-divider"></li> -->
                  <!-- <li><a class="dropdown-item" href="#" @click.prevent="logout">Cerrar sesión</a></li> -->
                <!-- </ul> -->
              <!-- </li> -->
            <!-- </template> -->
            <!-- <template v-else> -->
              <li class="nav-item">
                <router-link to="/" class="nav-link" exact>Login</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/register" class="nav-link">Registro</router-link>
              </li>
            <!-- </template> -->
          </ul>
        </div>
      </div>
    </nav>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
require('bootstrap')

export default {
  computed: {
    firstName() {
      if(this.user) {
        return this.getFirstWord(this.user.name)
      }
      return null
    }
  },
  methods: {
    // logout() {
    //   this.user = null,
    //   localStorage.removeItem('jwt')
    //   // this.$router.push('/')
    // },
    // getFirstWord(str) {
    //   if(str !== '') {
    //     let spaceIndex = str.indexOf(' ')
    //     return spaceIndex === -1 ? str : str.substr(0, spaceIndex)
    //   }
    // }
  },
}
</script>

<style lang="scss">
@import '@/assets/scss/app';
</style>
