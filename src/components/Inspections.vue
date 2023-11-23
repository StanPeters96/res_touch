<template>
    <div class="mx-3">
        <h1 class="text-center my-2" >Uitgevoerde inspecties</h1>
        <v-card
            v-for="inspection in store.inspections"
            :key="inspection.id"
            class="rounded border mx-auto elevation-12 pa-3"
            width="fit-content"
        >
            <div
                v-for="report in inspection"
                :key="report.id"
            >
                <h2>Gegevens rapportage ID: {{ report.id }}</h2>
                <div class="border rounded my-2 pa-2 elevation-2">
                    <p>Aangemaakt: {{ report.created }} </p>
                </div>
                <h4>Schade opnemen:</h4>
                <div class="border rounded my-2 pa-2 elevation-2">
                    <p>Locatie: {{ report.damageNotation.location }}</p>
                    <p>Nieuwe schade: {{ report.damageNotation.newDamage }}</p>
                    <p>Soort schade: {{ report.damageNotation.damageSort }}</p>
                    <p>Datum: {{ report.damageNotation.date }}</p>
                    <p>Acute actie vereist: {{ report.damageNotation.urgentToRepair }}</p>
                    <p>Omschrijving: {{ report.damageNotation.description }}</p>
                </div>
                <h4>Achterstallig onderhoud opnemen:</h4>
                <div class="border rounded my-2 pa-2 elevation-2">
                    <p>Locatie: {{ report.deferredMaintenance.location }}</p>
                    <p>Soort onderhoud: {{ report.deferredMaintenance.maintenanceSort }}</p>
                    <p>Acute actie vereist : {{ report.deferredMaintenance.urgentToMaintain }}</p>
                    <p>Kostenindicatie: &euro;{{ report.deferredMaintenance.costEstimate }}</p>
                </div>
                <h4>Technische installatie inspecteren:</h4>
                <div class="border rounded my-2 pa-2 elevation-2">
                    <p>Locatie: {{ report.inspectionTechnicalInstallations.location }}</p>
                    <p>Soort installatie: {{ report.inspectionTechnicalInstallations.installationType }}</p>
                    <p>Gemelde storing: {{ report.inspectionTechnicalInstallations.reportedMalfunction }}</p>
                    <p>Testprocedure link: {{ report.inspectionTechnicalInstallations.testProcedure }}</p>
                    <p>Goedgekeurd: {{ report.inspectionTechnicalInstallations.approved }}</p>
                    <p>Opmerkingen: {{ report.inspectionTechnicalInstallations.description }}</p>
                </div>
                <h4>Modificaties inventariseren:</h4>
                <div class="border rounded my-2 pa-2 elevation-2">
                    <p>Bestaande siutatie en reeds gedocumenteerde modificaties (link): {{ report.inventorizeModifications.currentSituationAndAlreadyDocumentedModifications }}</p>
                    <p>Locatie aangetroffen modificatie: {{ report.inventorizeModifications.locationModification }}</p>
                    <p>Uitgevoerd door: {{ report.inventorizeModifications.modificationMadeBy }}</p>
                    <p>Beschrijving modificatie: {{ report.inventorizeModifications.descriptionOfModification }}</p>
                    <p>Te ondernemen actie: {{ report.inventorizeModifications.actionToBeTaken }}</p>
                    <p>Opmerkingen: {{ report.inventorizeModifications.description }}</p>
                </div>
            </div>
        </v-card>
    </div>
</template>

<script>
import {useInspectionsStore} from "@/stores/inspectionsStore.js";

export default {

name: 'InspectionsView',

components: {
    //
},

data() {
    return {
    //   inspections: [],
    store: useInspectionsStore ()

    };
  },
mounted() {
    this.fetchInspections()
  },

methods: {
    // async fetchInspections() {
    //     try {
    //         const response = await fetch('/data/res_inspection.json');
    //         console.log('Response status:', response.status);
    //     if(!response.ok) {
    //         throw new Error('No valid network response')
    //     }
    //     const data = await response.json()
    //     console.log('fetched data: ', data);
    //     this.inspections = data;
    //     console.log(data);
    //     } catch (error) {
    //         console.log('Error when fetching JSON', error);
    //     } 
    // },
    fetchInspections () {
        this.store.fetchInspections()
    }
    }
}
</script>