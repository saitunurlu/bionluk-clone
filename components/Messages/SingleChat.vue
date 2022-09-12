<template>

    <div class="w-full flex justify-center items-center px-3 py-2 hover:bg-gray-300 cursor-pointer transition-all">
        <div class="w-4/12 flex justify-center">
            <img :src="user.picture" class="w-11 h-11 rounded-full" />
        </div>
        <div class="inline-flex flex-col items-start w-full">
            <h5 class="font-semibold text-gray-800">{{user.name}}</h5>
            <small class="text-gray-700 text-xsm font-normal opacity-70">
                {{user.lastChat}}
            </small>
        </div>
    </div>



</template>

<script>
export default {
    props: {
        user: {
            type:Object,
            required:true
        }
    }
}
</script>