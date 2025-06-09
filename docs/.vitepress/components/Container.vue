<template>
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" v-bind="attrsWithoutClass">
    <slot />
  </div>
</template>

<script setup>
import { computed, useAttrs } from "vue";

const attrs = useAttrs();

const attrsWithoutClass = computed(() => {
  const { class: _, ...rest } = attrs;
  return rest;
});
</script>
