<template lang="">
  <footer>
    <component :is="footerTop"></component>
    <component :is="footerNewsLetter"></component>
    <component :is="footerBottom"></component>
  </footer>
</template>
<script>
import FooterTop from "./FooterTop.vue";
import FooterNewsLetter from "./FooterNewsLetter.vue";
import FooterBottom from "./FooterBottom.vue";
export default {
  components: {
    FooterTop,
  },
  data() {
    return {
      footerTop: FooterTop,
      footerNewsLetter: FooterNewsLetter,
      footerBottom: FooterBottom,
    };
  },
};
</script>
<style lang=""></style>
