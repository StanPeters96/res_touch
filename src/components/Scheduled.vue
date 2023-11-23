<template>
    <h1 class="text-center my-2">Scheduled</h1>
    <div class="mx-3">
        <v-card 
        max-width="500" 
        class="mx-auto pa-5" 
        color="rgba(30, 41, 47, 0.9)"
        elevation = "5"
        >
            <v-form @submit.prevent>
                <v-card 
                max-width="450" 
                class="mx-auto mb-5 pa-5"
                elevation = "5"
                >
                    <h2>1 - Schade opnemen:</h2>
                    <p>Locatie:</p>
                    <v-text-field class="mt-2"></v-text-field>
                    <p>Nieuwe schade?</p>
                    <v-radio-group v-model="selectedOptionDamageNotation">
                        <v-radio label="Ja (opent extra opties)" value='true'></v-radio>
                        <v-radio label="Nee" value='false'></v-radio>
                    </v-radio-group>
                    <!-- <p>Welke is gekozen {{ selectedOptionDamageNotation }}</p> -->
                    <div v-if="selectedOptionDamageNotation === 'true'">
                        <p>Soort schade:</p>
                        <v-select
                        :items="damagaSortOptions"
                        label="Maak uw keuze"
                        ></v-select> 
                        <p>Datum:</p>
                        <input type="date" class="date_styling">
                        <p>Acute actie vereist?</p>
                        <v-radio-group>
                            <v-radio label="Ja" value='true'></v-radio>
                            <v-radio label="Nee" value='false'></v-radio>
                        </v-radio-group>
                        <p>Omschrijving schade:</p>
                        <v-textarea 
                        label="Leg de schade zo duidelijk mogelijk uit."
                        ></v-textarea>
                        <p>Voeg foto's toe (optioneel):</p>
                        <v-file-input
                        accept="image/png, image/jpeg, image/bmp"
                        label="Voeg toe"
                        prepend-icon="mdi-camera"
                        ></v-file-input>
                    </div>
                </v-card>
                <v-card 
                max-width="450" 
                class="mx-auto mb-5 pa-5"
                elevation = "5"
                >
                    <h2>2 - Achterstallig onderhoud opnemen:</h2>
                    <p>Locatie:</p>
                    <v-text-field class="mt-2"></v-text-field>
                    <p>Achterstallig onderhoud aangetroffen?</p>
                    <v-radio-group v-model="selectedDeferredMaintenance">
                        <v-radio label="Ja (opent extra opties)" value='true'></v-radio>
                        <v-radio label="Nee" value='false'></v-radio>
                    </v-radio-group>
                    <!-- <p>Welke is gekozen {{ selectedOptionDamageNotation }}</p> -->
                    <div v-if="selectedDeferredMaintenance === 'true'">
                        <p>Soort achterstallig onderhoud:</p>
                        <v-select
                        :items="deferredMaintenanceSortOptions"
                        label="Maak uw keuze"
                        ></v-select> 
                        <p>Acute actie vereist?</p>
                        <v-radio-group>
                            <v-radio label="Ja" value='true'></v-radio>
                            <v-radio label="Nee" value='false'></v-radio>
                        </v-radio-group>
                        <p>Kostenindicatie:</p>
                        <v-select
                        :items="deferredMaintenanceCostEstimate"
                        label="Ingeschatte kosten"
                        ></v-select> 
                        <p>Voeg foto's toe (optioneel):</p>
                        <v-file-input
                        accept="image/png, image/jpeg, image/bmp"
                        label="Voeg toe"
                        prepend-icon="mdi-camera"
                        ></v-file-input>
                    </div>
                </v-card>
                <v-card 
                max-width="450" 
                class="mx-auto mb-5 pa-5"
                elevation = "5"
                >
                    <h2>3 - Inspectie technische installaties:</h2>
                    <p>Locatie:</p>
                    <v-text-field class="mt-2"></v-text-field>
                    <p>Storingen gevonden?</p>
                    <v-radio-group v-model="selectedOptionInstallation">
                        <v-radio label="Ja (opent extra opties)" value='true'></v-radio>
                        <v-radio label="Nee" value='false'></v-radio>
                    </v-radio-group>
                    <!-- <p>Welke is gekozen {{ selectedOptionDamageNotation }}</p> -->
                    <div v-if="selectedOptionInstallation === 'true'">
                        <p>Soort installatie:</p>
                        <v-select
                        :items="installationType"
                        label="Maak uw keuze"
                        ></v-select> 
                        <p>Gemelde storing:</p>
                        <v-text-field class="mt-2" label="Noteer foutmelding"></v-text-field>
                        <p>Testprocedure (link naar pdf-bestand)</p>
                        <v-text-field class="mt-2" label="URL pdf-bestand"></v-text-field>
                        <p>Goedgekeurd?</p>
                        <v-radio-group>
                            <v-radio label="Ja" value='true'></v-radio>
                            <v-radio label="Nee" value='false'></v-radio>
                        </v-radio-group>
                        <p>Opmerkingen:</p>
                        <v-textarea 
                        label="Extra uitleg over inspectie."
                        ></v-textarea>
                        <p>Voeg foto's toe (optioneel):</p>
                        <v-file-input
                        accept="image/png, image/jpeg, image/bmp"
                        label="Voeg toe"
                        prepend-icon="mdi-camera"
                        ></v-file-input>
                    </div>
                </v-card>
                <v-card 
                max-width="450" 
                class="mx-auto mb-5 pa-5"
                elevation = "5"
                >
                    <h2>4 - Modificaties inventariseren:</h2>
                    <p>Bestaande en reeds gedocumenteerde modificaties:</p>
                    <v-text-field class="mt-2" label="URL pdf-bestand"></v-text-field>
                    <p>Nieuwe modificaties aangetroffen?</p>
                    <v-radio-group v-model="newModification">
                        <v-radio label="Ja (opent extra opties)" value='true'></v-radio>
                        <v-radio label="Nee" value='false'></v-radio>
                    </v-radio-group>
                    <div v-if="newModification === 'true'">
                        <p>Locatie aangetroffen modificatie:</p>
                        <v-text-field class="mt-2"></v-text-field>
                        <p>Uitgevoerd door:</p>
                        <v-select
                        :items="modificationMadeBy"
                        label="Maak uw keuze"
                        ></v-select> 
                        <p>Beschrijving modificatie:</p>
                        <v-textarea 
                        label="Leg zo gedetailleerd mogelijk uit."
                        ></v-textarea>
                        <p>Uitgevoerd door:</p>
                        <v-select
                        :items="actionToBeTaken"
                        label="Maak uw keuze"
                        ></v-select> 
                        <p>Opmerkingen:</p>
                        <v-textarea 
                        label="Vul in voor eventuele extra informatie."
                        ></v-textarea>
                        <p>Voeg foto's toe (optioneel):</p>
                        <v-file-input
                        accept="image/png, image/jpeg, image/bmp"
                        label="Voeg toe"
                        prepend-icon="mdi-camera"
                        ></v-file-input>
                    </div>
                </v-card>
                <div class="d-flex align-baseline">
                    <v-btn 
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
name: 'ScheduledView',

components: {
    //
},

data () {
    return {
        selectedOptionDamageNotation: 'false',
        damagaSortOptions: ['Moedwillig', 'slijtage', 'geweld', 'normaal gebruik', 'calamiteit', 'anders (omschrijf in opmerkingveld)'],
        selectedDeferredMaintenance: 'false',
        deferredMaintenanceSortOptions: ['schilderwerk', 'houtrot', 'elektra', 'leidingwerk', 'beglazing'],
        deferredMaintenanceCostEstimate: ['€0-500', '€500-1500', '€1500+'],
        selectedOptionInstallation: 'false',
        installationType: ['koeling', 'verwarming', 'luchtverversing', 'elektra', 'beveiliging'],
        newModification: 'false',
        modificationMadeBy: ['aannemer', 'huurder', 'onbekend'],
        actionToBeTaken: ['accepteren', 'laten keuren', 'laten verwijderen', 'laten aanpassen en keuren']
    }
},

}
</script>
  
<style scoped>

.date_styling {
    border-bottom: 1px solid gray;
    width: auto;
    background-color: rgba(211, 211, 211, 0.2);
    margin-block-end: 20px;
    padding-block: 15px;
    padding-inline: 15px;
}

</style>