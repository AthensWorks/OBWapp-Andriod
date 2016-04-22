import {
  FETCH_ESTABLISHMENTS_START,
  FETCH_ESTABLISHMENTS_END,
  ESTABLISHMENTS_FETCHED,
} from '../constants/ActionTypes'
import axios from 'axios'

export const establishmentsFetchStart = () => ({
  type: FETCH_ESTABLISHMENTS_START,
  payload: {},
})

export const establishmentsFetchEnd = () => ({
  type: FETCH_ESTABLISHMENTS_END,
  payload: {},
})

export const establishmentsFetched = (establishments) => ({
  type: ESTABLISHMENTS_FETCHED,
  payload: establishments,
})

export const fetchEstablishments = () => (dispatch) => {
  dispatch(establishmentsFetchStart())
  axios.get('http://obwapp.athensworks.com/establishments')
       .then(({data: { establishments }}) => dispatch(establishmentsFetched(establishments)))
       .then(() => dispatch(establishmentsFetchEnd()))
       .catch(() => dispatch(establishmentsFetchEnd()))
}
