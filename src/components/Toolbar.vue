<template>
    <v-app-bar :elevation="2" color="#1E292F" class="">
        <div>
            <v-img
            width="65"
            src="../assets/RES_black_logo.png"
            class="ml-2"
        ></v-img>
        </div>
        <v-app-bar-title>
            <router-link class="homeLink" to="/">Real Estate Care</router-link>
        </v-app-bar-title>
        <v-icon class="mx-2">mdi-bell</v-icon>
        <v-icon class="mr-4 ml-2">mdi-cog</v-icon>
    </v-app-bar>
</template>

<script>


export default {

name: 'ToolbarView',

components: {
    //
},

data: () => ({
    //
}),
}
</script>


<style scoped>

.homeLink {
    text-decoration: none; 
    color: inherit;
}

</style>
  