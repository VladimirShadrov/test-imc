<template>
  <div>
    <p>{{ componentDataObject.label }}</p>
    <select v-model="selected">
      <option disabled value="">Выберите значение</option>
      <option v-for="option in componentData.listdata" :key="option.key" :value="option">{{ option.value }}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'app-select',
  props: ['componentData'],
  data() {
    return {
      selected: '',
      componentDataObject: this.componentData,
    };
  },
};
</script>

<style scoped>
select {
  margin: 8px;
  padding: 6px 8px;
  width: 34%;
}
p {
  padding: 0 8px;
  margin: 4px 0 0 0;
  font-weight: bold;
}
</style>
