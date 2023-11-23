<template>
    <v-bottom-navigation :bg-color="color" grow>
        <v-btn value="recent">
            <router-link class="homeLink" to="/scheduled">
                <div class="d-flex flex-column align-center">
                    <v-icon>mdi-wrench</v-icon>
                    <span>Active tasks</span>
                </div>
            </router-link>
        </v-btn>

        <v-btn value="favorites">
            <router-link class="homeLink" to="/">
                <div class="d-flex flex-column align-center">
                    <v-icon>mdi-magnify</v-icon>
                    <span>Search</span>
                </div>
            </router-link>
        </v-btn>
            <v-btn value="nearby">
                <router-link class="homeLink" to="/">
                    <div class="d-flex flex-column align-center">
                        <v-icon>mdi-information</v-icon>
                        <span>Information</span>
                    </div>
                </router-link>
            </v-btn>
    </v-bottom-navigation>
</template>

<script>
import { RouterLink } from 'vue-router';



export default {
name: 'FooterView',

components: {
    RouterLink
},

data: () => ({
    color : "#00AAA2",
}),
}
</script>

<style scoped>

.homeLink {
    text-decoration: none; 
    color: inherit;
}

</style>
  