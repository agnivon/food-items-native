import { actionTypes } from "../actions"

const initialState = {
    filters: {
        Vegan: true,
        'Fat-Free': true
    }
}

export const rootReducer = (state=initialState, action) => {
    switch(action.type){
        case actionTypes.FILTER_TOGGLED:
            return {
                ...state,
                filters:{
                    ...state.filters,
                    [action.payload]: !state.filters[action.payload]
                }
            }

        default: return state
    }
}