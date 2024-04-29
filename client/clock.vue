<template>
  <k-status>
    {{ time }}
  </k-status>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  let time = ref(new Date().toLocaleString())
  setInterval(() => {
    time.value = new Date().toLocaleString()
  }, 5)
</script>