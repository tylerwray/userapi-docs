import { delay } from 'redux-saga'
import { put } from 'redux-saga/effects'
import { closeWelcomeMessage } from '../actions/home'

export default function *homeSaga() {
  yield delay(1500)
  yield put(closeWelcomeMessage())
}
