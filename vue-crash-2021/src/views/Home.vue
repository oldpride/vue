<template>
  <AddTask v-show="showAddTask" @add-task="addTask" />
  <!-- 
    v-show displays the tag depending on a Boolean, showAddTask, declared in props below.
    this var is manipulated in src/App.vue.

    @add-task="addTask" means: if we receive a add-task event, we call addTask().
    -tian
  -->
  <Tasks
    @toggle-reminder="toggleReminder"
    @delete-task="deleteTask"
    :tasks="tasks"
  />
  <!-- 
    if you see vs code error: The template root requires exactly one element.
    this error was for Vue2. Vue3 allows multiple elements. 
    therefore, we can ignore it. -tian
  -->
</template>

<script>
import Tasks from '../components/Tasks'
import AddTask from '../components/AddTask'
export default {
  name: 'Home',
  props: {
    showAddTask: Boolean,
  },
  components: {
    Tasks,
    AddTask,
  },
  data() {
    return {
      tasks: [],
    }
  },
  methods: {
    // url before 'api' is defined in proxy file vue.config.js -tian
    async addTask(task) {
      // use POST method to add new item to backend -tian
      const res = await fetch('api/tasks', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(task),
      })

      // update frontend only after we backend reponds. -tian
      const data = await res.json()

      this.tasks = [...this.tasks, data] // using spread syntax to appened array -tian
    },
    async deleteTask(id) {
      if (confirm('Are you sure?')) {
        // prompt for confirmation -tian
        const res = await fetch(`api/tasks/${id}`, {
          method: 'DELETE',
        })

        res.status === 200
          ? (this.tasks = this.tasks.filter((task) => task.id !== id))
          : alert('Error deleting task')
      }
    },
    async toggleReminder(id) {
      const taskToToggle = await this.fetchTask(id)
      const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder }
      // using spread syntax to add key/vaule -tian

      // use PUT method to update existing item in backend -tian
      const res = await fetch(`api/tasks/${id}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(updTask),
      })

      // update front end only after backend responds -tian
      const data = await res.json()

      this.tasks = this.tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      )
    },
    async fetchTasks() {
      const res = await fetch('api/tasks')

      const data = await res.json()

      return data
    },
    async fetchTask(id) {
      const res = await fetch(`api/tasks/${id}`)

      const data = await res.json()

      return data
    },
  },

  // created() is a Vue life-cycle hook, -tian
  // https://vuejs.org/guide/essentials/lifecycle.html
  async created() {
    this.tasks = await this.fetchTasks()
  },
}
</script>
