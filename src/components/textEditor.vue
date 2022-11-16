<template>
  <div>
    <h1>Текстовый редактор</h1>
  </div>
</template>

<script>
import initialData from '../data';

export default {
  name: 'app-text-editor',
  data() {
    return {
      data: JSON.parse(initialData),
      dataForRender: [],
    };
  },
  created() {
    console.log('Data: ', this.data);

    const containers = [];

    this.data.forEach((item) => {
      if (item.type === 'container') {
        item.children = this.data.filter((field) => field.parent === item.code);
        containers.push(item);
      }
    });

    this.dataForRender = containers.filter((container) => container.parent === null);

    console.log(this.dataForRender);
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
