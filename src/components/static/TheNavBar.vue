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
    text: "Social",
    to: "/social",
    span: "public"
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
      this.currentRoute = to;
      this.$router.push(to);
    }
  }
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
  <div class="nav-footer">
    &copy; Johnl 2022
  </div>
</div>
</template>


<style scoped>
.nav-bar-container {
  width: 200px;
  display: flex;
  flex-direction: column;
  user-select: none;
  cursor: pointer;
  gap: 3px;
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
  font-size: 20px;
  color: rgb(136, 136, 136);
  padding: 10px;
  border-radius: 15px;
}

.nav-btn span {
  margin-right: 10px;
}

.nav-btn:hover {
  outline: solid 1px rgb(134, 163, 255);
}

.btn-active {
  background-color: rgb(239, 242, 255);
  outline: solid 1px rgb(134, 163, 255);
  color: rgb(75, 117, 255);
}
</style>
