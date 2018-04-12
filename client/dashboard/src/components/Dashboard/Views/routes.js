import DashboardLayout from '../components/Dashboard/Layout/DashboardLayout.vue'
// GeneralViews
import NotFound from '../components/GeneralViews/NotFoundPage.vue'

// Admin pages
import Overview from 'src/components/Dashboard/Views/Overview.vue'
import UserProfile from 'src/components/Dashboard/Views/UserProfile.vue'
import TableList from 'src/components/Dashboard/Views/TableList.vue'
import Typography from 'src/components/Dashboard/Views/Typography.vue'
import Icons from 'src/components/Dashboard/Views/Icons.vue'
import Maps from 'src/components/Dashboard/Views/Maps.vue'
import Notifications from 'src/components/Dashboard/Views/Notifications.vue'
import EirenBrain from 'src/components/Dashboard/Views/EirenBrain.vue'
import DisplayObjects from 'src/components/Dashboard/Views/displayObjects.vue'
import addObject from 'src/components/Dashboard/Views/addObject.vue'
import bubbles from  'src/components/Dashboard/Views/bubbles-nested-routes/index.vue'


const routes = [
  {
    path: '/',
    component: DashboardLayout,
    redirect: '/admin/overview'
  },
  {
    path: '/admin',
    component: DashboardLayout,
    redirect: '/admin/overview',
    children: [
      {
        path: 'overview',
        name: 'Overview',
        component: Overview
      },
      {
        path: 'user',
        name: 'User',
        component: UserProfile
      },
      {
        path: 'table-list',
        name: 'Table List',
        component: TableList
      },
      {
        path: 'typography',
        name: 'Typography',
        component: Typography
      },
      {
        path: 'icons',
        name: 'Icons',
        component: Icons
      },
      {
        path: 'maps',
        name: 'Maps',
        component: Maps
      }, 
       {
        path: 'EirenBrain',
        name: 'EirenBrain',
        component: EirenBrain
       
      },
      {
        path: 'notifications',
        name: 'Notifications',
        component: Notifications
      },
    
      {
        path: 'display-objects',
        name: 'display-objects',
        component: DisplayObjects
      },
      {
        path: 'add-object',
        name: 'Add object',
        component: addObject
      },
      {
        name: 'Bubbles: nested routes',
        path: 'bubbles-nested-routes',
        alias: '/bubbles-nested-routes/*',
        folder: true,
        component: bubbles
      }
    ]
  },
  { path: '*', component: NotFound }
]

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes
