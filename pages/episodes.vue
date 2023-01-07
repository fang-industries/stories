<template>
  <div
    class="
      dark:selection:bg-lime-400
      dark:selection:text-neutral-800
      selection:bg-lime-600
      selection:text-neutral-200
    "
  >
    <div class="fixed z-30 bottom-0 w-screen">
      <div
        class="
          bg-gradient-to-t
          w-full
          dark:from-neutral-900
          dark:to-transparent
          from-neutral-50
          to-transparent
          py-8
        "
      ></div>
      <button
        @click="$router.go(-1)"
        class="
          dark:bg-neutral-900
          bg-neutral-50
          w-full
          text-center
          py-1
          underline
          text-lime-500
        "
      >
        Hide Episodes
      </button>
    </div>
    <div
      class="
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
      "
    >
      <h4
        class="
          font-display
          text-xl
          font-semibold
          dark:text-neutral-200
          text-neutral-800
          px-2
          pt-2
        "
      >
        Episode Index — {{ episodes.length }}
      </h4>
      <div
        class="
          dark:text-neutral-400
          text-neutral-600
          px-2
          font-mono
          flex
          justify-between
          border-2
          dark:border-neutral-700
          border-neutral-300
          bg-neutral-200
          dark:bg-neutral-800
          rounded-full
          py-1
        "
      >
        <div class="flex gap-x-2">
          <i class="fa-solid fa-code-branch my-auto"></i>
          <p class="my-auto text-ellipsis overflow-hidden whitespace-nowrap">main-storyline</p>
        </div>
        <nuxt-link
          class="
            rounded-full
            dark:bg-neutral-700
            bg-neutral-300
            px-2
            hover:bg-neutral-400
            dark:hover:bg-neutral-600
            transition
          "
          to="/storylines"
        >
          <i class="fa-solid fa-angle-right my-auto"></i>
        </nuxt-link>
      </div>
      <nuxt-link
        v-for="episode in episodes"
        :key="episode.num"
        :to="'/' + episode.slug"
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
          <p class="text-sm no-underline text-neutral-500 text-ellipsis overflow-hidden whitespace-nowrap">
            Episode #{{ episode.num }} • {{ episode.writtenOn }}
          </p>
          <span class="underline font-medium text-ellipsis overflow-hidden whitespace-nowrap">
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
    const episodes = await $content("main-storyline")
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
