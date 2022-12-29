<template>
  <div class="
      dark:selection:bg-lime-400
      dark:selection:text-neutral-800
      selection:bg-lime-600
      selection:text-neutral-200
    ">
    <div class="fixed z-30 bottom-0 w-screen">
      <div class="
          bg-gradient-to-t
          w-full
          dark:from-neutral-900
          dark:to-transparent
          from-neutral-50
          to-transparent
          py-8
        "></div>
    </div>
    <div class="
        h-screen
        w-screen
        flex-col
        gap-y-4
        flex
        dark:bg-neutral-900
        bg-[rgb(240,240,240)]
        px-4
        md:px-8
        py-8
        md:py-16
        overflow-y-auto
      ">
      <h4 class="
          font-display
          text-xl
          font-semibold
          dark:text-neutral-200
          text-neutral-800
          px-2
          pt-2
        ">
        Storylines Index — {{ storylines.length }}
      </h4>
      <button
        @click="$router.go(-1)"
        class="
          dark:text-neutral-400 hover:text-lime-500 transition dark:hover:text-lime-400
          text-neutral-600
          px-2
          font-mono
          flex
          gap-x-2
          rounded-full
          py-1
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
            dark:hover:bg-neutral-700
            hover:bg-neutral-300
            dark:hover:bg-opacity-40
            hover:bg-opacity-20
            transition
          "
        >
          <p class="text-sm no-underline text-neutral-500">
            Started by {{ story.writers.join(', ') }} on {{ story.started }}
          </p>
          <span class="underline font-medium">
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
