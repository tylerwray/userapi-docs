import { delay } from 'redux-saga'
import { takeLatest, put, call } from 'redux-saga/effects'
import { closeWelcomeMessage, readmeRequestFailure, readmeRequestSuccess } from '../actions/home'
import { README_REQUESTED } from '../../../constants'
import { getReadme } from '../services/readme'

export default function *homeSaga() {
  yield takeLatest(README_REQUESTED, handleReadmeRequest)
  yield delay(1500)
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
