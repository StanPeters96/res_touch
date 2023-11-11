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
                    <v-icon icon="mdi-calendar-month" size="200" class="mx-auto" ></v-icon>
                    <v-card-title>Scheduled</v-card-title>
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
                    <v-icon icon="mdi-check-circle" size="200" class="mx-auto" ></v-icon>              <v-card-title>Completed</v-card-title>
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
                    <v-icon icon="mdi-archive" size="200" class="mx-auto"></v-icon>
                    <v-card-title>Knowledge base</v-card-title>
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
                    <v-icon icon="mdi-cog" size="200" class="mx-auto"></v-icon>
                    <v-card-title>Settings</v-card-title>
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
  