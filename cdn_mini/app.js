// because this project is using CDN, therefore, we did NOT
//     npm -g install vue
// and therefore, intellisense (auto-complete) doesn't work
// to test: 
//    right click on index.html and run live server.
const app = Vue.createApp({
    template: '<h1>from app: Hello {{firstName}}</h1>',

    data() {
        return {
            firstName: 'John',
        }
    },
})

app.mount('#app') // this makes the output of app to div#app