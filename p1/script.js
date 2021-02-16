// Define the options of our application
const Game = {
    data() {
        return {
            userSelection: 'Rock'
        }
    },
    methods: {
        makeUserSelection() {
            this.userSelection;
        }
    }
}

// Create a new Vue instance using our options
const app = Vue.createApp(Game).mount('#app');
