<template>
  <div class="selection:bg-[#412B1D] selection:text-white">
    <div
      class="h-screen w-screen flex-col gap-y-4 flex bg-[url(@/assets/images/crumpled.png)] px-4 py-8 overflow-y-auto"
    >
      <h4 class="font-cursive text-2xl font-semibold text-[#412B1D] px-2 pt-2">
        Storylines Index — {{ series.length + oneshots.length }}
      </h4>
      <button
        @click="$router.go(-1)"
        class="hover:text-[#412B1D] transition text-stone-900 px-2 font-mono flex gap-x-2 pb-1 mb-4"
      >
        <i class="fa-solid fa-arrow-left my-auto"></i>
        <p class="my-auto">Go back to previous page...</p>
      </button>

      <div class="grid md:grid-cols-2 gap-x-4">
        <div class="gap-y-4 flex flex-col">
          <h4 class="font-cursive ext-lg font-medium text-[#412B1D] px-2 pt-2">
            All Series — {{ series.length }}
          </h4>

          <nuxt-link
            v-for="story in series"
            :key="story.slug"
            :to="'/' + story.slug"
            class="w-full no-underline"
          >
            <div
              class="flex flex-col p-2 hover:bg-[#412B1D] hover:bg-opacity-20 transition border-2 border-[#67412A]"
            >
              <p class="text-sm text-stone-800">
                Started by {{ story.writers.join(", ") }} on {{ story.started }}
              </p>
              <span class="text-stone-800">
                {{ story.title }}
              </span>
            </div>
          </nuxt-link>
        </div>
        <div class="gap-y-4 flex flex-col">
          <h4 class="font-cursive ext-lg font-medium text-[#412B1D] px-2 pt-2">
            All Oneshots — {{ oneshots.length }}
          </h4>

          <nuxt-link
            v-for="story in oneshots"
            :key="story.slug"
            :to="'/' + story.slug"
            class="w-full no-underline"
          >
            <div
              class="flex flex-col p-2 hover:bg-[#412B1D] hover:bg-opacity-20 transition border-2 border-[#67412A]"
            >
              <p class="text-sm text-stone-800">
                Written by {{ story.writers.join(", ") }} on {{ story.date }}
              </p>
              <span class="text-stone-800">
                {{ story.title }}
              </span>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const series = await $content("!storylines")
      .only(["slug", "title", "writers", "started"])
      .sortBy("num", "asc")
      .fetch();

    const oneshots = await $content("oneshots")
      .only(["slug", "title", "writers", "date"])
      .sortBy("num", "asc")
      .fetch();
    return {
      series,
      oneshots,
    };
  },
  head() {
    return {
      title: `Storylines - stories.fangdustry.me`,
    };
  },
};
</script>
