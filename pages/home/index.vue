<template>
  <div>
    <!-- 1 -->
    <div class="m-0 m-a h-40 p-0 text-center bg-gradient-to-r from-purple-500 to-pink-500 ">
      <div class="text-sm font-bold text-white text-center pt-6">
        Ne Tür Bir Hizmete İhtiyacın Var
      </div>
    </div>
    <!--2-->
    <div class="overflow-hidden relative mt-4">
      <div class="text-sm font-normal text-gray-600 mt-2 mb-2 ">
        Bunlara da <span class="text-md font-bold">İhtiyacın Olabilir</span> :)
      </div>
      <div class="font-normal text-xs  text-gray-600 mt-2 mb-2 ">
        <span class="text- font-light">Web Yazılım</span> satın alanlar aşağıdaki hizmetleri de satın aldılar.
      </div>
      <!--3-->
      <div class="flex h-100  w-full ">
        <div v-for="service in services" :key="service.id">
          <div class=" w-100 mr-7 bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 relative">
            <a href="#">
              <img class="rounded-t-lg" src="@/static/gocukcu.webp" />
            </a>
            <figcaption class="flex justify-center left-1 items-center space-x-3">
              <img class="w-9 h-9 rounded-full" src="@/static/avatar-example.png">
              <div class=" pt-4 font-bold  text-left">
                <div>{{service.creativeName}}</div>
                <div class="text-md font-bold text-gray-500 ">{{service.creativeClass}}</div>
              </div>
            </figcaption>
            <div class="px-5  pb-4">
              <a href="#">
                <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  {{service.creativeAbout}}
                </h5>
              </a>
              <div class=" items-center  bg-white -top-48 relative">
                <img src="@/static/star.png" class="w-6 h-6">
                <span
                  class="bg-white text-yellow-300 text-2xl font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">{{service.rating}}</span>
                <span class=" text-xl font-bold ">
                  ({{service.commetCount}})
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
    <div class="h-20 bg-gray-100">

    </div>
    <!--4-->
    <div class="flex flex-col items-center max-w-sm rounded bg-white ease-in duration-300">
      <div class=" max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <p class=" mt-6  mb-6  text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Sana Uygun <span
            data-v-43e19cdc="">Alıcı İstekleri</span></p>
        <a href="#">
          <img class="" src="https://gcdn.bionluk.com/site/general/il-buyer-request.svg">
        </a>
        <div class="p-5">
          <a href="#">
          </a>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Sana ve yeteneklerine en uygun alıcı isteklerini
            gösterebilmemiz için, seni tanımamız lazım. Bu yüzden en az 1 adet iş ilanı oluşturmalısın.</p>
          <a href="#"
            class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            İş İlanı Oluştur
          </a>
        </div>
      </div>
    </div>
    <div class="h-20 bg-gray-100">
    </div>
    <!--5-->
    <Services />
    <div class="h-20 bg-gray-100">
    </div>
    <PopulerServices/>
  </div>
</template>

<script>
  import axios from "axios"
  import Services from "@/components/Services/Services.vue"
  import PopulerServices from "@/components/PopulerServices/PopulerServices.vue"

  export default {
    mounted() {
      const result = axios.get("https://guresirlercekici.com/api/services")
        .then(response => {
          this.services = response.data;
        });
    },
    data() {
      return {
        services: [{}]
      };
    },
    components: {
    Services,
    PopulerServices,
    
}
  }
</script>