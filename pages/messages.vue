<template>

    <div class="flex h-96">
        <div class="overflow-y-auto max-h-full bg-gray-200 w-20 2xl:w-1/3 xl:w-1/3 lg:w-1/3 h-full transition-all duration-500 flex justify-center">
            <div class="flex items-center justify-start flex-col gap-x-3">
                <SingleChat :user="user" v-for="user in profile.friends" :key="user.id" />
            </div>
        </div>
        <div class="bg-gray-50 w-full">
            Sağ
        </div>
    </div>

</template>


<script>
import SingleChat from '@/components/Messages/SingleChat.vue'
export default {
    created(){
        console.log(this.messages)
    },
    components: {
        SingleChat
    },
    computed: {
        profile: function(){
            return this.$store.getters.getMessages.profile;
        }
    }
}
</script>