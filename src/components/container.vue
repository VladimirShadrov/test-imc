<template>
  <div class="container">
    <h2 class="container__title">{{ componentData.label }}</h2>
    <component v-for="item in componentData.children" :key="item.code" :is="item.component" :componentData="item"></component>
  </div>
</template>

<script>
import AppTextInput from './textInput.vue';
import AppDateInput from './dateInput.vue';
import AppSelect from './select.vue';

export default {
  name: 'app-container',
  props: ['componentData'],
  components: { AppTextInput, AppDateInput, AppSelect },
};
</script>

<style scoped>
.container {
  border: 1px solid grey;
}
.container__title {
  padding: 0 8px;
  margin: 6px 0;
  font-size: 24px;
}
</style>
