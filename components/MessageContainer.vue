<template>
  <div>
    <div
      v-if="this.$nuxt.$route.path.startsWith('/cinta-and-jason/')"
      class="gap-y-4 flex flex-col py-8 my-8 border-y-2 border-stone-600"
    >
      <div
        :class="(!platform && !time ? 'hidden' : '') + ' flex flex-col gap-y-1'"
      >
        <span v-if="platform" class="text-sm text-center text-stone-500">{{
          platform
        }}</span>
        <span
          v-if="time"
          class="text-sm text-center font-semibold text-stone-600"
          >{{ time }}</span
        >
      </div>
      <slot />
    </div>
    <div
      v-else
      class="
        gap-y-8
        flex flex-col
        py-8
        my-8
        border-y-2
        dark:border-neutral-600
        border-neutral-400
      "
    >
      <div
        :class="(!platform && !time ? 'hidden' : '') + ' flex flex-col gap-y-1'"
      >
        <span
          v-if="platform"
          class="text-sm text-center text-neutral-500 dark:text-neutral-400"
          >{{ platform }}</span
        >
        <span
          v-if="time"
          class="
            text-sm text-center
            font-semibold
            text-neutral-600
            dark:text-neutral-300
          "
          >{{ time }}</span
        >
      </div>
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    platform: String,
    time: String,
  },
};
</script>
