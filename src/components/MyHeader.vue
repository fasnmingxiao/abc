<template>
  <header id="header" class="u-header u-header-left-aligned-nav">
    <div class="u-header__section">
      <component :is="headerTopBar"></component>
      <!-- Logo-Search-header-icons -->
      <component :is="headerLogoSearch"></component>
      <!-- End Logo-Search-header-icons -->
      <component :is="headerMenu"></component>
    </div>
  </header>
</template>

<script>
import HeaderTop from "./HeaderTop.vue";
import HeaderLogoSearch from "./HeaderLogoSearch.vue";
import HeaderMenu from "./HeaderMenu.vue";

export default {
  name: "MyHeader",
  components: { HeaderTop, HeaderLogoSearch, HeaderMenu },
  data() {
    return {
      headerTopBar: "HeaderTop",
      headerLogoSearch: "HeaderLogoSearch",
      headerMenu: "HeaderMenu",
    };
  },
};
</script>
<style scoped></style>
