import { OPEN_WELCOME_MESSAGE, CLOSE_WELCOME_MESSAGE, README_REQUESTED, README_REQUEST_SUCCESS, README_REQUEST_FAILURE } from '../../../constants'

export const openWelcomeMessage = () => ({
  type: OPEN_WELCOME_MESSAGE
})

export const closeWelcomeMessage = () => ({
  type: CLOSE_WELCOME_MESSAGE
})

export const readmeRequest = () => ({
  type: README_REQUESTED
})

export const readmeRequestSuccess = readme => ({
  type: README_REQUEST_SUCCESS,
  readme
})

export const readmeRequestFailure = message => ({
  type: README_REQUEST_FAILURE,
  message
})
