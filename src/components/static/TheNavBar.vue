<script>

// Navigation buttons
let r = [
  {
    text: "Home",
    to: "/",
    span: "home"
  },
  {
    text: "Projects",
    to: "/projects",
    span: "code"
  },
  {
    text: "About",
    to: "/about",
    span: "help"
  },
]



export default {
  name: 'TheNavBar',

  // data
  data() { return {
    routes: r,
    currentRoute: "/"
  }},
  
  // methods
  methods: {
    UpdateActiveTab()
    {
      setTimeout(() => { this.currentRoute  = this.$route.meta.id; }, 50)
    },

    Navigate(index, to) 
    {
      if (this.currentRoute == index) {
        return;
      }
      this.$router.push(to);
      this.UpdateActiveTab();
      
    }
  },

  mounted() { 
    this.UpdateActiveTab();
  }
}
</script>

<template>

<div class="box nav-bar-container">
  <div v-for="(route, i) in routes" :key="i" @click="Navigate(index, route.to)" :class="['nav-btn', { 'btn-active': currentRoute == i }]">
    <span class="material-icons">
      {{route.span}}
    </span>
    {{route.text}}
  </div>
</div>
</template>


<style scoped>
.nav-bar-container {
  width: 200px;
  display: flex;
  flex-direction: column;
  gap: 3px;
  height: fit-content;
}

.nav-footer {
  padding-top: 10px;
  text-align: center;
  width: 100%;
  color: rgba(0, 0, 0, 0.356);
  font-size: 15px;
  border-top: rgba(0, 0, 0, 0.075) solid 1px;
  font-weight: bold;
}

.nav-btn {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 18px;
  color: rgb(158, 158, 158);
  padding: 10px;
  border-radius: 15px;
  user-select: none;
  cursor: pointer;
}

.nav-btn span {
  margin-right: 10px;
}

.nav-btn:hover {
  color: rgb(0, 0, 0);
}

.btn-active {
  background: rgb(227, 234, 255);
  color: rgb(0, 0, 0);
}
</style>
