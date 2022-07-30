
const initialState = {favoriteMembers:[]}

export function favoriteMemberReducer(state = initialState, action) {
    
    let nextState;

    switch(action.type){

        case "ADD_USER_TO_FAVORITE":
            const favoritMemberIndex = state.favoriteMembers.findIndex(Item=> Item.id === action.value.id)
            if(favoritMemberIndex !== -1){
                nextState = {
                    ...state,
                   favoriteMembers:state.favoriteMembers.filter( (item,index) => index !== favoritMemberIndex)
                }
            }else{
                nextState = {
                    ...state,
                    favoriteMembers:[ ...state.favoriteMembers,action.value] 
                }
            }

        return nextState || state

        default:    

        return state
    }

}