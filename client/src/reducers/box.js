let defaultState = {
  color: 'red'
}

export default function mainReducer(state = defaultState, action) {
  switch(action.type){
    case 'CHANGE_COLOR':
      return {...state, color: action.color}
    default:
      return {...state}
  }
}
