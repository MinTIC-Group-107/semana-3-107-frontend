<template>
  <div>
    <div class="card mt-3 col-md-6 mx-auto mb-4">
      <div class="card-header">
        <h5 class="text-center">Login</h5>
      </div>
      <div class="card-body">
        <form @submit.prevent="loginUser" v-if="!tokenExist">
          <div class="mb-3">
            <label for="email" class="form-label">Email:</label>
            <input type="email"
              class="form-control"
              id="email"
              aria-describedby="emailHelp"
              v-model="login.email"
            >
            <div id="emailHelp" class="form-text">No compartiremos tu email con nadie mas</div>
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Constraseña:</label>
            <input
              type="password"
              class="form-control"
              id="password"
              v-model="login.password"
            >
          </div>
          <button type="submit" class="btn btn-primary w-100 text-light">Enviar</button>
        </form>
        <p class="card-text" v-else>Usted ya se encuentra autenticado</p>
      </div>
    </div>
    <!-- <pre>{{ login }}</pre> -->
	</div>
</template>

<script>
import Swal from 'sweetalert2'
import VueJwtDecode from 'vue-jwt-decode'

export default {
  name: 'TheLogin',
  data() {
    return {
      login: {
        email: '',
        password: ''
      },
    }
  },
  computed: {
    tokenExist() {
      return localStorage.getItem('jwt') ? true : false
    }
  },
  methods: {
    async loginUser() {
      try {
        let response = await this.$http.post('/api/auth/signin', this.login)
        console.log(response.data)
        let token = response.data.accessToken
        let decoded = VueJwtDecode.decode(token)
        console.log('decoded: ', decoded)
        let user = decoded

        localStorage.setItem('jwt', token)

        if(token) {
          let result = await Swal.fire({
            icon: 'success',
            title: 'Bienvenid@ ' + this.getFirstWord(user.name),
            text: 'Te has autenticado correctamente',
          })
          if (result.isConfirmed) {
            this.$router.push('/home')
          }
        }

      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.response.data.message
        })
      }
    },
    getFirstWord(str) {
      let spaceIndex = str.indexOf(' ');
      return spaceIndex === -1 ? str : str.substr(0, spaceIndex);
    }
  }
}
</script>
