<template>
  <div
    class="dark:selection:bg-lime-400 dark:selection:text-neutral-800 selection:bg-lime-600 selection:text-neutral-200"
  >
    <div class="fixed z-30 bottom-0 w-screen">
      <div
        class="bg-gradient-to-t w-full from-neutral-900 to-transparent py-8"
      ></div>
      <button
        @click="$router.go(-1)"
        class="bg-neutral-900 w-full text-center py-1 underline text-lime-500"
      >
        Hide Episodes
      </button>
    </div>
    <div
      class="h-screen w-screen flex-col gap-y-4 flex dark:bg-neutral-900 bg-[rgb(240,240,240)] px-4 py-8 overflow-y-auto"
    >
      <h4
        class="text-xl font-semibold dark:text-neutral-200 text-neutral-800 p-2"
      >
        Episode Index — {{ episodes.length }}
      </h4>
      <nuxt-link
        v-for="episode in episodes"
        :key="episode.num"
        :to="'/' + episode.slug + '?ep=' + episode.num"
        class="w-full no-underline"
      >
        <div
          class="flex flex-col p-2 rounded-lg dark:hover:bg-neutral-700 hover:bg-neutral-300 dark:hover:bg-opacity-40 hover:bg-opacity-20 transition"
        >
          <p class="text-sm no-underline dark:text-neutral-500">
            Episode #{{ episode.num }} • {{ episode.writtenOn }}
          </p>
          <span class="underline font-medium">
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
    const episodes = await $content()
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
