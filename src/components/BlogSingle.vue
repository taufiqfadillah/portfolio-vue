<template>
  <div id="content">
    <!-- Background Vertical lines -->
    <div class="bg-lines">
      <div class="bg-line-1"></div>
      <div class="bg-line-2"></div>
      <div class="bg-line-3"></div>
      <div class="bg-line-4"></div>
    </div>
    <!-- end Background Vertical lines -->

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
          <div class="nav-wrapper">
            <div class="section-nav">
              <ul class="nav">
                <li class="nav-item">
                  <a class="nav-link" href="/">
                    <span class="nav-link-desktop">Home</span>
                    <span class="nav-link-mobile">H</span>
                    <span class="nav-circle"></span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" href="#blog">
                    <span class="nav-link-desktop">Blog Single</span>
                    <span class="nav-link-mobile">B</span>
                    <span class="nav-circle"></span>
                  </a>
                </li>
              </ul>
            </div>
            <!-- end section-nav -->
          </div>
          <!-- end nav-wrapper -->
        </div>
        <!-- end col -->

        <div class="col-12 col-lg-8 col-xl-9" v-if="article" id="blog">
          <div class="sections-wrapper">
            <div class="blog-details-container">
              <div class="section-box">
                <div class="row g-4">
                  <div class="col-4 col-xl-4">
                    <h6 class="mono-heading mb-0">Posted by:</h6>
                    <p>{{ article.author }}</p>
                  </div>
                  <div class="col-4 col-xl-4">
                    <h6 class="mono-heading mb-0">Category:</h6>
                    <p>{{ article.category }}</p>
                  </div>
                  <div class="col-4 col-xl-4">
                    <h6 class="mono-heading mb-0">Posted on:</h6>
                    <p>{{ new Date(article.date).toDateString() }}</p>
                  </div>
                </div>
                <!-- end row -->

                <div class="mt-4">
                  <h1>{{ article.title }}</h1>
                </div>

                <div class="row g-4 mt-2">
                  <div class="col-12">
                    <img class="border-radius" :src="'https://gudrtdnruivalvgpfens.supabase.co/storage/v1/object/public/taufiqproject/blog/' + article.image" :alt="article.title" />
                  </div>
                  <div class="col-12">
                    <div class="fw-medium"></div>
                    <p>
                      {{ article.content }}
                    </p>
                  </div>
                </div>
                <!-- end row -->

                <!-- Tags -->
                <ul class="list-inline-pills mt-5">
                  <li v-for="tags in article.tags" :key="tags">
                    <a href="#">{{ tags }}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div v-else class="col-12 col-lg-8 col-xl-9">Loading...</div>
      </div>
      <!-- end col -->
    </div>
    <!-- end main row -->
  </div>
  <!-- end main container -->
</template>

<script>
import { ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import ToggleDarkMode from './layouts/ToggleDarkMode.vue';
import ToggleMenu from './layouts/ToggleMenu.vue';

export default {
  components: {
    ToggleDarkMode,
    ToggleMenu,
  },
  setup() {
    const article = ref([]);
    const route = useRoute();

    function stripHtmlTags(str) {
      if (str === null || str === '') return false;
      else str = str.toString();
      return str.replace(/<[^>]*>/g, '');
    }

    async function fetchArticleDetails(slug) {
      try {
        const response = await fetch(`https://dashboard.taufiqproject.my.id/blogs?slug=${slug}`);
        const data = await response.json();
        if (data.length > 0) {
          let articleData = data.find((a) => a.slug === slug);
          articleData.author = stripHtmlTags(articleData.author);
          articleData.date = stripHtmlTags(articleData.date);
          articleData.title = stripHtmlTags(articleData.title);
          articleData.content = stripHtmlTags(articleData.content);
          articleData.category = stripHtmlTags(articleData.category);
          article.value = articleData;
        } else {
          console.error('No articles found for slug:', slug);
        }
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    }

    watch(
      () => route.params.slug,
      (newSlug) => {
        fetchArticleDetails(newSlug).catch((error) => {
          console.log('Error on page refresh:', error);
        });
      }
    );

    onMounted(() => {
      fetchArticleDetails(route.params.slug).catch((error) => {
        console.log('Error on component mount:', error);
      });
    });

    return { article };
  },
};
</script>
