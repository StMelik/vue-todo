<template>
  <div>
    <h1>Список задач</h1>
    <ToDoForm class="todo-form" />
    <div
      v-if="todoList.length"
      class="list"
    >
      <ToDoItem
        v-for="item in todoList"
        :item="item"
        :key="item.id"
      />
    </div>

    <p v-else>Задач нет</p>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import ToDoForm from '@/components/ToDoForm.vue';
import ToDoItem from '@/components/ToDoItem.vue';

export default {
  name: 'ToDoPage',
  components: { ToDoForm, ToDoItem },

  computed: {
    ...mapGetters(['todoList'])
  },

  methods: {
    ...mapActions(['initTodoList'])
  },

  mounted() {
    this.initTodoList();
  }
};
</script>

<style scoped>
.todo-form {
  margin-bottom: 15px;
}
</style>
