<template>
  <div class="u-header-topbar py-2 d-none d-xl-block">
    <div class="container">
      <div class="d-flex align-items-center">
        <div class="topbar-left">
          <a href="#" class="text-gray-110 font-size-13 hover-on-dark"
            >Welcome to Worldwide Electronics Store
          </a>
        </div>
        <div class="topbar-right ml-auto">
          <ul class="list-inline mb-0">
            <li
              class="list-inline-item mr-0 u-header-topbar__nav-item u-header-topbar__nav-item-border"
            >
              <a
                href="../home/contact-v2.html"
                class="u-header-topbar__nav-link"
              >
                <v-icon name="co-location-pin" class="top-header-icon" />
                Store Locator
              </a>
            </li>
            <li
              class="list-inline-item mr-0 u-header-topbar__nav-item u-header-topbar__nav-item-border"
            >
              <a
                href="../shop/track-your-order.html"
                class="u-header-topbar__nav-link"
              >
                <v-icon name="la-shipping-fast-solid" class="top-header-icon" />
                Track Your Order
              </a>
            </li>
            <li
              class="list-inline-item mr-0 u-header-topbar__nav-item u-header-topbar__nav-item-border"
            >
              <!-- Account Sidebar Toggle Button -->
              <a
                id="sidebarNavToggler"
                href="javascript:;"
                role="button"
                class="u-header-topbar__nav-link target-of-invoker-has-unfolds"
                aria-controls="sidebarContent"
                aria-haspopup="true"
                aria-expanded="false"
                data-unfold-event="click"
                data-unfold-hide-on-scroll="false"
                data-unfold-target="#sidebarContent"
                data-unfold-type="css-animation"
                data-unfold-animation-in="fadeInRight"
                data-unfold-animation-out="fadeOutRight"
                data-unfold-duration="500"
              >
                <v-icon name="la-user" class="top-header-icon" />
                Register
                <span class="text-gray-50">or</span> Sign in
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "HeaderTop",
};
</script>
<style scoped>
.top-header-icon {
  margin: auto 5px 0;
}
</style>
