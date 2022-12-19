<template>
  <MyHeader />
  <main id="content" role="main">
    <SliderBanner />
    <div class="container">
      <BannerMain />
      <DealsAndTab />
    </div>
    <ProductFourOneFour />
    <div class="container">
      <BestSaler />
    </div>
    <MyFooter />
  </main>
</template>

<script>
// @ is an alias to /src
import MyHeader from "@/components/MyHeader.vue";
import SliderBanner from "@/components/SliderBanner.vue";
import BannerMain from "@/components/BannerMain.vue";
import DealsAndTab from "@/components/DealsAndTab.vue";
import ProductFourOneFour from "@/components/ProductFourOneFour.vue";
import BestSaler from "@/components/BestSaler.vue";
import MyFooter from "@/components/MyFooter.vue";
export default {
  name: "HomeView",
  components: {
    MyHeader,
    SliderBanner,
    BannerMain,
    DealsAndTab,
    ProductFourOneFour,
    BestSaler,
    MyFooter,
  },
};
</script>
