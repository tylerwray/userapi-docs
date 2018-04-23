import { combineReducers } from 'redux'

import homeReducer from './pages/Home/reducer'
import docsReducer from './pages/Docs/reducer'

export default combineReducers({
  home: homeReducer,
  docs: docsReducer
})
