<script>
import TheNavBar from './components/static/TheNavBar.vue'
import TheFooter from './components/static/TheFooter.vue'

export default {
  name: "AppComponent",
  components: { TheNavBar, TheFooter },
  methods: {
    async GetProject(id)
    {
      let res = await fetch('/data/projects.json');
      let projects = await res.json();

      for(let i in projects)
      {
        if (projects[i].id == id) {
          return projects[i];
        }
      }
      return null;
    }
  },

  created() {
    document.title = "Johnl - Home";
  }
}
</script>


<template>
  <TheNavBar />
  <div class="content-box">
    <router-view class="box router" />
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

.content-box {
  display: flex;
  flex-direction: column;
  min-width: 600px;
  height: fit-content;
  width: 600px;
}
</style>
