<template>
                <!-- grid sistemi 4 eşit parçaya ayırı -->
  <div class="grid grid-cols-1 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-4"
  >
    <UserIntresetCard
      :data="service"
      v-for="service in services"
      :key="service.id"
    />
  </div>
</template>

<script>
import UserIntresetCard from './UserIntrestCard.vue'
export default {
  components: {
    UserIntresetCard,
  },
  computed: {
    services: function () {
      return this.$store.getters.getServices
    },
  },
}
</script>
