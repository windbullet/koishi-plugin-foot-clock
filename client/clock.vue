<template>
  <k-status>
    {{ time }}
  </k-status>
</template>

<script lang="ts" setup>
  import { useConfig } from '@koishijs/client';
  import { ref } from 'vue'
  const config = useConfig()
  const options = {
    weekday: "long",
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  } as const;

  let time = ref(new Date().toLocaleString(config.value.locale, options))
  setInterval(() => {
    time.value = new Date().toLocaleString(config.value.locale, options)
  }, 5)
</script>