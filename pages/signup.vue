<template>
  <div class="w-full h-auto flex flex-col items-center">
    <div class="relative w-full">
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
        <form @submit.prevent="onRegisterHandler" class="">
          <div
            class="grid grid-cols-1 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 gap-5"
          >
            <input
              v-model="signupdata.name"
              class="input"
              type="text"
              placeholder="İsim"
            />
            <input
              v-model="signupdata.surname"
              class="input"
              type="text"
              placeholder="Soyisim"
            />
          </div>
          <input
            v-model="signupdata.username"
            class="input my-5"
            type="text"
            placeholder="Kullanıcı Adı"
          />
          <input
            v-model="signupdata.email"
            class="input my-5"
            type="email"
            placeholder="E-Posta"
          />
          <input
            v-model="signupdata.mobileNumber"
            class="input my-5"
            type="text"
            v-mask="'(###) ### ## ##'"
            placeholder="Telefon Numarası"
          />
          <input
            v-model="signupdata.password"
            class="input my-5"
            type="password"
            placeholder="Şifre"
          />

          <p class="text-center text-sm text-gray-600">
            Kaydol'a basarak
            <nuxt-link to="#" class="font-semibold"
              >Kullanıcı Sözleşmesi</nuxt-link
            >
            ve
            <nuxt-link to="#" class="font-semibold"
              >Gizlilik Sözleşmesini</nuxt-link
            >
            kabul ediyorum.
          </p>
          <div class="inline-flex w-full justify-center">
            <button
              class="btn btn-md btn-gray transition-all my-2 inline-flex justify-center items-center"
            >
              <img v-if="loading" src="@/static/loading-dark.svg" class="w-7" />
              <span v-else> Kayıt Ol </span>
            </button>
          </div>
          <div class="text-center my-3">
            Zaten bir hesabın var mı?
            <span
              class="font-semibold text-gray-600 hover:text-gray-800 transition-all"
              ><nuxt-link to="/signin">Giriş Yap</nuxt-link></span
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
  layout:'navbarwithout',
  components: {
    OnlyLogo,
    FacebookButton,
    GoogleButton,
  },
  data() {
    return {
      loading: false,
      signupdata: {
        name: '',
        surname: '',
        email: '',
        password: '',
        mobileNumber: '',
        username: '',
      },
      clearSignupData: {}
    }
  },
  beforeMount() {
    this.clearSignupData = {...this.signupdata}; // daha sonra temizlemede kullanılacak yapıya hazırlık
  },
  methods: {
    onRegisterHandler() {
      this.loading = true
      // this.$axios
      //   .post('ENDPOINT', { ...this.signupdata })
      //   .then((res) => {
      //     console.log(res)
      //   })
      //   .catch((err) => {
      //     console.log(err)
      //   })
      //   .finally(() => {
      //     this.loading = false
      //   })

      setTimeout(() => {
        this.loading = false;
        this.signupdata = {...this.clearSignupData}; // Tüm inputların içeriğinin temizlenmesi
      }, 5000);
    },
  },
}
</script>
