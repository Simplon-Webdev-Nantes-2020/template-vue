// Import Vue
import Vue from "vue";
// Import my component
import App from "./App.vue";

// Import Vuetify
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.css";
import "@mdi/font/scss/materialdesignicons.scss";
Vue.use(Vuetify);

// Create the Vuetify
const vuetify = new Vuetify({
    theme: {
        dark: true,
    },
});

// Create the Vue app
new Vue({
    // Use vutify
    vuetify,
    // My main element
    el: document.getElementById("app"),
    // My component
    components: {
        App,
    },
    // Initiator
    template: "<App/>",
});
