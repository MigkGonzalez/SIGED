<template>
  <div class="home">
    <FormInscripcion/>
  </div>
</template>

<script>
// @ is an alias to /src

import FormInscripcion from '@/components/FormInscripcion.vue'
export default {
  name: 'Home',
  components: {
    FormInscripcion
  }
}
</script>
