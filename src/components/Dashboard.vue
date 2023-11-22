<template>
      <v-container class="bg-white h-auto overflow-hidden">
        <v-row no-gutters >
            <v-col
                cols="6"
                xs="6"
                sm="6"
                lg="6"
                xl="6"
                xxl="6"
            >
                <v-card class="d-flex flex-column py-5 ma-1 text-center h-auto" :elevation="7">
                    <router-link class="dashboardLink" to="/scheduled">
                        <v-icon icon="mdi-calendar-month" class="mx-auto icon-size" ></v-icon>
                        <v-card-title>Scheduled</v-card-title>
                    </router-link>
                </v-card>
            </v-col>
            <v-col
                cols="6"
                xs="6"
                sm="6"
                lg="6"
                xl="6"
                xxl="6"
            >
            <v-card class="d-flex flex-column py-5 ma-1 text-center" :elevation="7">
                    <router-link class="dashboardLink" to="/inspections">
                    <v-icon icon="mdi-check-circle" class="mx-auto icon-size" ></v-icon>              
                    <v-card-title>Completed</v-card-title>
                    </router-link>
                </v-card>
            </v-col>
            <v-col
                cols="6"
                xs="6"
                sm="6"
                lg="6"
                xl="6"
                xxl="6"
            >
            <v-card class="d-flex flex-column py-5 ma-1 text-center" :elevation="7">
                    <router-link class="dashboardLink" to="/knowledge-base">
                    <v-icon icon="mdi-archive" class="mx-auto icon-size"></v-icon>
                    <v-card-title>Knowledge base</v-card-title>
                    </router-link>
                </v-card>
            </v-col>
            <v-col
                cols="6"
                xs="6"
                sm="6"
                lg="6"
                xl="6"
                xxl="6"
            >
            <v-card class="d-flex flex-column py-5 ma-1 text-center" :elevation="7">
                    <router-link class="dashboardLink" to="/settings">
                    <v-icon icon="mdi-cog" class="mx-auto icon-size"></v-icon>
                    <v-card-title>Settings</v-card-title>
                    </router-link>
                </v-card>
            </v-col>
        </v-row>
  </v-container>
</template>

<script>


export default {
name: 'DashboardView',

components: {
    //
},

data: () => ({
    elevation : 0,
}),
}
</script>

<style scoped>

.dashboardLink {
    text-decoration: none; 
    color: inherit;
    transition: transform .2s
}
.dashboardLink:hover {
    transform: scale(1.05);
    color: rgba(0,170,162,1)
}

.icon-size {
    font-size: 200px;
}

@media only screen and (max-width: 600px) {
  .icon-size {
    font-size: 100px;
  }
}

</style>
  