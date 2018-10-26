export const getSelectedLang = state =>
  state.docs.exampleLanguages[state.docs.selectedExampleLang]
export const isCopiedMessageOpen = state => state.docs.copiedMessageOpen
