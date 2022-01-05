<script>
import { ParseTxtContent } from '../script/utils.js'

export default {
  name: 'Project',

  data() { return {
    project: {},
    content: ""
  }},

  async created() 
  {
    var proj = await this.$root.GetProject(this.$route.params.id);
    if(!proj) 
    {
      this.$router.push("/projects");
      return;
    }

    this.project = proj;
    this.content = await ParseTxtContent(`/data/${proj.content}`);
  }
}
</script>


<template>
  <div class="project">
    <div class="proj-title">
      {{project.title}}
    </div>
    <div class="project-body">
      <Slider v-if="project.slides" :slides="project.slides" />
      <div class="project-content" v-html="content" />
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
  width: 100%;
  font-size: 20px;
  border-bottom: solid 1px var(--hoz-line-color);
  height: fit-content;
  padding: 15px;
  font-weight: bold;
  color: var(--project-title-color);
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

