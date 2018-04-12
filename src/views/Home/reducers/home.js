import {
  OPEN_WELCOME_MESSAGE,
  CLOSE_WELCOME_MESSAGE,
  README_REQUESTED,
  README_REQUEST_SUCCESS,
  README_REQUEST_FAILURE
} from '../../../constants'

const defaultState = {
  open: true,
  readme: null,
  loading: false,
  errorMessage: ''
}

export default function (state = defaultState, action) {
  switch (action.type) {
    case README_REQUESTED:
      return {
        ...state,
        loading: true
      }
    case README_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        readme: action.readme
      }
    case README_REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        errorMessage: 'Couldn\'t get README from Github'
      }
    case OPEN_WELCOME_MESSAGE:
      return {
        ...state,
        open: true
      }
    case CLOSE_WELCOME_MESSAGE:
      return {
        ...state,
        open: false
      }
    default:
      return state
  }
}
