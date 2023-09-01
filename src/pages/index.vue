<script setup lang="ts">
const { subject } = useNats()
getUser()
async function getUser() {
  try {
    const newId = subject('subject.a.b', (e, id) => {
      console.log(e, id)
    })
    const newId2 = subject('subject.a.b', (e, id) => {
      console.log(e, id)
    })
    const newId3 = subject('subject.a.b', (e, id) => {
      console.log(e, id)
    })

    console.log('🚀 ~ file: index.vue:9 ~ getUser ~ newId:', newId)

    await $fetch.get('/todos/1', {}, {
      headers: {
        'content-type': 'application/json',
      },
    })
  }
  catch (error) {
    console.error(error)
  }
}
const ddd = ref(123)

setTimeout(() => {
  ddd.value = 12233
}, 3000)
</script>

<template>
  <InputEntry />
</template>

<style>
</style>

<route type="home" lang="json">
{}
</route>
