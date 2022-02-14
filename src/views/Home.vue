<script>
import ArticleParser from '../script/ArticleParser.js'
import constants from '../script/constants.js'

export default {
  name: 'Home',
  data() { return {
    htmlContent: ""
  }},

  async created() 
  {
    let articleParser = new ArticleParser();
    this.htmlContent = await articleParser.FetchMarkDownFile(`/${constants.root_dir}/home.md`);
  }
}
</script>


<template>
  <div class="home" v-html="htmlContent"></div>
</template>

