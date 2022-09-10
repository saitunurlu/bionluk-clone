<template>
  <div>
    <div class="flex h-100  w-full ">
      <div v-for="completed in completedBuyerRequests" :key="completed.id">
        <div class=" w-100 mr-7 bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 relative">
          <a href="#">
            <img class="rounded-t-lg" src="@/static/gocukcu.webp" />
          </a>
          <figcaption class="flex justify-center left-1 items-center space-x-3">
            <img class="w-9 h-9 rounded-full" src="@/static/avatar-example.png">
            <div class=" pt-4 font-bold  text-left">
              <div>{{completed.creativeName}}</div>
              <div class="text-md font-bold text-gray-500 ">{{completed.buyer}}</div>
            </div>
          </figcaption>
          <div class="px-5  pb-4">
            <a href="#">
              <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                {{completed.request}}
              </h5>
            </a>
            <div class=" items-center  bg-white -top-48 relative">
              <img src="@/static/star.png" class="w-6 h-6">
              <span
                class="bg-white text-yellow-300 text-2xl font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">{{completed.creativeId}}</span>
              <span class=" text-xl font-bold ">
                ({{completed.commetCount}})
              </span>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-3xl font-bold text-green-400 dark:text-white">599 TL</span>
              <a href="#"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none
                focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Favorilere Ekle</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from "axios";
  export default {

     mounted() {
      const result =  axios.get('https://guresirlercekici.com/api/completedBuyerRequests')
        .then(response => {
          this.completedBuyerRequests = response.data
        })
    },
    data() {
      return {
        completedBuyerRequests: [{}]
      }
    }



  }
</script>