<template>
  <div id="app" class="d-flex flex-column justify-content-between h-screen">
    <nav class="navbar navbar-expand-sm navbar-dark bg-primary">
      <div class="container-fluid">
        <router-link class="navbar-brand h1 mb-0" to="/"><img src="@/assets/logo.png" alt="Grupo 107" height="40px"></router-link>
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
    <div class="container w-100">
      <router-view/>
    </div>

    <!-- Pie de página -->
    <div class="container-fluid bg-secondary text-white">
      <footer class="container py-3">
        <div class="row">
          <div class="col-md-6">
            <h4 class="footer-info-title">Grupo 107</h4>
            <p>Este sitio ofrecerá servicios de capacitación a las empresas para sus procesos de inducción aplicando realidad virtual y aumentada.</p>
            <div class="d-flex justify-content-between align-items-baseline">
              <p>Ver en GitHub:</p>
              <a href="https://github.com/MinTIC-Group-107/semana-3-107" class="btn btn-outline-light ml-2 mr-3"><i class="fab fa-github"></i> Backend</a>
              <a href="https://github.com/MinTIC-Group-107/semana-3-107-frontend" class="btn btn-outline-light ml-2 mr-3"><i class="fab fa-github"></i> Frontend</a>
            </div>
          </div>
          <div class="col-md-6">
            <h4>Contacto</h4>
            <ul>
              <footer-member v-for="member in members" :key="member.codigo" :member="member"/>
            </ul>
          </div>
        </div>
        <div class="text-center bg-gray py-2">
          <p class="mb-0">&copy; 2020 - MinTIC - Universidad Tecnológica de Pereira - <strong>Grupo 107</strong></p>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
require('bootstrap')
import FooterMember from './components/FooterMember'
import members from './members'

export default {
  components: {
    FooterMember
  },
  data() {
    return {
      members: []
    }
  },
  created() {
    this.members = members
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/app';

.h-screen {
  height: 100vh;
}
</style>
