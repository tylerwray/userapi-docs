import { delay } from 'redux-saga'
import { put, takeLatest } from 'redux-saga/effects'
import { closeCopiedMessage } from '../actions/docs'
import { COPIED_CODE_SNIPPET } from '../../../constants'

export default function *docsSaga() {
  yield takeLatest(COPIED_CODE_SNIPPET, closeMessage)
}

function *closeMessage() {
  yield delay(1500)
  yield put(closeCopiedMessage())
}
