<template>
  <div
    class="flex flex-col gap-y-8 py-8 my-8 border-y-2 dark:border-neutral-600 border-neutral-400"
  >
    <div class="flex flex-col gap-y-1">
      <span
        class="text-sm text-center text-neutral-500 dark:text-neutral-400"
        >{{ platform }}</span
      >
      <span
        class="text-sm text-center font-semibold text-neutral-600 dark:text-neutral-300"
        >{{ time }}</span
      >
    </div>
    <slot />
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
