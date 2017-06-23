import Vue from 'vue';
import Router from 'vue-router';
import Overview from '@/pages/Overview';
import Indicator from '@/pages/Indicator';
import Patient from '@/pages/Patient';
import ActionPlan from '@/pages/ActionPlan';

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/', name: 'Overview', component: Overview },
    { path: '/indicator', name: 'Indicator', component: Indicator },
    { path: '/patient', name: 'Patient', component: Patient },
    { path: '/actionplan', name: 'ActionPlan', component: ActionPlan },
  ],
});
