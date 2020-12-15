<template>
  <li>
    <strong>{{ member.nombre }}: </strong>
    <a :href="emailRef" class="text-warning"><i>{{ member.email }}</i></a>
  </li>
</template>

<script>
export default {
  props: ["member"],
  computed: {
    emailRef() {
      return `mailto:${this.member.email}`
    }
  }
}
</script>
