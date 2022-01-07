<template>
  <v-app dark>
    <v-app-bar app color="white">
      <v-btn to="/" icon color="teal darken-4">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <img src="/berita-q.png" height="70px" alt="">
      <v-spacer></v-spacer>
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
  name: "DetailLayout",
  data: () => ({
  }),
};
</script>
