<template>
  <div class="w-screen h-screen">
    <div class="">
      <Navbar />
    </div>
    <nuxt />
    <ControlPanel class="controlPanel" />
  </div>
</template>

<script>
import ControlPanel from '~/components/ControlPanel/ControlPanel.vue'
export default {
    components: { ControlPanel }
}
</script>

<style scoped>

@media screen and (max-width: 888px) {
    .controlPanel {
      display:block;
    }
}
@media screen and (min-width:889px) {
    .controlPanel {
      display: none;
    }
}

</style>