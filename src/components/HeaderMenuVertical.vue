<template>
  <div class="col-md-auto d-none d-xl-block">
    <div class="max-width-270 min-width-270">
      <!-- Basics Accordion -->
      <div id="basicsAccordion">
        <!-- Card -->
        <div class="card border-0">
          <div class="card-header card-collapse border-0" id="basicsHeadingOne">
            <button
              type="button"
              class="btn-link btn-remove-focus btn-block d-flex card-btn py-3 text-lh-1 px-4 shadow-none btn-primary rounded-top-lg border-0 font-weight-bold text-gray-90"
              data-bs-toggle="collapse"
              data-bs-target="#basicsCollapseOne"
              aria-expanded="true"
              aria-controls="basicsCollapseOne"
            >
              <span class="ml-0 text-gray-90 mr-2">
                <span class="fa fa-list-ul"></span>
              </span>
              <span class="pl-1 text-gray-90">All Departments</span>
            </button>
          </div>
          <div
            id="basicsCollapseOne"
            class="collapse show vertical-menu"
            aria-labelledby="basicsHeadingOne"
            data-parent="#basicsAccordion"
          >
            <div class="card-body p-0">
              <nav
                class="js-mega-menu navbar navbar-expand-xl u-header__navbar u-header__navbar--no-space hs-menu-initialized hs-menu-horizontal hs-mobile-state"
              >
                <div
                  id="navBar"
                  class="collapse navbar-collapse u-header__navbar-collapse"
                >
                  <ul class="navbar-nav u-header__navbar-nav">
                    <li
                      class="nav-item u-header__nav-item"
                      data-event="hover"
                      data-position="left"
                    >
                      <a
                        href="#"
                        class="nav-link u-header__nav-link font-weight-bold"
                        >Value of the Day</a
                      >
                    </li>
                    <li
                      class="nav-item u-header__nav-item"
                      data-event="hover"
                      data-position="left"
                    >
                      <a
                        href="#"
                        class="nav-link u-header__nav-link font-weight-bold"
                        >Top 100 Offers
                      </a>
                    </li>
                    <li
                      class="nav-item u-header__nav-item"
                      data-event="hover"
                      data-position="left"
                    >
                      <a
                        href="#"
                        class="nav-link u-header__nav-link font-weight-bold"
                        >New Arrivals
                      </a>
                    </li>
                    <!-- Nav Item MegaMenu -->
                    <li
                      class="nav-item hs-has-mega-menu u-header__nav-item"
                      data-event="hover"
                      data-animation-in="slideInUp"
                      data-animation-out="fadeOut"
                      data-position="left"
                    >
                      <a
                        id="basicMegaMenu"
                        class="nav-link u-header__nav-link"
                        href="javascript:;"
                        aria-haspopup="true"
                        aria-expanded="false"
                        >Computers &amp; Accessories
                      </a>

                      <!-- Nav Item - Mega Menu -->
                      <div
                        class="hs-mega-menu vmm-tfw u-header__sub-menu"
                        aria-labelledby="basicMegaMenu"
                        style="display: none"
                      >
                        <div class="vmm-bg">
                          <img
                            class="img-fluid"
                            src="https://transvelo.github.io/electro-html/2.0/assets/img/500X400/img1.png"
                            alt="Image Description"
                          />
                        </div>
                        <div class="row u-header__mega-menu-wrapper">
                          <div class="col mb-3 mb-sm-0">
                            <span class="u-header__sub-menu-title"
                              >Computers &amp; Accessories
                            </span>
                            <ul class="u-header__sub-menu-nav-group mb-3">
                              <li>
                                <a
                                  class="nav-link u-header__sub-menu-nav-link"
                                  href="#"
                                >
                                  All Computers &amp; Accessories
                                </a>
                              </li>
                              <li>
                                <a
                                  class="nav-link u-header__sub-menu-nav-link"
                                  href="#"
                                >
                                  Laptops, Desktops &amp; Monitors
                                </a>
                              </li>
                              <li>
                                <a
                                  class="nav-link u-header__sub-menu-nav-link"
                                  href="#"
                                >
                                  Printers &amp; Ink
                                </a>
                              </li>
                              <li>
                                <a
                                  class="nav-link u-header__sub-menu-nav-link"
                                  href="#"
                                >
                                  Networking &amp; Internet Devices
                                </a>
                              </li>
                              <li>
                                <a
                                  class="nav-link u-header__sub-menu-nav-link"
                                  href="#"
                                >
                                  Computer Accessories
                                </a>
                              </li>
                              <li>
                                <a
                                  class="nav-link u-header__sub-menu-nav-link"
                                  href="#"
                                >
                                  Software
                                </a>
                              </li>
                              <li>
                                <a
                                  class="nav-link u-header__sub-menu-nav-link u-nav-divider border-top pt-2 flex-column align-items-start"
                                  href="#"
                                >
                                  <div class="">All Electronics</div>
                                  <div
                                    class="u-nav-subtext font-size-11 text-gray-30"
                                  >
                                    Discover more products
                                  </div>
                                </a>
                              </li>
                            </ul>
                          </div>

                          <div class="col mb-3 mb-sm-0">
                            <span class="u-header__sub-menu-title"
                              >Office &amp; Stationery
                            </span>
                            <ul class="u-header__sub-menu-nav-group">
                              <li>
                                <a
                                  class="nav-link u-header__sub-menu-nav-link"
                                  href="#"
                                  >All Office &amp; Stationery
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <!-- End Nav Item - Mega Menu -->
                    </li>
                    <!-- End Nav Item MegaMenu-->
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
        <!-- End Card -->
      </div>
      <!-- End Basics Accordion -->
    </div>
  </div>
</template>
<script>
export default {
  name: "HeaderMenuVertical",
};
</script>
<style></style>
