<template>
  <div class="section-box mt-4" id="testimonial">
    <div class="row align-items-center">
      <div class="col-6">
        <h6 class="title-heading mb-0" data-backdrop-text="Testimonial">What People Say</h6>
      </div>
      <div class="col-6 text-end">
        <!-- Slider Navigation -->
        <div class="swiper-custom-nav">
          <div class="button-circle button-circle-sm button-circle-outline-dark swiper-custom-prev">
            <i class="bi bi-arrow-left"></i>
          </div>
          <div class="button-circle button-circle-sm button-circle-outline-dark swiper-custom-next">
            <i class="bi bi-arrow-right"></i>
          </div>
        </div>
        <!-- end Slider Navigation -->
      </div>
    </div>
    <!-- end row -->
    <div class="swiper testimonial-swiper mt-4">
      <div class="swiper-wrapper">
        <!-- Swiper item 1 -->
        <div class="swiper-slide">
          <div class="testimonial-box">
            <div class="d-block text-yellow mb-3">
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
            </div>
            <p>Really they guy is amazing , he saved my times and properly have completed my requirment with great effort. I appreciate to him for web & app design, he is good at fit.</p>
          </div>
          <div class="d-flex align-items-center mt-3">
            <div class="d-inline-block me-3">
              <img class="img-mask-avatar-sm" v-bind:src="'frontend/assets/images/avatar-testimoial.svg'" alt="" data-rjs="2" v-bind:width="400" v-bind:height="400" style="aspect-ratio: 1/1" />
            </div>
            <div class="d-inline-block">
              <h5 class="fw-medium m-0 line-height-140">Muhammad Yusri Zamhuri, MA, PhD.</h5>
              <span class="font-small fw-normal">Head - SDGs Universitas Hasanuddin</span>
            </div>
          </div>
        </div>
        <!-- Swiper item 2 -->
        <div class="swiper-slide">
          <div class="testimonial-box">
            <div class="d-block text-yellow mb-3">
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
            </div>
            <p>Really they guy is amazing , he saved my times and properly have completed my requirment with great effort. I appreciate to him for web & app design, he is good at fit.</p>
          </div>
          <div class="d-flex align-items-center mt-3">
            <div class="d-inline-block me-3">
              <img class="img-mask-avatar-sm" v-bind:src="'frontend/assets/images/avatar-testimoial.svg'" alt="" data-rjs="2" v-bind:width="400" v-bind:height="400" style="aspect-ratio: 1/1" />
            </div>
            <div class="d-inline-block">
              <h5 class="fw-medium m-0 line-height-140">Prof. Dr. Anwar Daud, SKM.,M.Kes.</h5>
              <span class="font-small fw-normal">Head - PSLH Universitas Hasanuddin</span>
            </div>
          </div>
        </div>
        <!-- Swiper item 3 -->
        <div class="swiper-slide">
          <div class="testimonial-box">
            <div class="d-block text-yellow mb-3">
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
            </div>
            <p>Really they guy is amazing , he saved my times and properly have completed my requirment with great effort. I appreciate to him for web & app design, he is good at fit.</p>
          </div>
          <div class="d-flex align-items-center mt-3">
            <div class="d-inline-block me-3">
              <img class="img-mask-avatar-sm" v-bind:src="'frontend/assets/images/avatar-testimoial.svg'" alt="" data-rjs="2" v-bind:width="400" v-bind:height="400" style="aspect-ratio: 1/1" />
            </div>
            <div class="d-inline-block">
              <h5 class="fw-medium m-0 line-height-140">Nurul Izzah</h5>
              <span class="font-small fw-normal">Head - Zona Laundry Mart</span>
            </div>
          </div>
        </div>
      </div>
      <!-- end swiper-wrapper -->
    </div>
    <!-- end swiper -->
  </div>
</template>

<script>
import { onMounted } from 'vue';
export default {
  setup() {
    onMounted(() => {
      var swiper = new Swiper('.clients-swiper', {
        slidesPerView: 2,
        spaceBetween: 30,
        grabCursor: !0,
        breakpoints: { 768: { slidesPerView: 3, spaceBetween: 30 }, 992: { slidesPerView: 3, spaceBetween: 40 }, 1200: { slidesPerView: 5, spaceBetween: 40 } },
        autoplay: { delay: 2500, disableOnInteraction: !1 },
      });
      swiper = new Swiper('.testimonial-swiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        breakpoints: { 768: { slidesPerView: 1, spaceBetween: 30 }, 992: { slidesPerView: 1, spaceBetween: 40 }, 1200: { slidesPerView: 2, spaceBetween: 40 } },
        navigation: { nextEl: '.swiper-custom-next', prevEl: '.swiper-custom-prev' },
        autoplay: { delay: 2500, disableOnInteraction: !1 },
      });
    });
  },
};
</script>
