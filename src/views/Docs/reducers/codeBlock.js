import { COPIED_CODE_SNIPPET, CLOSE_COPIED_MESSAGE } from '../../../actionTypes'

const defaultState = {
  messageOpen: false
}

const codeBlock = (state = defaultState, action) => {
  switch (action.type) {
    case COPIED_CODE_SNIPPET:
      return { messageOpen: true }
    case CLOSE_COPIED_MESSAGE:
      return { messageOpen: false }
    default:
      return state
  }
}

export default codeBlock
