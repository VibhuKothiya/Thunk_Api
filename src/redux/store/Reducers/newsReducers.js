import { NEWS_FAIL, NEWS_REQUEST, NEWS_SUCCESS } from "../type"

let initialstate = {
    News : [],
    isLoading : false,
    error : null
}



 export const newsReducer = (state = initialstate, action) => {
    switch(action.type){
        case NEWS_REQUEST:
            return {
                ...state,
                isLoading : true,
                error : null
            };
            case NEWS_SUCCESS:
                return {
                    ...state,
                    isLoading : false,
                    News : action.payload
                }; 
                case NEWS_FAIL:
                    return {
                        ...state,
                        isLoading : false,
                        error : action.payload
                    }; 
                default:
                    return state;            
    }
}


