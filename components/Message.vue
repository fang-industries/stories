<template>
  <div
    :class="
      (alignment === 'right' ? 'justify-end' : 'justify-start') +
      ' w-[48rem] flex'
    "
  >
    <div class="flex flex-col">
      <span
        :class="
          (alignment === 'right' ? 'pr-12 pl-2 text-right' : 'pl-12 pr-2') +
          '  text-neutral-500 text-sm pb-2 bg-gradient-to-br'
        "
      >
        {{ contact }}
      </span>
      <div class="flex gap-x-3">
        <img
          :class="
            (alignment === 'right' ? 'hidden' : null) +
            ' w-8 h-8 rounded-full my-auto'
          "
          :src="img"
        />
        <p
          :class="
            (alignment === 'right'
              ? 'from-lime-500 to-lime-600'
              : 'dark:from-neutral-600 dark:to-neutral-700') +
            ' w-fit py-2 px-4 rounded-xl text-neutral-100 bg-gradient-to-br my-auto'
          "
        >
          <slot />
        </p>
        <img
          :class="
            (alignment === 'left' ? 'hidden' : null) +
            ' w-8 h-8 rounded-full my-auto'
          "
          :src="img"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    alignment: String,
    img: String,
    contact: String,
  },
};
</script>
