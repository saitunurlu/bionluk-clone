<template>
  <div>
    <div class="flex h-100 w-full">
      <div v-for="populer in PopulerServices" :key="populer.id" >
      <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img class="rounded-t-lg" src="@/static/gocukcu.webp" alt="">
        </a>
        <div class="p-5 text-center">
          <a href="#">
            <h5 class="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white"> {{populer.subName}}</h5>
          </a>
          <p class="mb-1 font-bold text-green-700 dark:text-gray-400">{{populer.serviceProviders}} EkMoney Çalışanı</p>
          <p class="mb-1 font-normal text-gray-700 dark:text-gray-400">Hizmet Veriyor</p>
          
        </div>
      </div>
      </div>
    </div>
  </div>

</template>
<script>
    import axios from"axios"   
    export default{
      mounted(){
        const result = axios.get('https://guresirlercekici.com/api/PopulerServices')
        .then(response=>{
          this.PopulerServices=response.data
        })
      },
      data(){
        return{
          PopulerServices:[{}]
        }
      }
        
    }
</script>