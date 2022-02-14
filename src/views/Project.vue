<script>
import ArticleParser from '../script/ArticleParser.js'

export default {
  name: 'Project',

  data() { return {
    dictData: {},
    htmlContent: ""
  }},

  methods: {
    GoBack() 
    {
      this.$router.go(-1);
    },

    async InitContent(id)
    {
      let articleParser = new ArticleParser();
      this.htmlContent = await articleParser.GetArticleHTMLContent(id);
    },

    async InitData(id)
    {
      let articleParser = new ArticleParser();
      var article = await articleParser.GetArticleTable(id);
      if(!article) {
        return false;
      }
      return true;
    },

    async InitPage()
    {
      const articleId = this.$route.params.id;

      if(!await this.InitData(articleId)) {
        return false;
      }

      this.InitContent(articleId);
      return true;
    }
  },

  async created() 
  {
    if(!await this.InitPage()) {
      this.$router.push("/projects");
    }
  }
}
</script>


<template>
  <div class="project">
    <div class="proj-title">
      <!-- Project Title -->
      {{dictData.title}}

      <!-- Back button -->
      <button @click="GoBack()" class="material-icons icon-btn red">
        clear
      </button>
    </div>

    <!-- body -->
    <div class="project-body">
      <Slider v-if="dictData.slides" :slides="dictData.slides" />
      <div class="project-content" v-html="htmlContent" />
    </div>

  </div>
</template>

<style scoped>
.project {
  padding: 0px;
}

.proj-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  font-size: 20px;
  border-bottom: solid 1px var(--hoz-line-color);
  height: fit-content;
  padding: 15px;
  font-weight: bold;
  color: var(--project-title-color);
  gap: 10px;
}

.project-body {
  width: 100%;
  padding: 15px;
  display: flex;
  flex-direction: column;
}

.project-content {
  width: 100%;
  display: flex;
  flex-direction: column;
}
</style>

