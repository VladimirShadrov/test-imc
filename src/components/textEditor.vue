<template>
  <div>
    <h1>Текстовый редактор</h1>
  </div>
</template>

<script>
export default {
  name: 'app-text-editor',
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
