<script>
export default {
  name: 'Projects',
  data() { return {
    projects: []
  }},

  mounted()
  {
    fetch('/data/projects.json')
      .then(response => response.json())
      .then(data => { this.projects = data; });
  }


}
</script>


<template>
  <div class="projects">
    <div 
      v-for="proj in projects" 
      :key="proj" 
      class="project-row"
      @click="$router.push(`/project/${proj.id}`)"
    >
      <a style="color: var(--project-title-color); font-weight: bold;">{{proj.title}}</a>
      <div v-if="proj.desc" class="proj-desc">
        {{proj.desc}}
      </div>
      <div class="proj-tags">
        <i class="tag" v-for="tag in proj.tags" :key="tag">{{tag}}</i>
      </div>
    </div>
  </div>
</template>

<style scoped>
.projects {
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  padding: 10px;
  gap: 5px;
}

.project-row {
  background-color: var(--text-box-background);
  cursor: pointer;
  border-radius: 15px;
  padding: 10px;
  border: solid 1px var(--border-color);
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.project-row:hover {
  
  border-color: rgb(110, 110, 110);
}

.proj-tags {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 5px;
}

.tag {
  opacity: .5;
  font-weight: lighter;
  font-size: 13px;
}

.proj-desc {
  font-size: 13px;
  color: rgb(48, 48, 48);
}
</style>

