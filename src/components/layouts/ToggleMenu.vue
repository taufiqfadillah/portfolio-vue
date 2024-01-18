<template>
  <button class="menu-dots" @click="toggleMenu">
    <span></span>
  </button>
</template>

<script>
import { ref, onMounted } from 'vue';
export default {
  setup() {
    const isMenuOpen = ref(false);

    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value;
      const menu = document.querySelector('.toggle-menu');
      if (menu) {
        if (isMenuOpen.value) {
          menu.classList.add('show');
        } else {
          menu.classList.remove('show');
        }
      }
    };

    const closeMenu = (event) => {
      if (!event.target.closest('.toggle-menu, .menu-dots') && isMenuOpen.value) {
        isMenuOpen.value = false;
        const menu = document.querySelector('.toggle-menu');
        if (menu) {
          menu.classList.remove('show');
        }
      }
    };

    const closeMenuOnClick = () => {
      isMenuOpen.value = false;
      const menu = document.querySelector('.toggle-menu');
      if (menu) {
        menu.classList.remove('show');
      }
    };

    onMounted(() => {
      const closeButton = document.querySelector('.toggle-close');
      if (closeButton) {
        closeButton.addEventListener('click', closeMenuOnClick);
      }
      window.addEventListener('click', closeMenu);
    });

    return {
      toggleMenu,
    };
  },
};
</script>
