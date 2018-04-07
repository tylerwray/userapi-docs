import { delay } from 'redux-saga'
import { put } from 'redux-saga/effects'
import { closeWelcomeMessage } from '../actions/home'

export default function *homeSaga() {
  yield delay(2500)
  yield put(closeWelcomeMessage())
}
