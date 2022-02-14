<script>
import { GetProjectContent, GetProject } from '../script/ProjectParser.js'

export default {
  name: 'Project',

  data() { return {
    project: {},
    content: ""
  }},

  async created() 
  {
    const projectId = this.$route.params.id;
    var proj = await GetProject(projectId);

    if(!proj) {
      this.$router.push("/projects");
      return;
    }

    this.project = proj;
    this.content = GetProjectContent(projectId);
  },

  methods: {
    GoBack() 
    {
      this.$router.go(-1);
    }
  },
}
</script>


<template>
  <div class="project">
    <div class="proj-title">
      <!-- Project Title -->
      {{project.title}}

      <!-- Back button -->
      <button @click="GoBack()" class="material-icons icon-btn red">
        clear
      </button>
    </div>

    <!-- body -->
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

