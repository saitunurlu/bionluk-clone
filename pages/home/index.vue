<template>
  <div>
    <div>
      <UserIntrestCards />
      <UserIntrestCards />
      <UserIntrestCards />
      <UserIntrestCards />
      <UserIntrestCards />
      <UserIntrestCards />
      <UserIntrestCards />
    </div>
  </div>
</template>

<script>
import Services from '@/components/Services/Services.vue'
import PopulerServices from '@/components/PopulerServices/PopulerServices.vue'

import UserIntresetCards from '@/components/UserIntrestCards/UserIntrestCards.vue'

export default {
  components: {
    Services,
    PopulerServices,
    UserIntresetCards,
  },
}
</script>
