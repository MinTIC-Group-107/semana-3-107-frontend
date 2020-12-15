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
            <li class="nav-item">
              <router-link to="/home" class="nav-link">Inicio</router-link>
            </li>

            <li class="nav-item">
              <router-link to="/" class="nav-link" exact>Login</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/register" class="nav-link">Registro</router-link>
            </li>
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
  //
}
</script>

<style lang="scss">
@import '@/assets/scss/app';
</style>
