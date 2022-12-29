<template>
  <div
    class="
      min-h-screen
      flex
      w-full
      selection:bg-[#412B1D]
      selection:text-white
      bg-[url(@/assets/images/crumpled.png)] bg-fixed
    "
  >
    <div
      class="
        w-96
        h-screen
        hidden
        md:flex
        flex-col
        gap-y-4
        px-4
        py-8
        fixed
        overflow-y-auto
      "
    >
      <h4
        class="
          font-cursive
          text-2xl
          font-semibold
          text-[#412B1D]
          px-2
          pt-2
        "
      >
        Episode Index — {{ episodes.length }}
      </h4>
      <div
        class=" text-stone-200
          px-2
          font-mono
          flex
          justify-between
          bg-stone-800
          rounded-full
          py-1
        "
      >
        <div class="flex gap-x-2">
          <i class="fa-solid fa-code-branch my-auto"></i>
          <p class="my-auto">cinta-and-jason</p>
        </div>
        <nuxt-link
          class="
            rounded-full
            bg-[#412B1D]
            hover:bg-[#67412A]
            px-2
            transition
          "
          to="/cinta-and-jason/storylines"
        >
          <i class="fa-solid fa-angle-right my-auto text-white"></i>
        </nuxt-link>
      </div>
      <nuxt-link
        v-for="episode in episodes"
        :key="episode.num"
        :to="'/cinta-and-jason/' + episode.slug"
        class="w-full no-underline"
      >
        <div
          :class="
            ep.slice(25).slice(0, 1) === episode.num.toString()
              ? 'flex flex-col p-2 rounded-lg bg-[#412B1D] transition selection:bg-white selection:text-[#412B1D]'
              : 'flex flex-col p-2 rounded-lg hover:bg-[#412B1D] hover:bg-opacity-20 transition border-2 border-[#67412A]'
          "
        >
          <p
            class=""
            :class="
              ep.slice(25).slice(0, 1) === episode.num.toString()
                ? 'text-sm no-underline text-white'
                : 'text-sm text-stone-800'
            "
          >
            Episode #{{ episode.num }} • {{ episode.writtenOn }}
          </p>
          <span
            :class="
              ep.slice(25).slice(0, 1) === episode.num.toString()
                ? 'no-underline hover:text-white text-white'
                : ' text-stone-800'
            "
          >
            {{ episode.title }}
          </span>
        </div>
      </nuxt-link>
    </div>
    <div
      class="
        md:pl-96
        2xl:pl-[28rem]
        w-full
        flex
        justify-center
        text-neutral-800
      "
    >
      <div class="md:hidden fixed z-30 bottom-0 w-full">
        <nuxt-link to="/cinta-and-jason/episodes">
          <div
            class="
              bg-stone-800 bg-opacity-80
              w-full
              backdrop-blur-sm
              border-t border-stone-800
              text-center
              py-1
              underline
              text-white
            "
          >
            Show Episodes
          </div>
        </nuxt-link>
      </div>
      <transition name="story" mode="out-in" appear>
        <div
          id="ep"
          class="
            md:w-[48rem]
            xl:w-[52rem]
            2xl:w-[56rem]
            px-4
            md:px-8
            h-full
            flex flex-col
            py-8
            md:py-16
            justify-between
          "
        >
          <article class="gap-y-8 flex flex-col md:mb-0 mb-8">
            <div class="flex flex-col gap-y-2">
              <h1 class="text-[#67412A] text-4xl font-bold font-cursive italic">
                {{ page.title }}
              </h1>
            </div>
            <nuxt-content
              :document="page"
              class="
                prose prose-stone
                max-w-none
                prose-h1:text-3xl
                prose-h1:font-cursive
                prose-h2:font-cursive
                prose-h3:font-cursive
                prose-h4:font-cursive
                prose-h5:font-cursive
                prose-h2:text-2xl
                prose-h3:text-xl
                prose-h4:text-xl
                prose-h1:text-[#67412A]
                prose-h2:text-[#67412A]
                prose-h3:text-[#67412A]
                prose-h4:text-[#67412A]
                prose-h5:text-[#67412A]
                prose-h6:text-[#67412A]
                prose-a:text-lime-500
                prose-a:underline
                prose-a:transition
                hover:prose-a:text-lime-700
                prose-blockquote:font-normal
                prose-code:rounded-md
                prose-code:bg-neutral-200
                prose-code:bg-opacity-60
                prose-code:p-1
                prose-code:font-mono
                prose-p:font-normal
                prose-code:text-green-600
                prose-li:marker:text-neutral-500
                prose-code:before:content-none
                prose-code:after:content-none
                prose-img:rounded-xl
              "
            />
          </article>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const episodes = await $content("cinta-and-jason")
      .only(["slug", "title", "num", "writer", "writtenOn"])
      .sortBy("num", "asc")
      .fetch();

    const page = await $content("cinta-and-jason", params.slug).fetch();

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
      ep: this.$nuxt.$route.path,
    };
  },
};
</script>
