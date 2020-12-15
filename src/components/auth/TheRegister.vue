<template>
  <div>
    <div class="card mt-3 col-md-6 mx-auto">
      <div class="card-header">
        <h5 class="text-center">Registro</h5>
      </div>
      <div class="card-body">
        <form @submit.prevent="registerUser">
          <div class="mb-3">
            <label for="name" class="form-label">Nombre:</label>
            <input
              class="form-control"
              id="name"
              aria-describedby="emailHelp"
              v-model="form.name"
              required
            >
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Email:</label>
            <input type="email"
              class="form-control"
              id="email"
              aria-describedby="emailHelp"
              v-model="form.email"
              required
            >
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Constraseña:</label>
            <input
              type="password"
              class="form-control"
              id="password"
              v-model="form.password"
              required
            >
          </div>
          <button type="submit" class="btn btn-primary w-100 text-light">Enviar</button>
        </form>
      </div>
    </div>
	</div>
</template>

<script>
import Swal from 'sweetalert2'
import VueJwtDecode from 'vue-jwt-decode'

export default {
  name: 'TheRegister',
  data() {
    return {
      form: {
        name: '',
        email: 'luisprmat@hotmail.com',
        password: '11413115'
      },
    }
  },
  methods: {
    async registerUser() {
      try {
        let response = await this.$http.post('/api/auth/register', this.form)
        console.log(response.data)

        Swal.fire({
          icon: 'success',
          title: `Muy bien ${this.form.name} !`,
          text: response.data.message,
        })
        this.$router.push('/')
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.response.data.message
        })
      }
    },
  }
}
</script>
