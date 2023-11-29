<template>
    <div class="mx-3">
        <h1 class="text-center my-2">Knowledge Base</h1>

        <v-card
            v-for="inspection in store.inspections"
            :key="inspection.id"
            max-width="500" 
            class="mx-auto mb-5 pa-5" 
            color="rgba(30, 41, 47, 0.9)"
            elevation = "5"
        >
            <v-card
                v-for="report in inspection"
                :key="report.id"
                max-width="450" 
                class="mx-auto mb-5 pa-5"
                elevation = "5"
                >
                <h4>Pdf gebruikt bij inspectie id: {{ report.id }}</h4>
                <v-card-item
                class="border rounded my-2 pa-2 elevation-2"
                prepend-icon="mdi-download"
                >
                    <a target="_blank" :href="'../assets/' + report.inspectionTechnicalInstallations.testProcedure">{{ report.inspectionTechnicalInstallations.testProcedure }}</a>
                </v-card-item>
            </v-card>
        </v-card>
    </div>
</template>

<script>
import {useInspectionsStore} from "@/stores/inspectionsStore.js";

export default {
name: 'KnowlegdeBaseView',

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
  