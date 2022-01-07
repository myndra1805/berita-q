<template>
  <div
    v-if="loading"
    style="height: 100vh"
    class="d-flex justify-center align-center"
  >
    <v-progress-circular
      indeterminate
      color="teal darken-4"
      size="100"
    ></v-progress-circular>
  </div>
  <v-container v-else>
    <v-row justify="center" class="my-5" align="center">
      <v-col cols="12" sm="6">
        <div style="max-width: 200px;" class="mx-auto mx-sm-0">
          <img :src="image" alt="" width="100%" />
        </div>
      </v-col>
      <v-col cols="12" sm="6" align-self="center">
        <v-select
          v-if="zones.length !== 0"
          v-model="zone"
          outlined
          rounded
          @change="filter"
          :items="zones"
          label="Zone"
        ></v-select>
        <v-select
          v-if="types.length !== 0"
          v-model="type"
          outlined
          @change="filter"
          rounded
          :items="types"
          label="Category"
        ></v-select>
      </v-col>
    </v-row>
    <v-row v-if="contents.length > 0">
      <v-col cols="12" sm="6" md="4" v-for="(content, i) in contents" :key="i">
        <v-card target="_blank" link :href="content.link" height="460px">
          <img
            v-if="content.image"
            :src="
              typeof content.image.small == 'string'
                ? content.image.small
                : content.image
            "
            width="100%"
            height="210px"
            alt=""
          />
          <div
            v-else
            style="height: 210px; width: 100%"
            class="pa-3 d-flex align-center justify-center"
          >
            <img :src="image" width="100%" alt="" />
          </div>
          <v-card-text class="ma-0 pb-0">
            <small v-if="content.isoDate"
              >{{ content.isoDate.split("T")[0] }} -
              {{ content.isoDate.split("T")[1].substring(0, 5) }} WIB</small
            >
          </v-card-text>
          <v-card-title class="mt-0 pt-0">
            {{ content.title }}
          </v-card-title>
          <v-card-text class="mt-0 pb-2" v-if="content.contentSnippet">{{content.contentSnippet}}</v-card-text>
          <v-card-text class="mt-0 pb-2" v-else-if="content.content">{{content.content}}</v-card-text>
          <v-card-text class="mt-0 pb-2" v-else-if="content.description">{{content.description}}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <div v-else>
      <h3 class="text-h5 ma-0 text-center">Berita Tidak Ditemukan</h3>
    </div>
    <v-row justify="center">
      <v-col cols="12" md="6">
        <v-pagination
          @input="changePage"
          color="teal darken-4"
          v-model="page"
          :length="sizes"
          circle
        ></v-pagination>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  layout: "detail",
  head: () => ({
    title: "Berita-Q",
  }),
  data: () => ({
    loading: true,
    page: 1,
    sizes: 0,
    category: "",
    link: "",
    types: [],
    type: "",
    image: "",
    zones: [],
    zone: "",
    contents: [],
  }),
  async created() {
    this.category = this.$route.params.category;
    const data = this.$store.state.categories.filter(
      (category) => category.title === this.category
    )[0];
    this.link = data.link;
    console.log(data);
    if (data.types) {
      this.types =
        this.category === "antara-news" || this.category === "tribun-news"
          ? data.types
          : ["All", ...data.types];
      this.types.map((type, i) => {
        this.types[i] = this.types[i].replace(/-/g, " ");
        this.types[i] = this.types[i].replace(/_/g, " ");
        this.types[i] = this.capitalize(this.types[i]);
      });
      this.type = this.types[0];
    }
    if (data.zones) {
      this.zones = data.zones;
      this.zones.map((zone, i) => {
        this.zones[i] = this.capitalize(this.zones[i]);
      });
      this.zone = this.zones[0];
    }
    this.image = data.image;
    const link =
      this.category === "antara-news" ? this.link + "terkini" : this.link;
    await this.$store.dispatch("getAll", link);
    this.contents = this.$store.state.contents.slice(0, 12);
    this.sizes = Math.ceil(this.$store.state.contents.length / 12);
    this.loading = false;
    console.log(this.zones);
    console.log(this.types);
  },
  methods: {
    changePage() {
      const newArticle = parseInt(this.page) * 12;
      const nowArticle = (parseInt(this.page) - 1) * 12;
      this.contents = this.$store.state.contents.slice(nowArticle, newArticle);
      window.scrollTo(0, 0);
    },
    capitalize(str) {
      let text = "";
      const items = str.split(" ");
      items.map((item, i) => {
        const lower = item.toLowerCase();
        text += item.charAt(0).toUpperCase() + lower.slice(1);
        i === items.length - 1 ? (text += "") : (text += " ");
      });
      return text;
    },
    changeText(str) {
      return str.replace(/ /g, "-").toLowerCase();
    },
    async filter() {
      this.loading = true;
      let keyword = this.changeText(this.type);
      if (this.zone != "") {
        keyword = `${this.changeText(this.zone)}/${this.changeText(this.type)}`;
      }
      if (keyword == "all") {
        await this.$store.dispatch("getAll", this.link);
      } else {
        await this.$store.dispatch("getAll", this.link + keyword);
      }
      this.contents = this.$store.state.contents.slice(0, 12);
      this.sizes = Math.ceil(this.$store.state.contents.length / 12);
      this.loading = false;
      this.page = 1
    },
  },
};
</script>

<style></style>
