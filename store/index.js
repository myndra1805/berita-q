export const state = () => ({
  categories: [
    {
      title: "cnn",
      image: "https://upload.wikimedia.org/wikipedia/id/thumb/8/8b/Cnn.svg/200px-Cnn.svg.png",
      link: "https://berita-indo-api.vercel.app/v1/cnn-news/",
      types: [
        "nasional",
        "internasional",
        "ekonomi",
        "olahraga",
        "teknologi",
        "hiburan",
        "gaya-hidup",
      ],
    },
    {
      title: "cnbc",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/CNBC_logo.svg/200px-CNBC_logo.svg.png",
      link: "https://berita-indo-api.vercel.app/v1/cnbc-news/",
      types: [
        "market",
        "investment",
        "news",
        "entrepreneur",
        "syariah",
        "tech",
        "lifestyle",
      ],
    },
    {
      title: "republika",
      image: "https://static.republika.co.id/files/images/logo.png?v=ROL-70",
      link: "https://berita-indo-api.vercel.app/v1/republika-news/",
      types: [
        "news",
        "nusantara",
        "khazanah",
        "islam-digest",
        "internasional",
        "ekonomi",
        "sepakbola",
        "leisure",
      ],
    },
    {
      title: "tempo",
      image: "https://www.tempo.co/images/logo-tempo-co.png",
      link: "https://berita-indo-api.vercel.app/v1/tempo-news/",
      types: [
        "nasional",
        "bisnis",
        "metro",
        "dunia",
        "bola",
        "sport",
        "cantik",
        "tekno",
        "otomotif",
        "nusantara"
      ],
    },
    {
      title: "antara-news",
      image: "https://www.antaranews.com/img/antaranews.com5.png",
      link: "https://berita-indo-api.vercel.app/v1/antara-news/",
      types: [
        "terkini",
        "top-news",
        "politik",
        "hukum",
        "ekonomi",
        "metro",
        "sepakbola",
        "olahraga",
        "humaniora",
        "lifestyle",
        "hiburan",
        "dunia",
        "infografik",
        "tekno",
        "otomotif",
        "warta-bumi",
        "rilis-pers"
      ],
    },
    {
      title: "okezone",
      image: "https://cdn.okezone.com/underwood/revamp/2020/img/xokezone2020.png.pagespeed.ic.o1H1D1nrFk.png",
      link: "https://berita-indo-api.vercel.app/v1/okezone-news/",
      types: [
        "breaking",
        "sport",
        "economy",
        "lifestyle",
        "celebrity",
        "bola",
        "techno"
      ],
    },
    {
      title: "bbc",
      image: "https://static.files.bbci.co.uk/orbit/8161b75793cc3c38d814e1a4a19a2f6a/img/blq-orbit-blocks_grey.svg",
      link: "https://berita-indo-api.vercel.app/v1/bbc-news/",
      types: [
        "dunia",
        "berita_indonesia",
        "olahraga",
        "majalah",
        "multimedia"
      ],
    },
    {
      title: "kumparan",
      image: "https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_320/v1606836797/szedbshhhmsmebk6cs5y.png",
      link: "https://berita-indo-api.vercel.app/v1/kumparan-news/",
    },
    {
      title: "tribun-news",
      image: "https://cdn-1.tstatic.net/img/logo/tribun/svg/tribunnews.svg",
      link: "https://berita-indo-api.vercel.app/v1/tribun-news/",
      types: [
        "bisnis",
        "superskor",
        "sport",
        "seleb",
        "lifestyle",
        "travel",
        "parapuan",
        "otomotif",
        "techno",
        "ramadan"
      ],
      zones: [
        "jakarta",
        "jabar",
        "mataram",
        "mataraman",
        "medan",
        "padang",
        "flores",
        "sulbar",
        "ambon",
        "wartakota",
        "bogor",
        "pantura",
        "madura",
        "palembang",
        "pekanbaru",
        "banjarmasin",
        "pontianak",
        "papua",
        "bekasi",
        "cirebon",
        "jogja",
        "bali",
        "bangka",
        "jambi",
        "kaltim",
        "palu",
        "papuabarat",
        "banten",
        "jateng",
        "jatim",
        "aceh",
        "batam",
        "sumsel",
        "kalteng",
        "makassar",
        "tangerang",
        "solo",
        "surabaya",
        "prohaba",
        "belitung",
        "lampung",
        "kaltara",
        "lombok",
        "depok",
        "banyumas",
        "suryamalang",
        "sultra",
        "babel",
        "kupang",
        "manado",
        "ternate"
      ]
    },
    {
      title: "jawa-pos",
      image: "https://cdn-asset.jawapos.com/wp-content/uploads/2019/01/mainlogo.png",
      link: "https://berita-indo-api.vercel.app/v1/jawa-pos/",
      types: [
        "nasional",
        "entertainment",
        "pendidikan",
        "hukum-kriminal",
        "pemilihan",
        "sepak-bola",
        "jabodetabek",
        "internasional",
        "lifestyle",
        "kesehatan",
        "infrastruktur",
        "features",
        "oto-dan-tekno",
        "arsitektur-dan-desain",
        "art-space",
        "opini",
        "wisata-dan-kuliner",
        "hoax-atau-bukan"
      ],
    },
    {
      title: "vice",
      image: "https://pbs.twimg.com/profile_images/672036189273120768/4_Esv2H4_400x400.jpg",
      link: "https://berita-indo-api.vercel.app/v1/vice/",
    },
    {
      title: "suara",
      image: "https://assets.suara.com/desktop/images/new-images/logo_suara_newyear2022.png",
      link: "https://berita-indo-api.vercel.app/v1/suara/",
      types: [
        "news",
        "bisnis",
        "lifestyle",
        "entertainment",
        "otomotif",
        "tekno",
        "health",
        "mostpopular",
        "wawancara",
        "pressrelease"
      ]
    },
    {
      title: "voa-indonesia",
      image: "https://www.voaindonesia.com/Content/responsive/VOA/id/img/logo-print_color.png",
      link: "https://berita-indo-api.vercel.app/v1/voa/",
    },
  ],
  contents: []
});

export const actions = {
  async getAll({ commit }, url) {
    try {
      const result = await this.$axios.$get(url)
      commit("setState", result.data);
    } catch (error) {
      commit("setState", [])
    }
      
  },
}

export const mutations = {
  setState(state, data) {
    state.contents = data;
  }
};
