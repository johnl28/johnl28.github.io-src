<script>
let links = [
  {
    class: "fa-github",
    url: "https://github.com/johnl28",
  },
  {
    class: "fa-linkedin",
    url: "https://www.linkedin.com/in/ionut-criste-a22557212/",
  },
  {
    class: "fa-youtube",
    url: "https://www.youtube.com/channel/UCNcXyEy1-Lv5iHshjhFEj8Q",
  },
]



export default {
  name: 'TheFooter',

  // data
  data() { return {
    links: links,
    currentRoute: "/"
  }},
  
  // methods
  methods: {
    Go(url) 
    {
      window.open(url, '_blank').focus();
    }
  }
}
</script>

<template>
<div class="footer-container">
  <i v-for="link in links" :key="link" :class="['fa', link.class]" @click="Go(link.url)"></i>
  <div class="copy-container">
    &copy; Johnl 2022, All rights reserved
  </div>
</div>
</template>


<style scoped>

.footer-container {
  display: flex;
  flex-direction: row;
  width: 100%;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  font-size: 30px;
  gap: 15px;
  flex-wrap: wrap;
}

.footer-container .fa {
  cursor: pointer;
  user-select: none;
  opacity: 0.4;
  transition-duration: 0.3s;
}

.footer-container .fa:hover {
  cursor: pointer;
  user-select: none;
  opacity: 0.7;
}

.copy-container {
  padding: 10px;
  width: 100%;
  text-align: center;
  font-size: 13px;
  opacity: 0.2;
}
</style>
