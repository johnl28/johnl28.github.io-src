<script>
import { ParseTxtContent } from '../script/utils.js'
var data = {
  content: ""
}
export default {
  name: 'Home',
  data() { return data},

  async created() 
  {
    this.content = await ParseTxtContent(`/data/home.txt`);
  }
}
</script>


<template>
  <div class="home" v-html="content"></div>
</template>

