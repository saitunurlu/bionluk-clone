<template>
  <div>
    <Navbar />
    <nuxt />
    <ControlPanel />
  </div>
</template>

<script>
import ControlPanel from '~/components/ControlPanel/ControlPanel.vue'
export default {
    // data() {
    //     return {
    //         windowWidth2: process.client ? window.innerWidth : 1023,
    //     };
    // },
    // beforeMount() {
    //     window.onresize = () => {
    //         this.windowWidth2 = window.innerWidth;
    //     };
    // },
    components: { ControlPanel }
}
</script>
