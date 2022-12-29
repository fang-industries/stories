<template>
  <div class="selection:bg-[#412B1D] selection:text-white">
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
      <h4 class="font-cursive text-2xl font-semibold text-[#412B1D] px-2 pt-2">
        Storylines Index — {{ storylines.length }}
      </h4>
      <button
        @click="$router.go(-1)"
        class="
          hover:text-[#412B1D] transition
          text-stone-900
          px-2
          font-mono
          flex
          gap-x-2
          rounded-full
          pb-1
        ">
          <i class="fa-solid fa-arrow-left my-auto"></i>
          <p class="my-auto">Go back to previous page...</p>
      </button>
      <nuxt-link
        v-for="story in storylines"
        :key="story.slug"
        :to="'/' + story.slug"
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
            Started by {{ story.writers.join(', ') }} on {{ story.started }}
          </p>
          <span class="text-stone-800">
            {{ story.title }}
          </span>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>

export default {
  async asyncData({ $content }) {
    const storylines = await $content("!storylines")
      .only(["slug", "title", "writers", "started"])
      .sortBy("num", "asc")
      .fetch();
    return {
      storylines,
    };
  },
  head() {
    return {
      title: `Storylines - stories.fangdustry.me`,
    };
  },
};
</script>
