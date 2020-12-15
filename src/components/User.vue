<template>
  <div class="card mt-3 col-md-6 mx-auto">
    <div class="card-header">
      <h5 class="text-center">Bienvenid@</h5>
    </div>
    <div class="card-body">
      <p class="card-text">{{ user.name }}</p>
      <p class="card-text text-secondary"><a :href="`mailto:${user.email}`" class="card-link"><i>{{ user.email }}</i></a></p>
      <button class="btn btn-warning" @click.prevent="logout">Cerrar sesión</button>
    </div>
  </div>
</template>

<script>
import VueJwtDecode from 'vue-jwt-decode'

export default {
  name: 'User',
  data() {
    return {
      user: VueJwtDecode.decode(localStorage.getItem('jwt'))
    }
  },
  methods: {
    logout() {
      this.user = null,
      localStorage.removeItem('jwt')
      this.$router.push('/')
    }
  }
}
</script>
