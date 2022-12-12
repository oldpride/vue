<template>
  <div :key="task.id" v-for="task in tasks">
    <Task
      @toggle-reminder="$emit('toggle-reminder', task.id)"
      @delete-task="$emit('delete-task', task.id)"
      :task="task"
    />
    <!-- emit up to App.vue -->
  </div>
  <!--
    seen error in vs code: The template root disallows 'v-for' directives.
    we can ignore it.
    https://stackoverflow.com/questions/52892093/
    In Vue 2, each component can only contain a single root element, which 
    precludes conditional rendering or list rendering on the root element. 
    You would have to wrap your list in another element (e.g., a div), 
    making that the root.
    In Vue 3, this is not a problem. 
    but VS Code may not be up to date, therefore, has this error. -tian
  -->
</template>

<script>
import Task from './Task'
// './Task is ./Task.vue', likely Vue framework will convert it into a js class.
// first 'Task' is the 'export default' in ./Task.vue.
// -tian

export default {
  name: 'Tasks',
  props: {
    tasks: Array,
  },
  components: {
    Task,
  },
  emits: ['delete-task', 'toggle-reminder'],
}
</script>
