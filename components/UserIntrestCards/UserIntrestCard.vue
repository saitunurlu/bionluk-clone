<template>
  <div class="flex flex-col rounded-lg h-64 shadow-lg gap-4">
    <img
      class="w-full h-1/2 rounded-xl rounded-b-none"
      src="@/static/staticimage.png"
    />
    <div class="flex flex-col mt-3">
      <div class="flex justify-between gap-3 px-2">
        <div class="flex items-center gap-1 justify-center">
          <img src="@/static/avatar-example.png" class="rounded-full w-7 h-7" />
          <span class="font-semibold"> {{data.creativeName}} </span>
        </div>
        <span class="text-2xl text-red-400 font-semibold"> 30 TL </span>
      </div>
      <div class="px-2">
        <span class="font-semibold text-sm">
          {{data.creativeAbout}}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        data: {
            required:true,
            type:Object,
        }
    }
}
</script>
