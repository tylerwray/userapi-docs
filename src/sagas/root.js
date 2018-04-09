import { all } from 'redux-saga/effects'
import homeSaga from '../views/Home/sagas/home'
import docsSaga from '../views/Docs/sagas/docs'

export default function *rootSaga() {
  yield all([
    homeSaga(),
    docsSaga()
  ])
}
