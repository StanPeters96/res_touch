<template>
    <div class="mx-3">
        <h1 class="text-center my-2">Login</h1>
        <p class="text-center mb-2">Fill in your credentials:</p>
        <v-card
        class="mx-auto mb-5 pa-5"
        elevation = "5"
        max-width="450"
        >
            <v-form @submit.prevent="submitForm">
                <p>Gebruikersnaam = test</p>
                <v-text-field 
                v-model="username"
                :rules="rules"
                label="test"
                ></v-text-field>
                <p>Wachtwoord = test</p>
                <v-text-field
                v-model="password"
                :rules="rules"
                label="****"
                ></v-text-field>
                <div class="d-flex align-baseline">
                    <v-btn
                    type="submit"
                    class="mx-auto mt-5"
                    color = "#00AAA2"
                    width="450"
                    >Submit</v-btn>
                </div>
            </v-form>
        </v-card>
    </div>
</template>

<script>


export default {
name: 'LoginView',

components: {
    //
},

data: () => ({
        username: '',
        password: '',
        rules: [
            (value) => {
                if (value) return true;
                return 'You must enter a username';
            },
            (value) => {
                if (value) return true;
                return 'You must enter a password';
            },
        ],
    }),

    methods: {
        submitForm() {
            // Validate the form before submitting
            if (this.validateForm()) {
                // Check if the username and password are "test"
                if (this.username === 'test' && this.password === 'test') {
                    // Redirect to /twofactor
                    this.$router.push('/twofactor');
                } else {
                    // Perform actions for a non-test user
                    console.log('Form submitted successfully!');
                }
            }
        },

        validateForm() {
            // Validate each field based on the defined rules
            const isUsernameValid = this.rules[0](this.username);
            const isPasswordValid = this.rules[1](this.password);

            // Return true if all fields are valid, otherwise false
            return isUsernameValid && isPasswordValid;
        },
    },
}
</script>
  