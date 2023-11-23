<template>
    <div class="mx-3">
        <h1 class="text-center my-2">Knowledge Base</h1>
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
                <h4>Pdf bij inspectie id: {{ report.id }}</h4>
                <div class="border rounded my-2 pa-2 elevation-2">
                    <p>Testprocedure link: {{ report.inspectionTechnicalInstallations.testProcedure }}</p>
                </div>
            </div>
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
  