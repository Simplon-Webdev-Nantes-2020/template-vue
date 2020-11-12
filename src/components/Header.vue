<template>
    <v-app-bar>
        <v-app-bar-nav-icon />
        <v-toolbar-title>{{ title }}</v-toolbar-title>
    </v-app-bar>
</template>

<script>
export default {
    name: "Header",
    // Properties passed down from parent
    props: ["title"],
}
</script>

<style scoped>

</style>
