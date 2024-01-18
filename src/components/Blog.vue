<template>
  <div class="section-box mt-4" id="blog">
    <div class="row">
      <div class="col-12 col-md-10 col-xl-8">
        <h6 class="title-heading mb-3" data-backdrop-text="Blog">Blog</h6>
        <h1>Latest Blog Posts</h1>
        <p>Stay updated with my latest blog posts on web development and freelancing insights.</p>
      </div>
    </div>
    <div class="mt-4 mt-lg-5">
      <!-- Blog Post box -->
      <div class="blog-container">
        <SkeletonLoader v-if="loading" />
        <div v-else>
          <div v-for="article in articles" :key="article.id" class="blog-post-box">
            <div class="blog-post-img">
              <router-link :to="{ name: 'blog-single', params: { slug: article.slug } }">
                <div class="image-container">
                  <img :src="'https://gudrtdnruivalvgpfens.supabase.co/storage/v1/object/public/taufiqproject/blog/' + article.image" :alt="article.title" />
                </div>
              </router-link>
              <div class="blog-post-category">
                <a href="#">{{ article.category[0] }}</a>
              </div>
            </div>
            <div class="blog-post-caption">
              <p class="mb-2">Posted on {{ new Date(article.date).toDateString() }}</p>
              <h2>
                <router-link :to="{ name: 'blog-single', params: { slug: article.slug } }" class="link-decoration blog-title">{{ article.title }}</router-link>
              </h2>
              <router-link :to="{ name: 'blog-single', params: { slug: article.slug } }" class="button button-sm button-outline-dark mt-2">Read more</router-link>
            </div>
          </div>
        </div>
      </div>
      <button v-if="showLoadMoreButton" @click="loadMoreArticles" class="button button-sm button-outline-dark mt-2">Load more</button>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import SkeletonLoader from './layouts/SkeletonLoader.vue';
import { useRouter } from 'vue-router';

export default {
  components: {
    SkeletonLoader,
  },
  setup() {
    const loading = ref(true);
    const articles = ref([]);
    const articlesPerLoad = 4;
    let currentLoadedArticles = ref(0);
    const showLoadMoreButton = ref(false);

    const router = useRouter();

    const fetchArticles = async () => {
      try {
        const response = await fetch('https://dashboard.taufiqproject.my.id/blogs');
        const data = await response.json();
        articles.value = data;
        showLoadMoreButton.value = data.length > articlesPerLoad;
      } catch (error) {
        console.error('Error fetching articles:', error);
      } finally {
        loading.value = false;
      }
    };
    const loadMoreArticles = () => {
      currentLoadedArticles.value += articlesPerLoad;
    };

    const goToSingleBlog = (slug) => {
      router.push({ name: 'about', params: { slug: slug } });
    };

    onMounted(() => {
      fetchArticles();
    });

    return {
      articles,
      loadMoreArticles,
      showLoadMoreButton,
      loading,
      goToSingleBlog,
    };
  },
};
</script>

<style scoped>
.blog-title {
  font-size: 24px;
}
.blog-post-caption {
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
}
.dark-mode .blog-title {
  font-size: 24px;
}
.dark-mode .blog-post-caption {
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
}
@media screen and (max-width: 768px) {
  .blog-post-caption {
    max-width: 90%;
    padding: 0 10px;
    margin-top: 12px;
  }
  .dark-mode .blog-post-caption {
    max-width: 90%;
    padding: 0 10px;
    margin-top: 12px;
  }
}
</style>
