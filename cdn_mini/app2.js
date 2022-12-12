// if we used 
//    const app = ...
// it will overwrite the app in app.js
const app2 = Vue.createApp({   
    data() {
        return {
            firstName: 'Tian',
        }
    },
})

app2.mount('#app2') // this makes the output of app2 to div#app2