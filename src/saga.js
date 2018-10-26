import { all } from 'redux-saga/effects'
import homeSaga from './pages/Home/saga'
import docsSaga from './pages/Docs/saga'

export default function* rootSaga() {
  yield all([homeSaga(), docsSaga()])
}
