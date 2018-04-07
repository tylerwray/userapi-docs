import { delay } from 'redux-saga'
import { put, takeLatest } from 'redux-saga/effects'
import { closeCopiedMessage } from '../actions/codeBlock'
import { COPIED_CODE_SNIPPET } from '../../../actionTypes'

export default function *() {
  yield takeLatest(COPIED_CODE_SNIPPET, closeMessage)
}
function *closeMessage() {
  yield delay(1500)
  yield put(closeCopiedMessage())
}
