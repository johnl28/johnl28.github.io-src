<script>
export default {
  name: 'TextBox',
  props: ["conponentData"],
  
}
</script>

<template>
<div class="text-container">
  {{conponentData}}
</div>
</template>


<style scoped>
.text-container {
  width: 100%;
  padding: 15px;
}
</style>
