<template>
  <div class="min-h-screen flex w-full">
    <div
      class="w-[23.6rem] dark:bg-neutral-900 bg-[rgb(240,240,240)] px-4 py-8 fixed overflow-y-auto"
    >
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
    <div class="w-[32rem] bg-[rgb(240,240,240)] dark:bg-neutral-900 px-4 py-8">
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
      <div class="w-[48rem] h-full flex flex-col py-8 justify-between">
        <div class="flex flex-col gap-y-8">
          <h1 class="text-5xl font-semibold text-center">
            <code class="font-medium text-lime-500 dark:text-lime-400"
              >stories.fangdustry.me</code
            >
          </h1>
          <div class="flex flex-col gap-y-4">
            <h3 class="text-3xl font-semibold">
              Welcome to the more fictional side of our minds.
            </h3>
            <p>
              This is a place where we can let our imaginations run wild and
              write stories.
            </p>
            <p>These stories pictures a group of 10 friends, as a family.</p>
            <p>For the best experience, please read all stories.</p>
          </div>
          <div class="flex flex-col gap-y-4">
            <h3 class="text-3xl font-semibold">Contribution and submissions</h3>
            <p>
              Contributions for fixes on spelling and grammatical errors are
              welcome via pull requests. Otherwise, you can submit them through
              the issues page of this repository.
            </p>
            <p>
              To submit a story idea, you can submit them on the issues page of
              this repository.
            </p>
            <p>
              A link to this repository
              <a href="https://github.com/fang-industries/stories"
                >can be found here</a
              >.
            </p>
          </div>
        </div>
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
