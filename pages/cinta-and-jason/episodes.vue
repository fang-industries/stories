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
      <h4 class="font-cursive text-2xl font-semibold text-[#412B1D] p-2">
        Episode Index — {{ episodes.length }}
      </h4>
      <nuxt-link
        v-for="episode in episodes"
        :key="episode.num"
        :to="'/cinta-and-jason/' + episode.slug"
        class="w-full no-underline"
      >
        <div
          class="
            flex flex-col
            p-2
            rounded-lg
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
    const episodes = await $content("cinta-and-jason")
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
