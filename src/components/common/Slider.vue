<script>
import PopUp from './PopUp.vue';
export default {
  components: { PopUp },
  name: 'ImageSlider',
  props: ["slides"],

  // methods
  methods: {
    FullScreen() 
    {
      this.popUrl = this.slides[this.selected];
    }
  },

  // data
  data() { return {
    selected: 0,
    popUrl: ""
  }},
  
}
</script>

<template>
<div class="slider-container">
  <img 
    @click="FullScreen"
    class="slider-img"
    :src="slides[selected]" 
   />
  <div class="images-list">
    <img 
      :class="[{'selected': i == selected}]"
      @click="selected = i" 
      v-for="(url, i) in slides" 
      :key="url" 
      :src="url" 
    />
  </div>

  <pop-up @click="popUrl = null" v-if="popUrl">
    <img class="pop-image" :src="popUrl" />
  </pop-up>
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
  cursor:zoom-in;
  border-radius: 5px;
}

.slider-img:hover {
  outline: solid 1px rgba(0, 0, 0, 0.822);
}

.images-list img {
  width: 70px;
  height: 70px;
  object-fit: cover;
  opacity: .6;
  cursor: pointer;
  padding: 3px;
  border-radius: 10px;
}

.selected {
  opacity: 1.0 !important;
  outline: solid 1px black;
}

.pop-image {
  width: 80%;
  height: 80%;
  object-fit: scale-down;
  cursor:zoom-out;
}
</style>
