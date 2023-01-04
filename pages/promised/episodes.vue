<template>
  <div class="selection:bg-[#412B1D] selection:text-white">
    <button class="fixed z-30 bottom-0 w-screen" @click="$router.go(-1)">
      <div
        class="
          bg-stone-800 bg-opacity-80
          w-full
          backdrop-blur-sm
          border-t border-stone-800
          text-center
          py-1
          underline
          text-white
        "
      >
        Hide Episodes
      </div>
    </button>
    <div
      class="
        h-screen
        w-screen
        flex-col
        gap-y-4
        flex
        bg-[url(@/assets/images/crumpled.png)]
        px-4
        md:px-8
        py-8
        md:py-16
        overflow-y-auto
      "
    >
      <h4
        class="
          font-cursive
          text-2xl
          font-semibold
          text-[#412B1D]
          px-2
          pt-2
        "
      >
        Episode Index — {{ episodes.length }}
      </h4>
      <div
        class=" text-stone-200
          px-2
          font-mono
          flex
          justify-between
          bg-stone-800
          py-1
        "
      >
        <div class="flex gap-x-2">
          <i class="fa-solid fa-code-branch my-auto"></i>
          <p class="my-auto">promised</p>
        </div>
        <nuxt-link
          class="
            bg-[#412B1D]
            hover:bg-[#67412A]
            px-2
            transition
          "
          to="/promised/storylines"
        >
          <i class="fa-solid fa-angle-right my-auto text-white"></i>
        </nuxt-link>
      </div>
      <nuxt-link
        v-for="episode in episodes"
        :key="episode.num"
        :to="'/promised/' + episode.slug"
        class="w-full no-underline"
      >
        <div
          class="
            flex flex-col
            p-2
            hover:bg-[#412B1D] hover:bg-opacity-20
            transition
            border-2 border-[#67412A]
          "
        >
          <p class="text-sm text-stone-800">
            Episode #{{ episode.num }} • {{ episode.writtenOn }}
          </p>
          <span class="text-stone-800">
            {{ episode.title }}
          </span>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const episodes = await $content("promised")
      .only(["slug", "title", "num", "writtenOn"])
      .sortBy("num", "asc")
      .fetch();
    return {
      episodes,
    };
  },
  head() {
    return {
      title: `Episodes - stories.fangdustry.me`,
    };
  },
};
</script>
