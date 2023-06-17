<template>
  <form @submit.prevent>
    <input
      v-model="value"
      type="text"
      placeholder="Введите название задачи"
    />
    <button @click="addItem">Добавить</button>
  </form>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'ToDoForm',
  data() {
    return {
      value: ''
    };
  },

  methods: {
    ...mapMutations(['addTodo']),

    addItem() {
      this.addTodo(this.value)
      this.value = '';
    }
  }
};
</script>

<style scoped>
form {
  display: flex;
  justify-content: center;
  gap: 15px;
}
</style>
