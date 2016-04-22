import EstablishmentsPage from './components/pages/EstablishmentsPage'
import BeersPage from './components/pages/BeersPage'
import AboutPage from './components/pages/AboutPage'
import MapPage from './components/pages/MapPage'

export default {
  'establishments-list': {
    id: 'establishments-list',
    title: 'Establishments',
    component: EstablishmentsPage,
  },
  'beers-list': {
    id: 'beers-list',
    title: 'Beers',
    component: BeersPage,
  },
  map: {
    id: 'map',
    title: 'Map',
    component: MapPage,
  },
  about: {
    id: 'about',
    title: 'About',
    component: AboutPage,
  },
}
