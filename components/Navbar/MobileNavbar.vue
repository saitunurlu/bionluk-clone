<template>

    <div class="w-full h-14">
        <div class="h-full flex justify-center items-center">
            <nuxt-link to="/home">
                <Logo />
            </nuxt-link>
        </div>
    </div>


</template>

<script>
import Logo from '../Logo/Logo.vue'
export default {
    components: {
        Logo
    }
}
</script>