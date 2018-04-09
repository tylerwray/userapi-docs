import { COPIED_CODE_SNIPPET, CLOSE_COPIED_MESSAGE, CHANGE_EXAMPLE_LANG } from '../../../constants'

export const copiedCodeSnippet = () => ({
  type: COPIED_CODE_SNIPPET
})

export const closeCopiedMessage = () => ({
  type: CLOSE_COPIED_MESSAGE
})

export const changeExampleLang = language => ({
  type: CHANGE_EXAMPLE_LANG,
  language
})
