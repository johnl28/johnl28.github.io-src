<script>
import TheNavBar from './components/static/TheNavBar.vue'

export default {
  name: "AppComponent",
  components: { TheNavBar },
  methods: {

  },

  created() {
    document.title = "Johnl";
  }
}
</script>


<template>
  <TheNavBar />
  <router-view class="box router" />
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
</style>
