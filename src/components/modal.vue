<template>
  <div class="overlay" @click.self="hideModal">
    <div class="modal">
      <div class="modal__head">
        <h1 class="modal__head-title">Вы ввели следующую информацию</h1>
      </div>
      <div class="modal__content">
        <p class="modal__content-info" v-for="item in dataForRenderList" :key="item.code">
          {{ JSON.stringify(item) }}
        </p>
      </div>
      <div class="modal__actions">
        <button class="modal__actions-btn" @click="hideModal">Закрыть</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app-modal',
  props: ['data'],
  data() {
    return {
      initialData: JSON.parse(this.data),
      dataForRenderList: [],
    };
  },
  methods: {
    hideModal() {
      this.$emit('hideModal', false);
    },
  },
  created() {
    this.dataForRenderList = this.initialData
      .filter((item) => Object.prototype.hasOwnProperty.call(item, 'value'))
      .map((item) => {
        const { code, value } = item;
        return {
          [code]: value,
        };
      });
  },
};
</script>

<style scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: white;
  border-radius: 8px;
  padding: 16px;
}

.modal__head {
  padding-bottom: 8px;
  border-bottom: 1px solid grey;
}
.modal__head-title {
  text-align: center;
  font-size: 28px;
}
.modal__content {
  padding: 8px 0;
  border-bottom: 1px solid grey;
}
.modal__content-info {
  line-height: 28px;
}
.modal__actions {
  padding-top: 8px;
}
.modal__actions-btn {
  cursor: pointer;
  padding: 6px 8px;
  color: rgba(0, 0, 0, 0.7);
  transition: all 0.3s;
}
.modal__actions-btn:hover {
  color: rgba(0, 0, 0, 0.9);
}
</style>
