<script>
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
    Navigate(to) 
    {
      if (this.currentRoute == to) {
        return;
      }

      this.currentRoute = to;
      this.$router.push(to);
    }
  },
}
</script>

<template>

<div class="box nav-bar-container">
  <div :class="['nav-btn', { 'btn-active': currentRoute == route.to }]" v-for="route in routes" :key="route" @click="Navigate(route.to)">
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
  background: rgb(241, 244, 255);
}

.btn-active {
  background: rgb(227, 234, 255);
  color: rgb(0, 0, 0);
}
</style>
