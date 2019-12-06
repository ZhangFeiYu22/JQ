import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home.vue'
import CompanyProfile from '@/views/companyProfile'
import BusinessScope from '@/views/businessScope'
import CaseShows from '@/views/caseShows'
import ContactUs from '@/views/contactUs'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/companyProfile',
      name: 'companyProfile',
      component: CompanyProfile
    },
    {
      path: '/businessScope',
      name: 'businessScope',
      component: BusinessScope
    },
    {
      path: '/caseShows',
      name: 'caseShows',
      component: CaseShows
    },
    {
      path: '/contactUs',
      name: 'contactUs',
      component: ContactUs
    }

  ]
})
