<template>
  <div
    class="min-h-screen flex w-full dark:selection:bg-lime-400 dark:selection:text-neutral-800 selection:bg-lime-600 selection:text-neutral-200"
  >
    <div
      class="z-40 hidden md:flex w-96 h-screen flex-col rounded-r-3xl shadow-lg gap-y-4 dark:bg-neutral-900 bg-[rgb(240,240,240)] px-4 py-8 fixed overflow-y-auto"
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
          <p class="text-sm no-underline text-neutral-500">
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
        <div class="flex flex-col gap-y-8 md:gap-y-16">
          <div class="flex flex-col gap-y-4">
            <h1 class="text-4xl font-semibold text-lime-500">Hello there!</h1>
            <p>
              Welcome to
              <a href="https://stories.fangdustry.me">stories.fangdustry.me</a>!
              - a place where we write fictional stories of what we would be
              like as a family.
            </p>
          </div>
          <div class="flex flex-col gap-y-4">
            <h3 class="text-2xl font-medium">
              Welcome to the more fictional side of our minds.
            </h3>
            <div
              class="gap-y-2 flex flex-col text-neutral-600 dark:text-neutral-300"
            >
              <p>
                This is a place where we can let our imaginations run wild and
                write stories.
              </p>
              <p>These stories pictures a group of 10 friends, as a family.</p>
              <p>For the best experience, please read all stories.</p>
            </div>
          </div>
          <div class="flex flex-col gap-y-4">
            <h3 class="text-2xl font-medium">Contribution and submissions</h3>
            <div
              class="gap-y-2 flex flex-col text-neutral-600 dark:text-neutral-300"
            >
              <p>
                Contributions for fixes on spelling and grammatical errors are
                welcome via pull requests. Otherwise, you can submit them
                through the issues page of this repository.
              </p>
              <p>
                To submit a story idea, you can submit them on the issues page
                of this repository.
              </p>
              <p>
                A link to this repository
                <a href="https://github.com/fang-industries/stories"
                  >can be found here</a
                >.
              </p>
            </div>
          </div>
          <div class="flex flex-col gap-y-4">
            <h3 class="text-2xl font-semibold">A thanks to our sponsor</h3>
            <p class="text-neutral-600 dark:text-neutral-300">
              RAID: Shadow Legends™ is an immersive online experience with
              everything you'd expect from a brand new RPG title. It's got an
              amazing storyline, awesome 3D graphics, giant boss fights, PVP
              battles, and hundreds of never before seen champions to collect
              and customize. I never expected to get this level of performance
              out of a mobile game. Look how crazy the level of detail is on
              these champions!
            </p>
            <p class="text-neutral-600 dark:text-neutral-300">
              RAID: Shadow Legends™️ is getting big real fast, so you should
              definitely get in early. Starting now will give you a huge head
              start. There's also an upcoming Special Launch Tournament with
              crazy prizes! And not to mention, this game is absolutely free! So
              go ahead and check out the video description to find out more
              about RAID: Shadow Legends™️. There, you will find a link to the
              store page and a special code to unlock all sorts of goodies.
              Using the special code, you can get 50,000 Silver immediately, and
              a FREE Epic Level Champion asTo submit a story idea, you can
              submit them on the issues page of this repository. part of the new
              players program, courtesy of course of the RAID: Shadow Legends™️
              devs.
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
