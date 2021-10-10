<template>
    <div>
    <b-button v-b-modal.modal-inscripcion>inscripción</b-button>
    <b-modal id="modal-inscripcion" size = "l" title="inscripción">
      <FormInscripciones/>
    </b-modal>
  </div>
</template>

<script>
import FormInscripcion from './components/FormInscripcion.vue'
export default {
  name:'ModalInscripcion',
    components: {
    FormInscripcion
  }
}
</script>