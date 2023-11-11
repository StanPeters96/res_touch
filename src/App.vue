<template>
  <v-app>
    <v-main>
      <MobileStatsView />
      <ToolbarView />
      <DashboardView />
      <InspectionsView />
      <FooterView />
    </v-main>
  </v-app>
</template>

<script>
import ToolbarView from '@/components/Toolbar.vue'
import DashboardView from '@/components/Dashboard.vue'
import FooterView from '@/components/Footer.vue'
import MobileStatsView from '@/components/MobileStats.vue'
import InspectionsView from '@/components/Inspections.vue'


export default {
  name: 'App',

  components: {
    ToolbarView,
    DashboardView,
    FooterView,
    MobileStatsView,
    InspectionsView,
},

  data: () => ({
    //
  }),
}
</script>
