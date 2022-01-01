<script>
export default {
  name: 'ImageSlider',
  props: ["conponentData"],
  // data
  data() { return {
    selected: 0,
  }},
  
}
</script>

<template>
<div class="slider-container">
  <img class="slider-img" :src="conponentData[selected]" />
  <div class="images-list">
    <img 
      :class="[{'selected': i == selected}]"
      @click="selected = i" 
      v-for="(url, i) in conponentData" 
      :key="url" 
      :src="url" 
    />
  </div>
</div>
</template>


<style scoped>
.slider-container {
  width: 100%;
}

.images-list {
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  gap: 10px;
  width: 100%;
  padding: 10px;
}

.slider-img {
  width: 100%;
  height: 300px;
  margin: auto;
  display: block;
  object-fit: scale-down;
}

.images-list img {
  width: 70px;
  height: 70px;
  object-fit: cover;
  opacity: .4;
}

.selected {
  opacity: 1.0 !important;
}
</style>
