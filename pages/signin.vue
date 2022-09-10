<template>
  <div class="w-full h-screen flex flex-col items-center">
    <div class="relative top-0 left-0 w-full">
      <OnlyLogo />
    </div>

    <div
      class="py-5 w-full h-full inline-flex flex-col justify-center 2xl:w-1/3 xl:w-1/3 lg:w-1/2 md:8/12 sm:10/12"
    >
      <FacebookButton class="hidden" />
      <GoogleButton class="hidden" />
      <div class="w-full inline-flex justify-center my-5 relative hidden">
        <hr class="w-1/2 border-1 border-gray-300" />
        <span class="absolute -top-3 bg-white px-5"> veya </span>
      </div>
      <div class="mx-3">
        <form
          @submit.prevent="onLoginHandle"
          class="flex flex-col items-center"
        >
          <input
            v-model="logindata.username"
            type="text"
            class="input mb-6 mt-3"
            placeholder="Kullanıcı Adı"
            required
          />
          <input
            v-model="logindata.password"
            type="password"
            class="input mb-6"
            placeholder="Şifre"
            required
          />
          <div class="flex justify-end w-full -m-4">
            <nuxt-link
              to="/reset"
              class="font-semibold text-gray-500 transition-all hover:text-gray-700"
            >
              Şifremi Unuttum
            </nuxt-link>
          </div>
          <button
            class="btn btn-md btn-gray my-7 inline-flex justify-center items-center"
          >
            <img v-if="loading" src="@/static/loading-dark.svg" class="w-7" />
            <span v-else> Oturum Aç </span>
          </button>
          <div class="text-center my-3">
            Hesabınız yok mu?
            <span class="font-semibold text-gray-600 hover:text-gray-800 transition-all"
              ><nuxt-link to="/signup">Kaydol</nuxt-link></span
            >
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import OnlyLogo from '@/components/Navbar/OnlyLogo'
import FacebookButton from '@/components/Buttons/FacebookButton.vue'
import GoogleButton from '@/components/Buttons/GoogleButton.vue'

export default {
  components: {
    OnlyLogo,
    FacebookButton,
    GoogleButton,
  },
  data() {
    return {
      logindata: {
        username: '',
        password: '',
      },
      loading: false,
    }
  },
  methods: {
    onLoginHandle() {
      this.loading = true

      // this.$axios.post('ENDPOINT',{...this.logindata}).then((res) => {
      //     console.log(res);
      // }).catch(err => {
      //     console.log(err);
      // }).finally(() => {
      //     this.loading = false;
      // })

      setTimeout(() => {
        this.loading = false
      }, 5000)
    },
  },
}
</script>
