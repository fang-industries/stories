<template>
  <div class="min-h-screen flex w-full">
    <div
      class="z-40 hidden md:flex w-96 h-screen flex-col gap-y-4 dark:bg-neutral-900 bg-[rgb(240,240,240)] px-4 py-8 fixed overflow-y-auto"
    >
      <nuxt-link
        v-for="episode in episodes"
        :key="episode.num"
        :to="'/' + episode.slug + '?ep=' + episode.num"
        class="w-full no-underline"
      >
        <div
          class="flex flex-col py-1 px-2 rounded-lg dark:hover:bg-neutral-700 hover:bg-neutral-300 dark:hover:bg-opacity-40 hover:bg-opacity-20 transition"
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
    <div
      class="md:pl-96 w-full bg-neutral-100 flex justify-center text-neutral-800 dark:bg-[rgb(27,27,27)] dark:text-neutral-200"
    >
      <div class="md:hidden fixed z-30 bottom-0 w-full">
        <div
          class="bg-gradient-to-t w-full from-neutral-900 to-transparent py-8"
        ></div>
        <nuxt-link to="/episodes">
          <div
            class="bg-neutral-900 w-full text-center py-1 underline text-lime-500"
          >
            Show Episodes
          </div>
        </nuxt-link>
      </div>

      <div
        class="px-4 md:px-4 md:w-[48rem] h-full flex flex-col py-8 md:py-16 justify-between"
      >
        <div class="flex flex-col gap-y-8">
          <h1
            class="text-4xl md:text-5xl font-semibold text-center text-lime-500"
          >
            Hello there!
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

<script>
let episodeDialogOpen = false;

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
  data() {
    return {
      episodeDialogOpen: false,
    };
  },
};
</script>
