

const initialState = {community: 
    {
        full_name:null,
        end_date:null,
        faculty:null,
        activity:null
    }
   
}

export function joinCommunityReducer(state = initialState, action) {

    switch(action.type){
        case "ADD_USER_TO_COMMUNITY":{

            return{
                ...state,
                community:{...state.community, ...action.value}
            }

        }
        case "CLEAR_FROM_COMMUNITY":{
            return {...state,
            transaction: initialState.community}
        }
        default:
            
        return state
    }

}