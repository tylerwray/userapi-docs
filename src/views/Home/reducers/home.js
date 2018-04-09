import { OPEN_WELCOME_MESSAGE, CLOSE_WELCOME_MESSAGE } from '../../../constants'

const defaultState = {
  open: true
}

export default function (state = defaultState, action) {
  switch (action.type) {
    case OPEN_WELCOME_MESSAGE:
      return { open: true }
    case CLOSE_WELCOME_MESSAGE:
      return { open: false }
    default:
      return state
  }
}
