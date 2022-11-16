<template>
  <div id="app">
    <AppTextEditor />
    <AppModal v-if="isModalVisible" />
  </div>
</template>

<script>
import AppTextEditor from './components/textEditor.vue';
import AppModal from './components/modal.vue';
export default {
  name: 'App',
  components: { AppTextEditor, AppModal },
  data() {
    return {
      isModalVisible: false,
    };
  },
};
</script>

<style></style>
