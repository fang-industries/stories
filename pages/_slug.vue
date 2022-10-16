<template>
  <div class="min-h-screen flex w-full">
    <div
      class="w-[23.6rem] flex flex-col gap-y-4 dark:bg-neutral-900 bg-[rgb(240,240,240)] px-4 py-8 fixed overflow-y-auto"
    >
      <nuxt-link
        v-for="episode in episodes"
        :key="episode.num"
        :to="'/' + episode.slug + '?ep=' + episode.num"
        class="w-full no-underline"
      >
        <div
          :class="
            ep === episode.num.toString()
              ? 'flex flex-col cursor-default py-1 px-2 rounded-lg transition'
              : 'flex flex-col py-1 px-2 rounded-lg dark:hover:bg-neutral-700 hover:bg-neutral-300 dark:hover:bg-opacity-40 hover:bg-opacity-20 transition'
          "
        >
          <p class="text-sm no-underline dark:text-neutral-500">
            Episode #{{ episode.num }}
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
      class="w-[32rem] bg-[rgb(240,240,240)] dark:bg-neutral-900 px-4 py-8"
    ></div>
    <div
      class="w-full bg-neutral-100 flex justify-center text-neutral-800 dark:bg-[rgb(27,27,27)] dark:text-neutral-200"
    >
      <div class="w-[48rem] h-full flex flex-col py-16 justify-between">
        <article class="gap-y-8 flex flex-col">
          <div class="flex flex-col gap-y-2">
            <h1 class="mb-1 text-5xl font-semibold">{{ page.title }}</h1>
            <div class="mb-1 flex space-x-2 text-neutral-500">
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
                >{{ createdAt }} &bull; {{ page.readingStats.text }}</span
              >
            </div>
          </div>
          <nuxt-content
            :document="page"
            class="prose dark:prose-invert prose-neutral max-w-none prose-h1:mb-2 prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl prose-h4:text-xl prose-p:mb-1 dark:prose-p:text-neutral-300 prose-p:text-neutral-700 prose-a:text-lime-500 dark:prose-a:text-lime-400 prose-a:underline prose-a:transition hover:prose-a:text-lime-700 dark:hover:prose-a:text-lime-200 prose-blockquote:font-normal prose-code:rounded-md dark:prose-code:bg-neutral-900 prose-code:bg-neutral-200 prose-code:bg-opacity-60 dark:prose-code:bg-opacity-60 prose-code:p-1 prose-code:font-mono prose-p:font-normal prose-code:text-green-600 dark:prose-code:text-green-300 prose-li:marker:text-neutral-500 prose-code:before:content-none prose-code:after:content-none prose-img:rounded-xl"
          />
        </article>
        <Footer />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const episodes = await $content()
      .only(["slug", "title", "num"])
      .sortBy("createdAt", "asc")
      .fetch();

    const page = await $content(params.slug).fetch();

    return {
      episodes,
      page,
    };
  },
  computed: {
    createdAt() {
      const dateparse = Date.parse(this.page.createdAt);
      const dateObject = new Date(dateparse);
      const options = { year: "numeric", month: "long", day: "numeric" };
      return dateObject.toLocaleDateString("en-UK", options);
    },
  },
  data() {
    return {
      ep: this.$nuxt.$route.query.ep,
    };
  },
};
</script>
