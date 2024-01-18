<template>
  <div class="section-box mt-4" id="portfolio">
    <div class="row">
      <div class="col-12 col-md-10 col-xl-8">
        <h6 class="title-heading mb-3" data-backdrop-text="Portfolio">Portfolio</h6>
        <h1>My Works</h1>
        <p>Explore my web development and freelance projects showcasing creativity and technical expertise.</p>
      </div>
    </div>
    <div class="filter mt-4 mt-lg-5 mb-3">
      <ul>
        <li data-filter="all">Show All</li>
        <li data-filter=".category-1">Front End</li>
        <li data-filter=".category-2">Back End</li>
        <li data-filter=".category-3">Full Stack</li>
      </ul>
    </div>
    <!-- end Portfolio Filter -->
    <div class="row g-4 portfolio-grid">
      <!-- Portfolio Item 1 -->
      <div class="col-12 col-xl-6 portfolio-item category-1">
        <div class="portfolio-box">
          <!-- Image -->
          <img v-bind:src="'frontend/assets/images/portfolio1.webp'" alt="" v-bind:width="400" v-bind:height="400" style="aspect-ratio: 1/1" />
          <!-- Category -->
          <span class="portfolio-category">Front-End</span>
          <!-- Caption -->
          <div class="portfolio-caption">
            <h1><a href="https://sdgscenter.unhas.ac.id/" target="_blank">Sustainable Development Goals</a></h1>
          </div>
        </div>
        <!-- end portfolio-box -->
      </div>
      <!-- Portfolio Item 2 -->
      <div class="col-12 col-xl-6 portfolio-item category-1">
        <div class="portfolio-box">
          <!-- Image -->
          <img v-bind:src="'frontend/assets/images/portfolio2.webp'" alt="" v-bind:width="400" v-bind:height="400" style="aspect-ratio: 1/1" />
          <!-- Category -->
          <span class="portfolio-category">Front-End</span>
          <!-- Caption -->
          <div class="portfolio-caption">
            <h1><a href="https://pslh.unhas.ac.id/" target="_blank">Pusat Studi Lingkungan Hidup</a></h1>
          </div>
        </div>
        <!-- end portfolio-box -->
      </div>
      <!-- Portfolio Item 3 -->
      <div class="col-12 col-xl-6 portfolio-item category-2">
        <div class="portfolio-box">
          <!-- Image -->
          <img v-bind:src="'frontend/assets/images/portfolio3.webp'" alt="" v-bind:width="400" v-bind:height="400" style="aspect-ratio: 1/1" />
          <!-- Category -->
          <span class="portfolio-category">Back-End</span>
          <!-- Caption -->
          <div class="portfolio-caption">
            <h1><a href="#">Dashboard SDGs Unhas</a></h1>
          </div>
        </div>
        <!-- end portfolio-box -->
      </div>
      <!-- Portfolio Item 4 -->
      <div class="col-12 col-xl-6 portfolio-item category-1">
        <div class="portfolio-box">
          <!-- Image -->
          <img v-bind:src="'frontend/assets/images/portfolio4.webp'" alt="" v-bind:width="400" v-bind:height="400" style="aspect-ratio: 1/1" />
          <!-- Category -->
          <span class="portfolio-category">Front-End</span>
          <!-- Caption -->
          <div class="portfolio-caption">
            <h1><a href="https://www.zonalaundrymart.com/" target="_blank">Zona Laundry Mart</a></h1>
          </div>
        </div>
        <!-- end portfolio-box -->
      </div>
      <!-- end Portfolio Item 4 -->
      <!-- Portfolio Item 5 -->
      <div class="col-12 col-xl-6 portfolio-item category-1 category-3">
        <div class="portfolio-box">
          <!-- Image -->
          <img v-bind:src="'frontend/assets/images/portfolio5.webp'" alt="" v-bind:width="400" v-bind:height="400" style="aspect-ratio: 1/1" />
          <!-- Category -->
          <span class="portfolio-category">Front-End, Full Stack</span>
          <!-- Caption -->
          <div class="portfolio-caption">
            <h1><a href="https://www.taufiqproject.my.id/" target="_blank">Taufiq Project</a></h1>
          </div>
        </div>
        <!-- end portfolio-box -->
      </div>
      <!-- end Portfolio Item 5 -->
      <!-- Portfolio Item 6 -->
      <div class="col-12 col-xl-6 portfolio-item category-2 category-3">
        <div class="portfolio-box">
          <!-- Image -->
          <img v-bind:src="'frontend/assets/images/portfolio6.webp'" alt="" v-bind:width="400" v-bind:height="400" style="aspect-ratio: 1/1" />
          <!-- Category -->
          <span class="portfolio-category">Back-End, Full Stack</span>
          <!-- Caption -->
          <div class="portfolio-caption">
            <h1><a href="https://dashboard.taufiqproject.my.id/" target="_blank">Dashboard Taufiq Project</a></h1>
          </div>
        </div>
        <!-- end portfolio-box -->
      </div>
      <!-- end Portfolio Item 6 -->
    </div>

    <!-- end row -->
  </div>
</template>

<script>
import { onMounted } from 'vue';
export default {
  setup() {
    onMounted(() => {
      var pGrid = $('.portfolio-grid');
      if (pGrid.length) var mixer = mixitup('.portfolio-grid', { selectors: { target: '.portfolio-item' }, animation: { duration: 250 } });
      var $lightboxImage = $('.lightbox-image-box');
      $lightboxImage.each(function () {
        $(this).magnificPopup({ type: 'image', fixedContentPos: !1, removalDelay: 200, closeOnContentClick: !0, image: { titleSrc: 'data-image-title' } });
      });
      var $lightboxMedia = $('.lightbox-media-box');
      $lightboxMedia.each(function () {
        $(this).magnificPopup({
          type: 'iframe',
          fixedContentPos: !1,
          removalDelay: 200,
          preloader: !1,
          iframe: {
            patterns: { youtube: { index: 'youtube.com/', id: 'v=', src: '//www.youtube.com/embed/%id%?autoplay=1&rel=0' }, vimeo: { index: 'vimeo.com/', id: '/', src: '//player.vimeo.com/video/%id%?autoplay=1' } },
            srcAction: 'iframe_src',
          },
        });
      });
    });
  },
};
</script>
