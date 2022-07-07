

export const initialState = { 
    community: [] 
  }
  
  export function joinCommunityReducer(state = initialState, action) {
  
    let nextState;
    
    switch (action.type) {
      case 'ADD_USER_TO_COMMUNITY':
        state = initialState;
        nextState = {
          ...state,
          community: {...state.community, ...action.value}
        };
  
        return nextState
  
    default:
      return state;
    }
  }