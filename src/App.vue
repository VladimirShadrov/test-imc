<template>
  <div id="app">
    <AppTextEditor />
    <AppModal />
  </div>
</template>

<script>
import AppTextEditor from './components/textEditor.vue';
import AppModal from './components/modal.vue';
export default {
  name: 'App',
  components: { AppTextEditor, AppModal },
};
</script>

<style></style>
