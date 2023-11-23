<template>
     <div class="mx-3">
        <h1 class="text-center my-2">Settings</h1>
        <p class="text-center mb-2">Adjust your settings.</p>
        <v-card
        class="mx-auto mb-5 pa-5"
        elevation = "5"
        max-width="450"
        >
            <div class="d-flex align-center justify-center mb-3">
                <v-avatar
                size="x-large"
                >
                    <v-img
                        src="https://cdn.vuetifyjs.com/images/john.jpg"
                        alt="John"
                    >
                    </v-img>
                </v-avatar>
            </div>
            <!-- <v-avatar image="../assets/RES_black_logo.png"></v-avatar> -->
            <p>Voornaam:</p>
            <v-text-field >Inspector</v-text-field>
            <p>Achternaam:</p>
            <v-text-field >One</v-text-field>
            <p>Wachtwoord:</p>
            <v-text-field >password</v-text-field>
            <v-switch 
            label="Meldingen"
            color="#00AAA2">
            </v-switch>
            <v-switch
            label="Geluiden"
            color="#00AAA2"
            >
            </v-switch>
            <v-switch
            label="Donker thema"
            color="#00AAA2">
            </v-switch>
        </v-card>
    </div>
</template>

<script>


export default {
name: 'SettingsView',

components: {
    //
},

data: () => ({
    //
}),
}
</script>
  