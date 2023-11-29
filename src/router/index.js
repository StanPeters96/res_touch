//Router setup
import { createRouter, createWebHistory } from "vue-router";

//componenten importeren
import DashboardView from '@/components/Dashboard.vue'
import InspectionsView from '@/components/Inspections.vue'
import Settingsview from '@/components/Settings.vue'
import LoginView from '@/components/Login.vue'
import KnowledgeBaseView from '@/components/KnowledgeBase.vue'
import ScheduledView from '@/components/Scheduled.vue'
import TwoFactorView from '@/components/TwoFactor.vue'

//all routes
const routes = [{
        path: "/dashboard",
        name: 'dashboard',
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
        path: "/",
        name: 'login',
        component: LoginView
    },
    {
        path: "/twofactor",
        name: 'twofactor',
        component: TwoFactorView
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