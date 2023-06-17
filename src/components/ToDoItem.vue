<template>
  <div class="todo">
    <input
      v-if="item.editable"
      class="text"
      v-model="value"
      type="text"
    />
    <p
      v-else
      class="text"
    >
      {{ item.text }}
    </p>

    <div class="buttons">
      <button
        v-if="item.editable"
        @click="saveEditableTodo(value)"
      >
        Сохранить
      </button>

      <button
        v-else
        @click="editTodo(item.id)"
      >
        Редактировать
      </button>

      <button @click="deleteTodo(item.id)">Удалить</button>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'ToDoItem',
  props: ['item'],
  data() {
    return {
      value: this.item.text
    };
  },

  methods: {
    ...mapMutations(['deleteTodo', 'editTodo', 'saveEditableTodo'])
  }
};
</script>

<style scoped>
.todo {
  padding: 10px;
  border: 1px solid;
  margin-bottom: 15px;
}

.text {
  margin-bottom: 15px;
}

.buttons {
  display: flex;
  gap: 15px;
  justify-content: center;
}
</style>
