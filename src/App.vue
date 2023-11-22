<template>
  <v-app>
    <v-main>
    <MobileStatsView />
    <ToolbarView />
      <router-view>
      </router-view>
    <FooterView />
    </v-main>
  </v-app>
</template>

<script>
import FooterView from '@/components/Footer.vue'
import MobileStatsView from '@/components/MobileStats.vue'
import ToolbarView from '@/components/Toolbar.vue'

export default {
  name: 'App',

  components: {
    FooterView,
    MobileStatsView,
    ToolbarView
  },

  data: () => ({
    //
  }),
}
</script>
