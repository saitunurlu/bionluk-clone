<template>
    <div class="flex">
        <div class="hidden sticky top-0 w-3/12 2xl:block xl:block lg:block">
            <Sidebar />
        </div>
        <div class="w-full 2xl:w-9/12 xl:w-10/12 lg:w-10/12 px-5 py-8">
            <nuxt-child />
        </div>
    </div>
</template>


<script>
import Navbar from '@/components/Navbar/Navbar.vue'
import Sidebar from '@/components/Sidebar/Sidebar.vue'


export default {
    data() {
        return {

        }
    },
    components: {
        Navbar,
        Sidebar
        
    }
}
</script>