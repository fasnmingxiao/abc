<template>
  <div class="d-none d-xl-block container">
    <div class="row">
      <component :is="menuVertical"></component>
      <component :is="secondaryMenu"></component>
    </div>
  </div>
</template>
<script>
import MenuVertical from "./HeaderMenuVertical.vue";
import MenuRight from "./HeaderMenuRight.vue";
export default {
  name: "HeaderMenu",
  components: { MenuVertical },
  data() {
    return {
      menuVertical: MenuVertical,
      secondaryMenu: MenuRight,
    };
  },
};
</script>
<style></style>
