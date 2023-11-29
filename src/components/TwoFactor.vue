<template>
    <div class="mx-3">
        <h1 class="text-center my-2">Two Factor identification:</h1>
        <p class="text-center mb-2">Type your code:</p>
        <v-card
        class="mx-auto mb-5 pa-5"
        elevation = "5"
        max-width="450"
        >
            <v-form @submit.prevent="submitTwoFactor">
                <p>code = 1234</p>
                <v-text-field 
                v-model="twofactor"
                :rules="rules"
                label="1234"
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
name: 'TwoFactorView',

components: {
    //
},

data: () => ({
        twofactor: '',
        rules: [
            (value) => {
                if (value) return true;
                return 'You must enter a code: 1234';
            }
        ],
    }),

    methods: {
        submitTwoFactor() {
            // Validate the form before submitting
            if (this.validateForm()) {
                // Check if the username and password are "test"
                if (this.twofactor === '1234') {
                    // Redirect to /dashboard
                    this.$router.push('/dashboard');
                } else {
                    // Perform actions for a non-test user
                    console.log('Form submitted successfully!');
                }
            }
        },

        validateForm() {
            // Validate each field based on the defined rules
            const isTwofactorValid = this.rules[0](this.twofactor);

            // Return true if all fields are valid, otherwise false
            return isTwofactorValid;
        },
    },
}
</script>
  