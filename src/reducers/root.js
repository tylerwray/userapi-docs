import { combineReducers } from 'redux'

import homeReducer from '../views/Home/reducers/home'
import codeBlockReducer from '../views/Docs/reducers/codeBlock'

export default combineReducers({
  home: homeReducer,
  codeBlock: codeBlockReducer
})
