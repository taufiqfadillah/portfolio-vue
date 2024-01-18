<template>
  <input type="checkbox" class="dark-mode" id="darkModeToggle" v-model="isDarkMode" @change="toggleDarkMode" hidden />
  <label for="darkModeToggle">
    <div class="toggle"></div>
  </label>
</template>

<script>
import { ref, onMounted } from 'vue';
export default {
  setup() {
    const isDarkMode = ref(false);

    const toggleDarkMode = () => {
      if (isDarkMode.value) {
        localStorage.setItem('darkMode', 'enabled');
      } else {
        localStorage.setItem('darkMode', 'disabled');
      }
      applyDarkMode();
    };

    const applyDarkMode = () => {
      const isDarkModeEnabled = localStorage.getItem('darkMode') === 'enabled';
      if (isDarkModeEnabled) {
        document.body.classList.add('dark-mode');
        darkModeToggle.checked = true;
      } else {
        document.body.classList.remove('dark-mode');
        darkModeToggle.checked = false;
      }
    };
    onMounted(() => {
      applyDarkMode();
    });
    return {
      isDarkMode,
      toggleDarkMode,
    };
  },
};
</script>
