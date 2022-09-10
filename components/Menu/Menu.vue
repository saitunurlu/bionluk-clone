<template>
  <div
    v-if="subCategories && subCategories.length > 0"
    class="menu hidden w-min-[72px] w-[72px] bg-white shadow-md rounded-md absolute top-7 left-0 py-3 px-2 text-sm"
  >
    <!-- genişlik 72 * 4 = 288px , yükseklik otomatik ayarlanır, minimum yükseklik 96px olur, bg => arkaplan rengi için kullanılır,
    rounded köşelerin yumuşatılması için kullanılır. sm-md-lg-xl-2xl-3xl büyüklükleri vardır. absolute componentin x ve y kordinatındaki yerini rahatça belirlemek için kullanılır.
    top ya da bottom y kordinatı için, left yada right x korinatı için. p => padding demektir. İçerden boşlık verir.-->

    <MenuItem
      :category="category"
      v-for="category in subCategories"
      :key="category.id"
    />
  </div>
</template>

<script>
import MenuItem from './MenuItem.vue'
export default {
  components: {
    MenuItem,
  },
  props: {
    subCategories: {
      type: Array,
      required: false,
    },
  },
}
</script>
