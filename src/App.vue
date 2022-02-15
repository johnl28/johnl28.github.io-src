<script>
import TheNavBar from './components/static/TheNavBar.vue'
import TheFooter from './components/static/TheFooter.vue'
import TheLoadingBox from './components/static/TheLoadingBox.vue'

export default {
  name: "TheAppComponent",
  components: { TheNavBar, TheFooter, TheLoadingBox },
  methods: {

  },

  created() {
    document.title = "Johnl - Home";
  }
}
</script>

<template>
  <TheNavBar></TheNavBar>
  <div class="middle-box">
    <router-view class="box router" />
    <TheLoadingBox class="box router" />
    <TheFooter />
  </div>

</template>

<style>
#app {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  padding: 20px;
}

.router {
  width: 100% !important;
  min-height: 300px;
}

.middle-box {
  display: flex;
  flex-direction: column;
  min-width: 600px;
  height: fit-content;
  width: 600px;
}
</style>
