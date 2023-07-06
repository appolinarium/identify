<script setup lang="ts">
  const navigations = ref([
    'account',
    'users',
    'roulette',
    'rooms',
    'wall'
  ])
</script>

<template>
  <h2>Navigation</h2>
  <ul v-for="nav in navigations">
    <li>
      <NuxtLink :to="nav">{{ nav }}</NuxtLink>
    </li>
  </ul>
  <slot />
</template>