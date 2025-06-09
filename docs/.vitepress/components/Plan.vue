<template>
  <section :class="[
    'flex flex-col rounded-3xl px-6 sm:px-8 plan-item ring-1 ring-slate-700',
    featured ? 'bg-blue-600 py-8 lg:order-none' : 'py-8 lg:py-8',
  ]">
    <h3 class="mt-5 font-display text-lg text-white">{{ name }}</h3>
    <p :class="['mt-2 text-base', featured ? 'text-white' : 'text-slate-400']">
      {{ description }}
    </p>
    <p class="order-first font-display text-5xl font-light tracking-tight text-white">
      <span class="pr-4" v-if="price != '?'">$</span>{{ price }}
    </p>
    <ul role="list" :class="[
      'order-last mt-10 flex flex-col gap-y-3 text-sm',
      featured ? 'text-white' : 'text-slate-200',
    ]">
      <li v-for="feature in features" :key="feature" class="flex">
        <CheckIcon :class="featured ? 'text-white' : 'text-slate-400'" />
        <span class="ml-4">{{ feature }}</span>
      </li>
    </ul>
    <Button :href="href" :variant="featured ? 'solid' : 'outline'" color="white" class="mt-8 btn-a"
      :aria-label="`Get started with the ${name} plan for ${price}`" @click.stop="buyNow">
      {{ btnText }}
    </Button>
  </section>
</template>

<script setup name="Plan">
import CheckIcon from "./CheckIcon.vue";
import Button from "./Button.vue";

const emits = defineEmits(["buy-now"]);

const props = defineProps({
  name: { type: String, required: true },
  price: { type: String, required: true },
  description: { type: String, required: true },
  href: { type: String, required: true },
  features: { type: Array, required: true },
  featured: { type: Boolean, default: false },
  btnText: { type: String, default: "Buy now" },
});

function buyNow() {
  emits("buy-now", { price: props.price });
}
</script>

<style lang="scss" scoped>
.plan-item {
  &:hover {
    color: var(--color-white);

    .text-white,
    .text-slate-400 {
      color: var(--color-white) !important;
    }

    a.group {
      background-color: var(--color-white);
      color: var(--color-slate-900) !important;
    }

    background-color: var(--color-blue-600);
  }
}

a.group {
  cursor: default;
}

.pr-4 {
  padding-right: 4px;
}
</style>
