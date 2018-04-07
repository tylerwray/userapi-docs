import { all } from 'redux-saga/effects'
import homeSaga from '../views/Home/sagas/home'
import copiedMessageSaga from '../views/Docs/sagas/copiedMessage'

export default function *rootSaga() {
  yield all([
    homeSaga(),
    copiedMessageSaga()
  ])
}
