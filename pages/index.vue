<template>
  <div class="min-h-screen flex w-full">
    <div class="w-[32rem] bg-neutral-900 px-4 py-8">
      <nuxt-link
        v-for="episode in episodes"
        :to="'/' + episode.slug"
        class="w-fit no-underline"
      >
        <div class="flex flex-col">
          <p class="text-sm no-underline dark:text-neutral-500">
            Episode #{{ episode.num }}
          </p>
          <span class="underline font-medium">
            {{ episode.title }}
          </span>
        </div>
      </nuxt-link>
    </div>
    <div
      class="w-full bg-neutral-100 flex justify-center text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200"
    >
      <div class="w-[48rem]">
        <Footer />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  async asyncData({ $content }) {
    const episodes = await $content()
      .only(["slug", "title", "num"])
      .sortBy("createdAt", "asc")
      .fetch();
    return {
      episodes,
    };
  },
};
</script>
