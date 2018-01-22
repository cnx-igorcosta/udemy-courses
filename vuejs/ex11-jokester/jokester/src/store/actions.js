import axios from 'axios'
import * as types from './mutation-types'


export const initJokes = ({commit}) => {
  axios.get('https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_ten')
    .then( response => response.data)
    .then( data => commit(types.INIT_JOKES, data))
    .catch( response => console.log(response))
}
