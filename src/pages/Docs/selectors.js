import { createSelector } from 'reselect'

export const getSelectedLang = createSelector(
  state => state.docs.exampleLanguages,
  state => state.docs.selectedExampleLang,
  (exampleLanguages, selectedExampleLang) => exampleLanguages[selectedExampleLang]
)

export const isCopiedMessageOpen = createSelector(
  state => state.docs.copiedMessageOpen,
  copiedMessageOpen => copiedMessageOpen
)
