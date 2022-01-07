<template>
  <v-app dark>
    <v-app-bar app color="white">
      <img src="/berita-q.png" height="70px" alt="">
    </v-app-bar>
    <v-main>
      <Nuxt />
    </v-main>
    <v-footer color="teal darken-4" dark class="pb-0">
      <v-container class="text-center">
        Copyright &copy; 2022 - Berita-Q 
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "DefaultLayout",
  data: () => ({
  }),
};
</script>
