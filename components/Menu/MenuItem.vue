<template>
    <div class="hover:bg-gray-100 transition-all px-2 py-1 rounded-tr-md rounded-br-md border-l-3 border-white hover:border-indigo-700 ">
        {{category.name}}
    </div>
</template>

<script>
export default {
    props: {
        category: {
            type:Object,
            required:false
        }
    }
}
</script>