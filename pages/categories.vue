<template>
    <div class="py-4 px-2">
        <ul class="w-full rounded-lg bg-gray-200 py-3">
            <h4 class="text-gray-800 border-b border-gray-300 font-semibold text-lg px-3 pb-2">
                Kategoriler
            </h4>
            <li
                v-for="category in categories" :key="category.id"
                class="
                transition-all
                py-2 px-3 my-1 cursor-pointer border-l-2 border-red-300 hover:border-red-500 hover:bg-gray-300
                "
            >
                {{category.name}}
            </li>

        </ul>
    </div>

</template>

<script>
export default {
    computed: {
        categories: function(){
            return this.$store.getters.getCategories;
        }
    }
}
</script>