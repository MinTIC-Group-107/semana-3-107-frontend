<template>
  <div class="home">
    <TheRegister />
  </div>
</template>

<script>
// @ is an alias to /src
import TheRegister from '@/components/auth/TheRegister'

export default {
  name: 'Register',
  components: {
    TheRegister
  }
}
</script>
