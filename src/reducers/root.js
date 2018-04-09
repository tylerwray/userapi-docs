import { combineReducers } from 'redux'

import homeReducer from '../views/Home/reducers/home'
import docsReducer from '../views/Docs/reducers/docs'

export default combineReducers({
  home: homeReducer,
  docs: docsReducer
})
