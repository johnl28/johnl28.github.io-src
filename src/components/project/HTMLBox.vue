<script>
export default {
  name: 'HTMLBox',
  props: ["conponentData"],
  
}
</script>

<template>
<div class="html-container" v-html="conponentData"></div>
</template>


<style scoped>
.html-container {
  width: 100%;
  padding: 15px;
}
</style>
