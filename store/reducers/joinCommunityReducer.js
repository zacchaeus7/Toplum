

const initialState = {community:[]}

export function joinCommunityReducer(state = initialState, action) {

    switch(action.type){
        case "ADD_USER_TO_COMMUNITY":{

            return{
                ...state,
                community:[...state.community, action.value]
            }

        }
        default:
            
        return state
    }

}