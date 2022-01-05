<script>
import { ParseTxtContent } from '../script/utils.js'

export default {
  name: 'Home',
  data() { return {
    content: ""
  }},

  async created() 
  {
    this.content = await ParseTxtContent(`/data/home.txt`);
  }
}
</script>


<template>
  <div class="home" v-html="content"></div>
</template>

