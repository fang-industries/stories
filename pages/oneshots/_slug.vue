<template>
  <div class="min-h-screen flex w-full">
    <div
      class="w-full bg-gray-100 flex justify-center text-gray-800 dark:bg-[rgb(9,14,24)] dark:text-gray-200"
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
      <div class="flex flex-col justify-center">
        <div
          class="md:dark:border-gray-700 md:my-16 dark:bg-gray-900 bg-gray-100 shadow-2xl drop-shadow-2xl md:border-gray-300 md:border min-h-[80vh] w-screen md:w-[80vw] lg:w-[70vw] xl:w-[60vw] rounded-xl"
        >
          <div
            class="flex gap-x-8 dark:bg-gray-800 bg-gray-200 md:rounded-t-xl md:dark:border-gray-700 md:border-gray-300 md:border-b px-8 py-4"
          >
            <div class="flex gap-x-2">
              <i class="fa-solid fa-circle my-auto text-sm text-red-500"></i>
              <i class="fa-solid fa-circle my-auto text-sm text-yellow-500"></i>
              <i class="fa-solid fa-circle my-auto text-sm text-green-500"></i>
            </div>
            <strong>{{ page.title }}</strong>
          </div>
          <div class="px-8 py-4 w-full flex flex-col">
            <div class="w-full justify-center flex">
              <span
                class="my-auto text-center text-gray-400 font-light text-sm"
                >{{ page.date }}</span
              >
            </div>
            <div class="mt-6 mb-6">
              <h1 class="text-3xl font-bold">{{  page.title  }}</h1>
              <nuxt-content
                :document="page"
                class="prose mt-6 max-w-none dark:prose-invert prose-gray prose-h2:text-xl prose-h3:text-xl prose-h4:text-xl prose-a:underline prose-a:transition prose-blockquote:font-normal prose-code:rounded-md dark:prose-code:bg-opacity-60 prose-code:p-1 prose-code:font-mono prose-p:font-normal prose-li:marker:text-gray-500 prose-code:before:content-none prose-code:after:content-none prose-img:rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const page = await $content("oneshots", params.slug).fetch();
    return {
      page,
    };
  },
  head() {
    return {
      title: `${this.page.title} - stories.fangdustry.me`,
    };
  },
};
</script>
