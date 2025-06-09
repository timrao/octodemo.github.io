<template>
  <section
    id="pricing"
    aria-label="Pricing"
    class="bg-slate-900 py-20 sm:py-22"
  >
    <Container>
      <div class="md:text-center">
        <h2 class="font-display text-3xl tracking-tight text-white sm:text-4xl">
          <span class="relative whitespace-nowrap">
            <SwirlyDoodle
              class="absolute top-1/2 left-0 h-[1em] w-full fill-blue-400"
            />
            <span class="relative">{{ t("pricing_title_1") }}</span>
          </span>
          {{ t("pricing_title_2") }}
        </h2>
        <p class="mt-4 text-lg text-slate-400">
          {{ t("pricing_sub_title") }}
        </p>
      </div>

      <div
        class="-mx-4 mt-16 grid max-w-2xl grid-cols-1 gap-y-10 sm:mx-auto lg:-mx-8 lg:max-w-none lg:grid-cols-3 xl:mx-0 xl:gap-x-8"
      >
        <Plan
          :featured="featured == 0"
          :name="t('standard_license')"
          :price="prices_1"
          @click.stop="onChoice(0)"
          @buy-now="onBuyNow"
          :description="t('standard_license_desc')"
          href=""
          :btnText="t('standard_license_buy_button')"
          :features="[
            t('standard_license_features_1'),
            t('common_license_features_1'),
            t('common_license_features_2'),
            t('common_license_features_3'),
            t('common_license_features_4'),
          ]"
        />
        <Plan
          :featured="featured == 1"
          :name="t('personal_license')"
          :price="prices_2"
          @click.stop="onChoice(1)"
          @buy-now="onBuyNow"
          :description="t('personal_license_desc')"
          href=""
          :btnText="t('standard_license_buy_button')"
          :features="[
            t('personal_license_features_1'),
            t('common_license_features_1'),
            t('common_license_features_2'),
            t('common_license_features_3'),
            t('common_license_features_4'),
          ]"
        />
        <Plan
          :featured="featured == 2"
          :name="t('team_license')"
          price="?"
          @click.stop="onChoice(2)"
          @buy-now="onBuyNow"
          :description="t('team_license_desc')"
          href=""
          :btnText="t('standard_license_buy_button')"
          :features="[
            t('team_license_features_1'),
            t('common_license_features_1'),
            t('common_license_features_2'),
            t('common_license_features_3'),
            t('common_license_features_4'),
          ]"
        />
      </div>
    </Container>
  </section>
</template>

<script setup>
import Plan from "../../components/Plan.vue";
import SwirlyDoodle from "../../components/SwirlyDoodle.vue";
import Container from "../../components/Container.vue";
import { ref, onMounted, computed } from "vue";
import { useI18n } from "vue-i18n";
import { getStripePayUrl, prices } from "./stripePay";

const props = defineProps({
  locale: {
    type: String,
    default: "en",
  },
});

const prices_1 = computed(() => {
  return (prices ?? [])[0] || "0.00";
});
const prices_2 = computed(() => {
  return prices.length >= 2 ? prices[1] : "0.00";
});

//加载国际化
const { t, locale } = useI18n();

/**
 * 生命周期 - 挂载
 */
onMounted(() => {
  locale.value = props.locale;
});

const featured = ref(1);
const onChoice = (type) => {
  if (featured.value === type) return;
  featured.value = type;
};

/**联系我们-打开&&发送邮件 */
function gotoContactUs() {
  try {
    window.open("mailto://hypobenthos@outlook.com", "_blank");
  } catch (err) {
    console.error(err);
  }
}

/**
 * 立即购买
 * @param item
 */
function onBuyNow(item) {
  const price = item?.price ?? "";
  if (price === "?") {
    gotoContactUs();
    return;
  }
  // stripePay(price);
  getStripePayUrl(price);
}
</script>
