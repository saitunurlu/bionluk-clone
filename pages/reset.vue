<template>
  <div class="w-full h-screen flex flex-col items-center">
    <div class="relative top-0 left-0 w-full">
      <OnlyLogo />
    </div>
    <div class="text-center relative top-10 w-1/3">
      <span class="text-gray-700 font-semibold"
        >Hesabınla bağlantılı e-posta adresini girdiğinde, bu e-posta adresine
        parolanı sıfırlaman için bir bağlantı göndereceğiz.</span
      >
      <form @submit.prevent="onResetHandler">
        <input
          v-model="email"
          class="input my-3"
          placeholder="E-Posta Adresiniz"
          required
          type="email"
        />
        <button type="submit" class="my-2 btn btn-md btn-gray">
          <img v-if="loading" src="@/static/loading-dark.svg" class="w-7" />
          <span v-else> Gönder </span>
        </button>
      </form>
      <nuxt-link
        to="/signin"
        class="text-gray-600 hover:text-gray-700 font-semibold transition-all hover:underline"
      >
        Geri Dön
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import OnlyLogo from '@/components/Navbar/OnlyLogo'

export default {
  layout:'navbarwithout',
  components: {
    OnlyLogo,
  },
  data() {
    return {
      loading: false,
      email: '',
    }
  },
  methods: {
    onResetHandler() {
      this.loading = true

      // this.$axios.post('ENDPOINT',{email:this.email}).then(res => {
      //     console.log(res);
      // }).catch(err => {
      //     console.log(err);
      // }).finally(() => {
      //     this.loading = false;
      // })

      setTimeout(() => {
        this.loading = false
        this.email = '' // input içeriğinin temizlenmesi
      }, 5000)
    },
  },
}
</script>
