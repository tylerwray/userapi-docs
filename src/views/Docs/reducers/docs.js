import { createSelector } from 'reselect'

import { COPIED_CODE_SNIPPET, CLOSE_COPIED_MESSAGE, CHANGE_EXAMPLE_LANG } from '../../../constants'

const defaultState = {
  exampleLanguages: ['bash', 'javascript', 'go', 'php'],
  selectedExampleLang: 0,
  copiedMessageOpen: false
}

const docs = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_EXAMPLE_LANG:
      return {
        ...state,
        selectedExampleLang: state.exampleLanguages.indexOf(action.language)
      }
    case COPIED_CODE_SNIPPET:
      return {
        ...state,
        copiedMessageOpen: true
      }
    case CLOSE_COPIED_MESSAGE:
      return {
        ...state,
        copiedMessageOpen: false
      }
    default:
      return state
  }
}

export const getSelectedLang = createSelector(
  state => state.docs.exampleLanguages,
  state => state.docs.selectedExampleLang,
  (exampleLanguages, selectedExampleLang) => exampleLanguages[selectedExampleLang]
)

export const isCopiedMessageOpen = createSelector(
  state => state.docs.copiedMessageOpen,
  copiedMessageOpen => copiedMessageOpen
)

export default docs
