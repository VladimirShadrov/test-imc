<template>
  <div>
    <p>{{ componentDataObject.label }}</p>
    <select v-model="selectedItem">
      <option v-for="option in componentData.listdata" :key="option.key" :value="option.value">{{ option.value }}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'app-select',
  props: ['componentData'],
  data() {
    return {
      selectedItem: this.componentData.listdata[this.componentData.value - 1].value,
      componentDataObject: this.componentData,
    };
  },
  watch: {
    selectedItem() {
      console.log(this.selectedItem);

      this.componentDataObject.value = this.componentData.listdata.find((item) => item.value === this.selectedItem).key;
      this.$emit('sendValue', this.componentDataObject);
    },
  },
};
</script>

<style scoped>
select {
  margin: 8px;
  padding: 6px 8px;
  width: 33%;
}
p {
  padding: 0 8px;
  margin: 4px 0 0 0;
  font-weight: bold;
}
</style>
