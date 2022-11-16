<template>
  <div>
    <p>{{ componentDataObject.label }}</p>
    <input type="date" v-model="selectedDate" />
  </div>
</template>

<script>
export default {
  name: 'app-date-input',
  props: ['componentData'],
  data() {
    return {
      componentDataObject: this.componentData,
      selectedDate: this.componentData.value,
    };
  },
  watch: {
    selectedDate() {
      this.componentDataObject.value = this.selectedDate;
      this.$emit('sendValue', this.componentDataObject);
    },
  },
};
</script>

<style scoped>
input {
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
