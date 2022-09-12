<template>
  <div class="w-full shadow-lg transition-all"
  >
    <DefaultNavbar class="desktop" />
    <MobileNavbar class="mobile" />
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
}
</script>

<style scoped>

@media screen and (max-width:1023px) {
  .mobile {
    display:block;
  }
  .desktop {
    display:none;
  }
}
@media screen and (min-width:1024px) {
    .mobile {
      display: none;
    }
    .desktop {
      display: block;
    }
}


</style>