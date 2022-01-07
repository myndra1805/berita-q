<template>
  <v-container style="min-height: 100%;" class="d-flex align-center py-md-15">
    <div id="container-grid">
      <v-card
        link
        :to="category.link"
        v-for="(category, i) in categories"
        :key="i"
        :class="category.link.substring(1, category.link.length) + ' d-flex justify-center align-center box'"
      >
        <v-card-text>
          <img :src="category.logo" width="100%" alt="" />
        </v-card-text>
      </v-card>
    </div>
  </v-container>
</template>

<script>
export default {
  head: () => ({
    title: "Berita-Q",
  }),
  data: () => ({
    categories: [
      {
        link: "/cnn",
        logo: "https://upload.wikimedia.org/wikipedia/id/thumb/8/8b/Cnn.svg/200px-Cnn.svg.png",
      },
      {
        link: "/cnbc",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/CNBC_logo.svg/200px-CNBC_logo.svg.png",
      },
      {
        link: "/republika",
        logo: "https://static.republika.co.id/files/images/logo.png?v=ROL-70",
      },
      {
        link: "/tempo",
        logo: "https://www.tempo.co/images/logo-tempo-co.png",
      },
      {
        link: "/antara-news",
        logo: "https://www.antaranews.com/img/antaranews.com5.png",
      },
      {
        link: "/kumparan",
        logo: "https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_320/v1606836797/szedbshhhmsmebk6cs5y.png",
      },
      {
        link: "/okezone",
        logo: "https://cdn.okezone.com/underwood/revamp/2020/img/xokezone2020.png.pagespeed.ic.o1H1D1nrFk.png",
      },
      {
        link: "/bbc",
        logo: "https://static.files.bbci.co.uk/orbit/8161b75793cc3c38d814e1a4a19a2f6a/img/blq-orbit-blocks_grey.svg",
      },
      {
        link: "/tribun-news",
        logo: "https://cdn-1.tstatic.net/img/logo/tribun/svg/tribunnews.svg",
      },
      {
        link: "/jawa-pos",
        logo: "https://cdn-asset.jawapos.com/wp-content/uploads/2019/01/mainlogo.png",
      },
      {
        link: "/suara",
        logo: "https://assets.suara.com/desktop/images/new-images/logo_suara_newyear2022.png",
      },
      {
        link: "/voa-indonesia",
        logo: "https://www.voaindonesia.com/Content/responsive/VOA/id/img/logo-print_color.png",
      },
      {
        link: "/vice",
        logo: "https://pbs.twimg.com/profile_images/672036189273120768/4_Esv2H4_400x400.jpg",
      },
    ],
  }),
};
</script>

<style scoped>
#container-grid {
  display: grid;
  gap: 10px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas:
    "okezone cnbc tempo"
    "cnn cnbc kumparan"
    "cnn suara suara"
    "jawapos vice republika"
    "voa vice bbc"
    "voa antara tribun";
  width: 100%;
}
.box{
  overflow: hidden;
}
.box img{
  transition: 1s;
}
.box:hover img{
  transform: scale(1.2);
}
.cnn {
  grid-area: cnn;
}
.cnbc {
  grid-area: cnbc;
}
.republika {
  grid-area: republika;
}
.kumparan {
  grid-area: kumparan;
}
.tempo {
  grid-area: tempo;
}
.antara-news {
  grid-area: antara;
}
.okezone {
  grid-area: okezone;
}
.bbc {
  grid-area: bbc;
}
.tribun-news {
  grid-area: tribun;
}
.jawa-pos {
  grid-area: jawapos;
}
.suara {
  grid-area: suara;
}
.voa-indonesia {
  grid-area: voa;
}
.vice {
  grid-area: vice;
}
</style>
