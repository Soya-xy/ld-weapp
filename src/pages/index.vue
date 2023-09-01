<script setup lang="ts">
getUser()
async function getUser() {
  try {
    const response = await $fetch.get('/todos/1', {}, {
      headers: {
        'content-type': 'application/json',
      },
    })
    console.log('🚀 ~ file: index.vue:10 ~ getUser ~ response:', response)
  }
  catch (error) {
    console.error(error)
  }
}
</script>

<template>
  <InputEntry />
</template>

<style>
</style>

<route type="home" lang="json">
{}
</route>
