<template>
  <div id="app">
    <AppTextEditor @setDataForModal="showModal" />
    <AppModal v-if="isModalVisible" :data="dataForModal" @hideModal="isModalVisible = $event" />
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
      dataForModal: [],
      isModalVisible: false,
    };
  },
  methods: {
    showModal(data) {
      this.dataForModal = JSON.stringify(data.data);
      this.isModalVisible = data.showModal;
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: 16px;
}

#app {
  padding: 16px;
}
</style>
