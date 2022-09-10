<template>
  <div class="w-full h-full flex flex-col">
    <div class="grid grid-cols-12 border-b h-4/6 items-center">
      <div class="col-start-1 col-end-3 flex justify-center">
        <Logo />
      </div>
      <div class="col-start-3 col-end-10 flex justify-center">
        <form @submit.prevent="onSearchHandle" class="w-8/12">
          <input
            type="text"
            placeholder="Aramak için birşeyler yazın..."
            class="input"
          />
        </form>
      </div>
      <div>
        <div class="col-start-10 col-end-13 flex justify-start items-center">
          <button
            class="bg-none outline-none text-gray-600 hover:text-gray-800 transition-all"
          >
            <list-icon></list-icon>
          </button>

          <div class="relative flex justify-center">
            <button
              class="mx-6 bg-none outline-none text-gray-600 hover:text-gray-800 transition-all relative"
              @click="messageDropdown"
            >
              <message-icon></message-icon>
              <Badge />
            </button>
            <Dropdown title="Mesajlar" :isShow="isMessageDropdownShow" />
          </div>

          <div class="relative flex justify-center">
            <button
              id="dropdownNotificationButton"
              data-dropdown-toggle="dropdownNotification"
              @click="notificationDropdown"
              class="bg-none outline-none text-gray-600 hover:text-gray-800 transition-all mr-4"
            >
              <bell-icon></bell-icon>
            </button>
            <Dropdown
              title="Bildirimler"
              :isShow="isNotificationDropdownShow"
            />
          </div>

          <div
            class="px-5 py-3 border-l border-gray-300 flex justify-center gap-2 items-center"
          >
            <img src="@/static/avatar-example.png" class="avatar" />
            <div
              class="font-semibold text-gray-800 flex gap-2 items-center hover:text-gray-700 cursor-pointer"
              @click="accountDropdown"
            >
              <span class="text-gray-600">{{ username }}</span>
              <arrow-down-icon class="text-gray-400"></arrow-down-icon>
            </div>
            <Dropdown
              :isShow="isAccountDropdownShow"
              :title="username"
              class="mt-5"
            />
          </div>
        </div>
      </div>
    </div>
    <div
      class="justify-center items-center min-h-[2/6] w-full flex-wrap py-4 hidden 2xl:flex xl:flex lg:flex"
    >
      <div
        class="menuName text-gray-600 hover:text-gray-800 h-full cursor-pointer transition-all border-b-2 hover:border-gray-400 border-transparent relative"
        :class="{
          'mx-6': categories.length < 7,
          'mx-4': categories.length < 10,
          'mx-3': categories.length < 15,
          'mx-2': categories.length < 20,
        }"
        v-for="category in categories"
        :key="category.id"
      >
        <span>
          {{ category.name }}
        </span>
        <Menu :subCategories="category.subCategories" />
      </div>
    </div>
  </div>
</template>
<script>
import Logo from '../Logo/Logo.vue'
import Badge from '../Badge/Badge.vue'
import Menu from '../Menu/Menu.vue'
import Dropdown from '../Dropdown/Dropdown.vue'
import axios from 'axios'
export default {
  components: {
    Logo,
    Badge,
    Menu,
    Dropdown,
  },

  async mounted() {
    const result = await axios
      .get('https://guresirlercekici.com/api/get_all_data')
      .then((response) => {
        this.categories = response.data
      })
  },
  data() {
    return {
      categories: [
        {
          subCategories: [],
        },
      ],

      isNotificationDropdownShow: false,
      isMessageDropdownShow: false,
      isAccountDropdownShow: false,
      username: 'yusuf.tekinx',
    }
  },
  methods: {
    notificationDropdown() {
      this.isNotificationDropdownShow = !this.isNotificationDropdownShow
    },
    messageDropdown() {
      this.isMessageDropdownShow = !this.isMessageDropdownShow
    },
    accountDropdown() {
      this.isAccountDropdownShow = !this.isAccountDropdownShow
    },
  },
}
</script>
