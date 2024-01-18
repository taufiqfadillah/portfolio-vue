<template>
  <div class="scroll-circle hidden" @click="scrollToContent" ref="scrollButton">
    <div class="circle-border">
      <div class="spinner"></div>
    </div>
    <div class="arrow-icon">
      <i class="bi bi-caret-up-fill"></i>
    </div>
  </div>
</template>

<script>
import { onMounted, nextTick, ref } from 'vue';

export default {
  setup() {
    const scrollButton = ref(null);

    const scrollToContent = () => {
      const content = document.getElementById('content');
      if (content) {
        content.scrollIntoView({ behavior: 'smooth' });
      }
    };

    const checkScroll = () => {
      if (scrollButton.value) {
        const e = window.scrollY;
        e > 0 ? scrollButton.value.classList.add('active') : scrollButton.value.classList.remove('active');
      }
    };

    onMounted(() => {
      window.addEventListener('scroll', checkScroll);
      nextTick(checkScroll);
    });

    return {
      scrollButton,
      scrollToContent,
      checkScroll,
    };
  },
};
</script>
