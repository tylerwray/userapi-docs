import { OPEN_WELCOME_MESSAGE, CLOSE_WELCOME_MESSAGE } from '../../../constants'

export const openWelcomeMessage = () => ({
  type: OPEN_WELCOME_MESSAGE
})

export const closeWelcomeMessage = () => ({
  type: CLOSE_WELCOME_MESSAGE
})
