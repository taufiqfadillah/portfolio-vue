<template>
  <div class="skeleton-loading">
    <div class="skeleton-block" style="width: 320px; height: 170px"></div>
    <div class="skeleton-block" style="width: 80%; height: 20px; margin-top: 8px"></div>
    <div class="skeleton-block" style="width: 60%; height: 20px; margin-top: 8px"></div>
    <div class="skeleton-block" style="width: 80%; height: 20px; margin-top: 8px"></div>
  </div>
</template>

<style scoped>
@keyframes skeleton-loading {
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: 200px 0;
  }
}
.skeleton-loading {
  animation: skeleton-loading 1.5s infinite;
  background-image: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200px 100%;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  padding: 16px;
}
.skeleton-block {
  background-color: #ffffff;
  border-radius: 4px;
  margin-bottom: 8px;
}
.dark-mode .skeleton-loading {
  animation: skeleton-loading 1.5s infinite;
  background-image: linear-gradient(90deg, #cccccc 25%, #e0e0e0 50%, #ccc 75%);
  background-size: 200px 100%;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  padding: 16px;
}
.dark-mode .skeleton-block {
  background-color: #a5a5a5;
  border-radius: 4px;
  margin-bottom: 8px;
}
</style>
