<script>
import TextBox from '../components/project/TextBox.vue'
import Slider from '../components/project/Slider.vue'
import HTMLBox from '../components/project/HTMLBox.vue'


export default {
  name: 'Project',
  components: {
    'images-box': Slider,
    'text-box': TextBox,
    'html-box': HTMLBox,
    
  },

  data() { return {
    project: {}
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
  }
}
</script>


<template>
  <div class="project">
    <div class="proj-title">
      {{project.title}}
    </div>
    <div class="project-content">
      <component v-for="con in project.content" 
        :key="con" 
        :is="con.type" 
        :conponent-data="con.data"
      />
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

.project-content {
  width: 100%;
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 5px;
}
</style>

