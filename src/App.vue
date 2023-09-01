<script setup lang="ts">
onLaunch(() => {
  initNats()
})
</script>

<style>
/* #ifdef APP-NVUE */
@import './tmui/scss/nvue.css';
/* #endif */
/* #ifndef APP-NVUE */
@import './tmui/scss/noNvue.css';
/* #endif */
</style>
