<template>
  <div id="content">
    <!-- Scroll to Top button -->
    <ScrollToTop />
    <!-- End Scroll to Top button -->

    <!-- Background Vertical lines -->
    <div class="bg-lines">
      <div class="bg-line-1"></div>
      <div class="bg-line-2"></div>
      <div class="bg-line-3"></div>
      <div class="bg-line-4"></div>
    </div>

    <!-- Toggle Menu Content -->
    <div class="toggle-menu bg-black">
      <!-- Close button -->
      <button class="toggle-close">
        <i class="bi bi-x"></i>
      </button>
      <!-- end Close button -->
      <h6 class="mono-heading fw-normal mb-2">Phone:</h6>
      <a href="wa.me/6285175408518"><h4 class="fw-medium">+(62) 851 7540 8518</h4></a>
      <div class="mt-4">
        <h6 class="mono-heading fw-normal mb-2">Email:</h6>
        <a href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRlQhhSZtfCtXGCcXJLWxSJdxWsfcjgSsrXCfgZtKhfhnpLSNstmnWdwrJHwcGRQxgFTxrg" target="_blank"><h4 class="fw-medium">admin@taufiqproject.my.id</h4></a>
        <ul class="list-inline-sm mt-3">
          <li>
            <a class="button-circle button-circle-sm button-circle-white" href="https://www.facebook.com/twfqf/" target="_blank"><i class="bi bi-facebook"></i></a>
          </li>
          <li>
            <a class="button-circle button-circle-sm button-circle-white" href="https://twitter.com/twfiqf" target="_blank"><i class="bi bi-twitter"></i></a>
          </li>
          <li>
            <a class="button-circle button-circle-sm button-circle-white" href="https://www.instagram.com/twfq_f/" target="_blank"><i class="bi bi-instagram"></i></a>
          </li>
          <li>
            <a class="button-circle button-circle-sm button-circle-white" href="https://www.linkedin.com/in/taufiqfadillah/" target="_blank"><i class="bi bi-linkedin"></i></a>
          </li>
        </ul>
      </div>
      <div class="tm-bottom">
        <p>&copy; <span id="current-year"></span> Taufiq Project || All Deserved.</p>
      </div>
    </div>
    <!-- end Toggle Menu Content -->

    <div class="container">
      <div id="header">
        <div class="row">
          <div class="col-12 col-lg-4 col-xl-3 order-lg-2 text-end">
            <div class="d-inline-flex align-items-center">
              <!-- Social Links -->
              <ul class="list-inline d-inline-block mono-heading fw-medium">
                <li>
                  <a class="link-decoration" href="https://www.facebook.com/twfqf/" target="_blank">FB</a>
                </li>
                <li>
                  <a class="link-decoration" href="https://twitter.com/twfiqf" target="_blank">TW</a>
                </li>
                <li>
                  <a class="link-decoration" href="https://www.instagram.com/twfq_f/" target="_blank">IG</a>
                </li>
                <li>
                  <a class="link-decoration" href="https://www.linkedin.com/in/taufiqfadillah/" target="_blank">In</a>
                </li>
              </ul>
              <!-- Toggle Dark Mode -->
              <ToggleDarkMode />
              <!-- end Toggle Dark Mode -->

              <!-- Toggle Menu Button -->
              <ToggleMenu />
              <!-- end Toggle Menu Button -->
            </div>
          </div>
          <!-- end col -->
          <div class="col-12 col-lg-8 order-lg-1 col-xl-9">
            <div class="py-4">
              <h1 class="display-2 fw-semi-bold m-0">Taufiq <span class="stroke-text">Fadillah</span></h1>
            </div>
          </div>
          <!-- end col -->
        </div>
        <!-- end row -->
      </div>

      <div class="row g-4 g-lg-5">
        <div class="col-12 col-lg-4 col-xl-3">
          <!-- Main Nav -->
          <Navigasi />
          <!-- end nav-wrapper -->
          <!-- end Main Nav -->
        </div>
        <!-- end col -->

        <div class="col-12 col-lg-8 col-xl-9">
          <div class="sections-wrapper" data-bs-spy="scroll" data-bs-target=".section-nav">
            <!-- About section -->
            <About />
            <!-- end About section -->

            <!-- Portfolio section -->
            <Portfolio />
            <!-- end Portfolio section -->

            <!-- Services section -->
            <Services />
            <!-- end Services section -->

            <!-- Testimonial section -->
            <Testimonial />
            <!-- end Services section -->

            <!-- Resume section -->
            <Resume />
            <!-- end Resume section -->

            <!-- Blog section -->
            <Blog />
            <!-- end Blog section -->

            <!-- Contact section -->
            <Contact />
            <!-- end Contact section -->

            <!-- Google Maps -->
            <Maps />
            <!-- end Google Maps -->
          </div>
          <!-- end tab-content -->
        </div>
        <!-- end col -->
      </div>
      <!-- end main row -->
    </div>
    <!-- end main container -->
  </div>
</template>

<script>
import { onMounted } from 'vue';
import About from './About.vue';
import Portfolio from './Portfolio.vue';
import Services from './Services.vue';
import Testimonial from './Testimonial.vue';
import Resume from './Resume.vue';
import Blog from './Blog.vue';
import Contact from './Contact.vue';
import Maps from './Maps.vue';
import ToggleDarkMode from './layouts/ToggleDarkMode.vue';
import ScrollToTop from './layouts/ScrollToTop.vue';
import Navigasi from './layouts/Navigasi.vue';
import ToggleMenu from './layouts/ToggleMenu.vue';

export default {
  name: 'MasterView',
  components: {
    About,
    Portfolio,
    Services,
    Testimonial,
    Resume,
    Blog,
    Contact,
    Maps,
    ToggleDarkMode,
    ScrollToTop,
    Navigasi,
    ToggleMenu,
  },
  setup() {
    onMounted(() => {
      initializeSmoothScroll();
      initializePreloader();
    });

    function initializeSmoothScroll() {
      const anchors = document.querySelectorAll('a[href^=\\#]');
      anchors.forEach((anchor) => {
        anchor.addEventListener('click', (e) => {
          e.preventDefault();
          const target = document.querySelector(anchor.getAttribute('href'));
          target.scrollIntoView({ behavior: 'smooth' });
        });
      });
    }

    function initializePreloader() {
      const body = document.body;
      if (body.dataset.preloader === 'true') {
        const preloader = document.createElement('div');
        preloader.className = 'preloader';
        preloader.innerHTML = '<div><span>L</span><span>O</span><span>A</span><span>D</span><span>I</span><span>N</span><span>G</span></div>';
        body.appendChild(preloader);
      }
      window.addEventListener('load', () => {
        body.classList.add('loaded');
      });
    }
  },
};
</script>
