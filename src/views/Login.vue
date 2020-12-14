<template>
  <div class="home">
    <TheLogin />
  </div>
</template>

<script>
// @ is an alias to /src
import TheLogin from '@/components/auth/TheLogin.vue'

export default {
  name: 'Login',
  components: {
    TheLogin
  }
}
</script>
