const cards = (state= [], action ) => {
  switch(action.type) {
    case 'CARDS':
      return action.cards
    case 'ADD_CARD':
      return [action.app, ...state]
    case 'UPDATE_CARD':
      return state.map( c => {
        if (c.id === action.card.id)
          return action.card
        return c
      })
    case 'DELETE_CARD':
      return state.filter( c => a.id !== action.id )
    default:
      return state;
  }
}

export default cards;