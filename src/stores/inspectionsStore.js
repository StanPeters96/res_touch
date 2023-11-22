import {defineStore} from "pinia";
import axios from 'axios'

const url = '/data/res_inspection.json'

export const useInspectionsStore = defineStore('inspections', {
    state: () => {
        return {
            loadingStatus: 'notloading',
            inspections: [],
            errors: null
            
        }
    },
    actions: {
        // actions zijn de 'functie/methods' van de store
        fetchInspections () {
            this.loadingStatus = 'loading'
            //http-request
            axios.get(url)
            .then(result => {
                this.loadingStatus = 'notloading'
                this.inspections = result.data
                console.log('Fetched inspections:', result.data);
            })
            .catch(err => {
                this.loadingStatus = 'notloading'
                this.inspections = []
                this.errors = err
            })
        }
    },
    getters: {
        // getters zijn de 'computed properties' van de store
    }
})