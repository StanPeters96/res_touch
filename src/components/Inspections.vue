<template>
    <div>
        <h1 class="text-center">Uitgevoerde inspecties</h1>
        <p class="text-center">hier komt een uitdraai van alle uitgevoerde inspecties</p>
        <ul v-if="inspections.length > 0">
            <li v-for="inspection in inspections" :key="inspection.id" class="text-center">
                {{ inspection.id }}
                {{ inspection.created }}
            </li>
        </ul>
        <p class="text-center" v-else>Loading inspections...</p>
    </div>
</template>

<script>

export default {
name: 'InspectionsView',

components: {
    //
},

data() {
    return {
      inspections: [],
    };
  },
mounted() {
    this.fetchInspections()
  },

methods: {
    async fetchInspections() {
        try {
            const response = await fetch('/data/res_inspection.json');
            console.log('Response status:', response.status);
        if(!response.ok) {
            throw new Error('No valid network response')
        }
        const data = await response.json()
        console.log('fetched data: ', data);
        this.inspections = data;
        } catch (error) {
            console.log('Error when fetching JSON', error);
        } 
    },
}
}
</script>