<template>
  <div>
    <h1>Текстовый редактор</h1>
    <AppContainer v-for="container in dataForRender" :key="container.code" :componentData="container" @changeComponentValue="changeValue" />
    <button @click="sendDataForModal">Показать отредактированные данные</button>
  </div>
</template>

<script>
import initialData from '../data';
import AppContainer from './container.vue';

export default {
  name: 'app-text-editor',
  components: { AppContainer },
  data() {
    return {
      data: JSON.parse(initialData),
      dataForRender: [],
    };
  },
  methods: {
    changeValue(componentObject) {
      const currentObject = this.data.find((item) => item.code === componentObject.code);

      if (currentObject) {
        currentObject.value = componentObject.value;
      }
    },
    sendDataForModal() {
      this.$emit('setDataForModal', { data: JSON.stringify(this.data), showModal: true });
    },
  },
  created() {
    const containers = [];

    this.data.forEach((item) => {
      switch (item.type) {
        case 'input':
          item.component = 'AppTextInput';
          break;
        case 'datepicker':
          item.component = 'AppDateInput';
          break;
        case 'list':
          item.component = 'AppSelect';
          break;
        case 'container':
          item.component = 'app-container';
          break;
      }

      if (item.type === 'container') {
        item.children = this.data.filter((field) => field.parent === item.code);
        containers.push(item);
      }
    });

    this.dataForRender = containers.filter((container) => container.parent === null);
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
  font-size: 28px;
  margin-bottom: 16px;
}
button {
  cursor: pointer;
  padding: 6px 8px;
  color: rgba(0, 0, 0, 0.7);
  transition: all 0.3s;
  margin-top: 16px;
}
button:hover {
  color: rgba(0, 0, 0, 0.9);
}
</style>
