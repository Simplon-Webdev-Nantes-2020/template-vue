<template>
    <v-app>
        <v-main>
            <Header title="My app"/>
            <v-container>
<!--                This change showCard-->
                <v-switch v-model="showCard" />
<!--                This react to showCard-->
                <v-card v-show="showCard" :loading="isLoading" @click="load">
                    <v-card-title class="title">{{ message }}</v-card-title>
                </v-card>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
// Import my header
import Header from "./components/Header.vue";

export default {
    name: "App",
    // Components used
    components: {
        Header
    },
    // My data
    data: () => ({
        message: "Hello world !!",
        isLoading: false,
        showCard: false,
    }),
    // My methods
    methods: {
        load () {
            this.isLoading = true;

            setTimeout(() => {
                this.isLoading = false;
            }, 3000);
        }
    }
};
</script>

<style scoped lang="scss">
.title {
    color: #07b550;
}
</style>
