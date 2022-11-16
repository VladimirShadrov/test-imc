<template>
  <div>
    <p>{{ componentData.label }}</p>
    <input type="text" v-model.lazy="text.value" />
  </div>
</template>

<script>
export default {
  name: 'app-text-input',
  props: ['componentData'],
  data() {
    return {
      text: this.componentData,
    };
  },
  watch: {
    'text.value'() {
      this.$emit('sendValue', this.text);
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
