import DashboardLayout from '../components/Dashboard/Layout/DashboardLayout.vue'
// GeneralViews
import NotFound from '../components/GeneralViews/NotFoundPage.vue'
import GoogleMap from '../components/GoogleMap.vue'

// Admin pages
import Overview from 'src/components/Dashboard/Views/Overview.vue'
import EirenBrain from 'src/components/Dashboard/Views/EirenBrain.vue'
import UserProfile from 'src/components/Dashboard/Views/UserProfile.vue'
import TableList from 'src/components/Dashboard/Views/TableList.vue'
import Typography from 'src/components/Dashboard/Views/Typography.vue'
import Icons from 'src/components/Dashboard/Views/Icons.vue'
import Maps from 'src/components/Dashboard/Views/Maps.vue'
import Notifications from 'src/components/Dashboard/Views/Notifications.vue'
import DisplayObjects from 'src/components/Object/displayObjects.vue'
import addObject from 'src/components/Object/addObject.vue'
import showObject from 'src/components/Object/showObject.vue'
import editObject from 'src/components/Object/editObject.vue'
import testImg from 'src/components/Object/testImg.vue'
import signUp from 'src/components/Account/signUp'
import signIn from 'src/components/Account/signIn'
import addClaim from 'src/components/Claim/addClaim.vue'
import DisplayClaims from 'src/components/Claim/displayClaims.vue'
import showClaim from 'src/components/Claim/showClaim.vue'
import ManageAreas from 'src/components/Area/areas.vue'
import addArea from 'src/components/Area/addArea.vue'
import deleteArea from 'src/components/Area/deleteArea.vue'
import editArea from 'src/components/Area/editArea.vue'
import displayDynamicObjects from 'src/components/Object/displayDynamicObjects.vue'
import Eiren from 'src/components/Claim/Eiren.vue'
import Crimes from 'src/components/Crimes/crimes.vue'
import crimeInfo from 'src/components/Crimes/crimeInfo.vue'
const routes = [
  {
    path: '/',
    component: DashboardLayout,
    redirect: '/signIn'
  },
  {
    path: '/signUp',
    name: 'signUp',
    component: signUp
  },
  {
    path: '/signIn',
    name: 'signIn',
    component: signIn
  },
  {
    path: '/admin',
    component: DashboardLayout,
    redirect: '/admin/overview',
    children: [
      {
        path: 'overview',
        name: 'Overview',
        component: EirenBrain
      },
      {
        path: 'Eiren',
        name: 'Eiren',
        component: Eiren
      },
      {
        path: 'user',
        name: 'User',
        component: UserProfile
      },{
        path: 'GoogleMap',
        name: 'GoogleMap',
        component: GoogleMap
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
        name: 'add-object',
        component: addObject
      },
      {
        path: 'show-object/:id',
        name: 'show-object',
        component: showObject
      },
      {
        path: 'edit-object/:id',
        name: 'edit-object',
        component: editObject
      },
      {
        path: 'display-claims',
        name: 'display-claims',
        component: DisplayClaims
      },
      {
        path: 'add-claim',
        name: 'add--claim',
        component: addClaim
      },
      {
        path: 'show-claim/:id',
        name: 'show-claim',
        component: showClaim
      },
      {
        path: 'testImg',
        name: 'testImg',
        component: testImg
      },
      {
        path: 'manage-areas',
        name: 'manage-areas',
        component: ManageAreas
      },
      {
        path: 'add-area',
        name: 'add-area',
        component: addArea
      },
      {
        path: 'delete-area/:id',
        name: 'delete-area',
        component: deleteArea
      },
      {
        path: 'edit-area/:id',
        name: 'edit-area',
        component: editArea
      },
      {
        path: 'displayDynamicObjects',
        name: 'displayDynamicObjects',
        component: displayDynamicObjects
      },
      {
        path: 'crimes',
        name: 'crimes',
        component: Crimes
      },
      {
        path: 'crime-info/:id',
        name: 'crime-info',
        component: crimeInfo
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
