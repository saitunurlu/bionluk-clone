<template>
  <div class="w-full shadow-lg transition-all"
    :class="{'h-28':windowWidth >= 1024,'h-14':windowWidth < 1024}"
  >
    <DefaultNavbar v-if="windowWidth >= 1024" />
    <MobileNavbar v-else />
  </div>
</template>
<script>
import DefaultNavbar from './DefaultNavbar.vue'
import MobileNavbar from './MobileNavbar.vue'
export default {
  components: {
    DefaultNavbar,
    MobileNavbar,
  },
  data(){
    return {
        windowWidth: process.client ? window.innerWidth : 1024
    }
  },
  beforeMount() { // TODO: Navbar oluyor ControlPanel olmuyor bakılacak
    window.onresize = () => {
      this.windowWidth = window.innerWidth
    }
  },
}
</script>
