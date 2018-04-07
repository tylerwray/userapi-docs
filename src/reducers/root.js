import { combineReducers } from 'redux'

import homeReducer from '../views/Home/reducers/home'

export default combineReducers({
  home: homeReducer
})
