<template>
  <form @submit="onSubmit">
    <input type="email" v-model="email" />
    <input
      v-model="enterCompetition"
      value="yes"
      type="radio"
      name="enterCompetition"
    />
    <input
      v-model="enterCompetition"
      value="no"
      type="radio"
      name="enterCompetition"
    />
    <button />
  </form>
</template>

<script>
export default {
  data () {
    return {
      email: null,
      enterCompetition: 'yes'
    }
  },
  methods: {
    onSubmit () {
      this.axios.post('http://demo.com/validate', {
        email: this.email,
        enterCompetition: this.enterCompetition
      })
      this.$emit('form-submitted')
    }
  }
}
</script>
