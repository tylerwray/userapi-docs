import { COPIED_CODE_SNIPPET, CLOSE_COPIED_MESSAGE } from '../../../actionTypes'

export const copiedCodeSnippet = () => ({
  type: COPIED_CODE_SNIPPET
})

export const closeCopiedMessage = () => ({
  type: CLOSE_COPIED_MESSAGE
})
