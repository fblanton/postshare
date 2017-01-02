module.exports = (state = ['Hello'], action) => {
  switch (action.type) {
    case 'ADD':
      return [...state, action.text]
    default:
      return state
  }
}
