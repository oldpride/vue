cloned 
   $ git clone https://github.com/bradtraversy/vue-crash-2021.git
   $ cd vue-crash-2021
   $ rm -fr .git
   $ npm install     # this installs vue dependencies into the prject folder, took 5 minutes

---------------------------------------------------------------------
project structure

main.js
   public/index.html
   src/App.vue
      src/router/index.js
         src/views/Home.vue
            src/components/Tasks.vue
               src/components/Task.vue
         src/views/About.vue

---------------------------------------------------------------------
how the initial tasks are loaded when we open http://localhost:8080/
   main.js
   router/index.js - called by Use(router)
   src/views/Home.vue
      created()
      <Tasks>
   App.vue  - called by mount('#app')
   src/components/Header.vue
   src/components/Footer.vue
   public/index.html



---------------------------------------------------------------------
trace how the clicking-add-Task button event travels
   button clicks
   src/components/Button.vue
      <button @click="onClick()"  // calls onClick() defined in methods.
      this.$emit('btn-click')     // emits up to Header.vue
   src/components/Header.vue
      <Button ... @btn-click="$emit('toggle-add-task')    // catches btn-click, then emit toggle-add-task
                                                          // which goes up to App.vue.
   src/App.vue
      <Header
      @toggle-add-task="toggleAddTask"       // catches toggle-add-task, then calls toggleAddTask()

---------------------------------------------------------------------
add db.json.tmp into .gitignore.

update package.json
   "backend": "json-server --watch db.json.tmp --port 5000"

we run json server with the tmp file, so that it won't disturb our git.

do the following before starting json-server
   cp db.json  db.json.tmp
   npm run backend


