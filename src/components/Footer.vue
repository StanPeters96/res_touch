<template>
    <v-bottom-navigation :bg-color="color" grow>
        <v-btn value="recent">
            <v-icon>mdi-wrench</v-icon>

            <span>Active tasks</span>
        </v-btn>

        <v-btn value="favorites">
            <v-icon>mdi-magnify</v-icon>

            <span>Search</span>
        </v-btn>

        <v-btn value="nearby">
            <v-icon>mdi-information</v-icon>

            <span>Information</span>
        </v-btn>
    </v-bottom-navigation>
</template>

<script>


export default {
name: 'FooterView',

components: {
    //
},

data: () => ({
    color : "#00AAA2",
}),
}
</script>
  