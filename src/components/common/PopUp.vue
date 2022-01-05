<script>
export default {
  name: 'PopUp',
  props: ["show"]
}
</script>

<template>
  <div class="pop-container">
    <slot></slot>
  </div>
</template>


<style scoped>
.pop-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.781);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99;
}
</style>
