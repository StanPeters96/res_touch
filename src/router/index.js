//Router setup
import { createRouter, createWebHistory } from "vue-router";

//componenten importeren
import DashboardView from '@/components/Dashboard.vue'
import InspectionsView from '@/components/Inspections.vue'
import Settingsview from '@/components/Settings.vue'
import CompletedView from '@/components/Completed.vue'
import KnowledgeBaseView from '@/components/KnowledgeBase.vue'
import ScheduledView from '@/components/Scheduled.vue'

//all routes
const routes = [{
        path: "/",
        name: 'home',
        component: DashboardView
    },
    {
        path: "/inspections",
        name: 'inspections',
        component: InspectionsView
    },
    {
        path: "/settings",
        name: 'settings',
        component: Settingsview
    },
    {
        path: "/completed",
        name: 'completed',
        component: CompletedView
    },
    {
        path: "/knowledge-base",
        name: 'knowlegdeBase',
        component: KnowledgeBaseView
    },
    {
        path: "/scheduled",
        name: 'scheduled',
        component: ScheduledView
    },
]
const router = createRouter ({
    history: createWebHistory(),
    routes
})
export default router