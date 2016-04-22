import {
  FETCH_BEERS_START,
  FETCH_BEERS_END,
  BEERS_FETCHED,
} from '../constants/ActionTypes'
import axios from 'axios'

export const beersFetchStart = () => ({
  type: FETCH_BEERS_START,
  payload: {},
})

export const beersFetchEnd = () => ({
  type: FETCH_BEERS_END,
  payload: {},
})

export const beersFetched = (beers) => ({
  type: BEERS_FETCHED,
  payload: beers,
})

export const fetchBeers = () => (dispatch) => {
  dispatch(beersFetchStart())
  axios.get('http://obwapp.athensworks.com/beers')
       .then(({data: { beers }}) => dispatch(beersFetched(beers)))
       .then(() => dispatch(beersFetchEnd()))
       .catch(() => dispatch(beersFetchEnd()))
}
