<template>
  <div
    @dblclick="$emit('toggle-reminder', task.id)"
    :class="[task.reminder ? 'reminder' : '', 'task']"
  >
    <!-- 
      @dblclick="$emit(...)" means, if we catch double-click event, emit it up with
      'toggle-reminder' event, plus a value of task.id. -tian
    -->
    <h3>
      {{ task.text }}
      <!-- 
        old way -tian
        <i @click="onDelete(task.id)" class="fas fa-times"></i>
        onDelete() is defined in methods below.
        new way, we just emit the event up and the method that handles delete-task
        event will be implemented in src/views/Home.vue
       -->
      <i @click="$emit('delete-task', task.id)" class="fas fa-times"></i>
      <!-- fas is font-awsome classs imported using CDN in public/index.html -tian -->
    </h3>
    <p>{{ task.day }}</p>
  </div>
</template>

<script>
export default {
  name: 'Task',
  props: {
    task: Object,
  },
  // old way -tian
  // methods: {
  //   onDelete(id) {
  //     this.$emit('delete-task', id) 
  //     // emit up to Tasks.vue because Tasks.vue imports Task.vue
  //   },
  // },
}
</script>

<style scope>
/* this is the font-awsome class -tian*/
.fas {
  color: red;
}

.task {
  background: #f4f4f4;
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
}

.task.reminder {
  border-left: 5px solid green;
}

.task h3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
