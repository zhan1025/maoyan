<template>
  <div>
    <h1>
      cinema page
    </h1>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions('cinema', ['getCinemaList'])
  },
  created () {
    this.getCinemaList()
  }
}
</script>
