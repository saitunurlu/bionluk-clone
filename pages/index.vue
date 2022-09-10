<template>
  <div class="w-full min-h-screen h-screen flex flex-col justify-center items-center">
    <div
      class="flex justify-between items-center h-24 px-2 2xl:px-8 xl:px-8 lg:px-8 absolute top-0 left-0 w-full"
    >
      <nuxt-link to="/">
        <img src="@/static/bisenlik-logo.png" class="w-36" />
      </nuxt-link>
      <div class="flex justify-center items-center">
        <nuxt-link class="mx-6 text-lg font-semibold" to="/signin">Giriş</nuxt-link>
        <nuxt-link class="btn-md btn-primary text-lg font-semibold" to="/signup"
          >Kayıt Ol</nuxt-link
        >
      </div>
    </div>
    <div class="text-center">
      <p class="text-6xl text-gray-700">Yetenekli freelancerlarla</p>
      <p class="text-5xl font-semibold text-gray-700">daha çok iş yapın.</p>
    </div>
    <div class="text-center mx-3 2xl:w-2/3 xl:w-2/3 lg:w-8/12 text-2xl text-gray-400 my-10">
      Bionluk, yetenekli freelancerların kendilerine uygun işletmeler ve
      girişimlerle buluştuğu, topluluk mantığıyla ​i​şleyen ​​özgürlükçü bir
      çalışma platformudur.
    </div>

    <button class="btn btn-lg btn-indigo font-bold">
      Hemen Başla
    </button>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>
