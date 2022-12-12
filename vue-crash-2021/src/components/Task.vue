<template>
  <div
    @dblclick="$emit('toggle-reminder', task.id)"
    :class="[task.reminder ? 'reminder' : '', 'task']"
  >
    <h3>
      {{ task.text }}
      <!-- 
        old way -tian
        <i @click="onDelete(task.id)" class="fas fa-times"></i>
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
  //     this.$emit('delete-task', task.id)
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
