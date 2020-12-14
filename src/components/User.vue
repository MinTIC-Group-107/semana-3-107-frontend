<template>
  <div>
    <div>
      <h2>Bienvenido</h2>
      <p>{{ user.name }} -- {{ user.email }}</p>
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
