import { delay } from 'redux-saga'
import { takeLatest, put, call } from 'redux-saga/effects'
import { closeWelcomeMessage, readmeRequestFailure, readmeRequestSuccess } from './actions'
import { README_REQUESTED } from './constants'
import { getReadme } from './services'

export default function *homeSaga() {
  yield takeLatest(README_REQUESTED, handleReadmeRequest)
  yield delay(2500)
  yield put(closeWelcomeMessage())
}

function *handleReadmeRequest() {
  try {
    const readme = yield call(getReadme)
    yield put(readmeRequestSuccess(readme))
  } catch (err) {
    yield put(readmeRequestFailure(err.message))
  }
}
