

export const initialState = { 
    user: [] 
  }
  
  export function joinCommunityReducer(state = initialState, action) {
  
    let nextState;
    
    switch (action.type) {
      case 'ADD_USER_TO_COMMUNITY':
        state = initialState;
        nextState = {
          ...state,
          user: {...state.user, ...action.value}
        };
  
        return nextState
  
    default:
      return state;
    }
  }