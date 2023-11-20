<template>
  <div class="squares">
    <app-left @some="show"></app-left>
    <app-right></app-right>
  </div>
</template>

<script>
import AppLeft from './components/LeftPanel.vue';
import AppRight from './components/RightPanel.vue';

export default {
  name: 'App',
  components: {
    AppLeft,
    AppRight,
  },
};
</script>

<style>
.squares {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
