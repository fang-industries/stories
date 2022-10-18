<template>
  <div
    class="min-h-screen flex w-full dark:selection:bg-lime-400 dark:selection:text-neutral-800 selection:bg-lime-600 selection:text-neutral-200"
  >
    <div
      class="w-96 h-screen hidden md:flex flex-col gap-y-4 rounded-r-3xl shadow-lg dark:bg-neutral-900 bg-[rgb(240,240,240)] px-4 py-8 fixed overflow-y-auto"
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
          :class="
            ep === episode.num.toString()
              ? 'flex flex-col p-2 rounded-lg dark:bg-neutral-800 dark:hover:bg-neutral-700 hover:bg-neutral-300 bg-neutral-200 dark:hover:bg-opacity-60 hover:bg-opacity-20 transition'
              : 'flex flex-col p-2 rounded-lg dark:hover:bg-neutral-700 hover:bg-neutral-300 dark:hover:bg-opacity-60 hover:bg-opacity-20 transition'
          "
        >
          <p class="text-sm no-underline text-neutral-500">
            Episode #{{ episode.num }} • {{ episode.writtenOn }}
          </p>
          <span
            :class="
              ep === episode.num.toString()
                ? 'no-underline font-medium hover:text-neutral-700 dark:hover:text-neutral-200 text-neutral-700 dark:text-neutral-200'
                : 'underline font-medium'
            "
          >
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
          class="bg-gradient-to-t w-full dark:from-neutral-900 dark:to-transparent from-neutral-50 to-transparent py-8"
        ></div>
        <nuxt-link to="/episodes">
          <div
            class="dark:bg-neutral-900 bg-neutral-50 w-full text-center py-1 underline text-lime-500"
          >
            Show Episodes
          </div>
        </nuxt-link>
      </div>
      <transition name="story" mode="out-in" appear>
        <div
          id="ep"
          class="md:w-[48rem] px-8 h-full flex flex-col py-8 md:py-16 justify-between"
        >
          <article class="gap-y-8 flex flex-col">
            <div class="flex flex-col gap-y-2">
              <h1 class="mb-2 text-4xl font-semibold">
                {{ page.title }}
              </h1>
              <div
                class="flex space-x-2 text-neutral-500 dark:text-neutral-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-5 h-5 my-auto"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                  />
                </svg>

                <span class="my-auto">Written by {{ page.writer }}</span>
              </div>
              <div
                class="mb-1 flex space-x-2 text-neutral-500 dark:text-neutral-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="my-auto h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span class="my-auto"
                  >{{ page.writtenOn }} &bull;
                  {{ page.readingStats.text }}</span
                >
              </div>
            </div>
            <nuxt-content
              :document="page"
              class="prose dark:prose-invert prose-neutral max-w-none prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-2xl prose-h4:text-xl dark:prose-p:text-neutral-300 prose-p:text-neutral-700 prose-a:text-lime-500 dark:prose-a:text-lime-400 prose-a:underline prose-a:transition hover:prose-a:text-lime-700 dark:hover:prose-a:text-lime-200 prose-blockquote:font-normal prose-code:rounded-md dark:prose-code:bg-neutral-900 prose-code:bg-neutral-200 prose-code:bg-opacity-60 dark:prose-code:bg-opacity-60 prose-code:p-1 prose-code:font-mono prose-p:font-normal prose-code:text-green-600 dark:prose-code:text-green-300 prose-li:marker:text-neutral-500 prose-code:before:content-none prose-code:after:content-none prose-img:rounded-xl"
            />
          </article>
          <footer class="mt-16 flex w-full flex-col gap-8 mb-8 md:mb-0">
            <hr class="border-t-2 border-dashed border-neutral-600" />
            <div class="flex justify-between">
              <span class="text-neutral-600 dark:text-neutral-500"
                >{{ page.readingStats.words.toLocaleString("en-GB") }} words
              </span>
              <span
                class="text-neutral-600 dark:text-neutral-500 hidden md:block"
                >Copyright © 2022 Fang Industries, inc.
              </span>
            </div>
          </footer>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const episodes = await $content()
      .only(["slug", "title", "num", "writer", "writtenOn"])
      .sortBy("num", "asc")
      .fetch();

    const page = await $content(params.slug).fetch();

    return {
      episodes,
      page,
    };
  },
  head() {
    return {
      title: `[Ep. ${this.page.num}] ${this.page.title} - stories.fangdustry.me`,
    };
  },
  data() {
    return {
      ep: this.$nuxt.$route.query.ep,
    };
  },
};
</script>
