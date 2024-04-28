import { ADMIN_LOGIN_FAIL, ADMIN_LOGIN_SUCCESS, ADMIN_LOGOUT_SUCCESS, NEWS_DELETE_SUCCESS, NEWS_EMPTY_ID, NEWS_GET_FAIL, NEWS_GET_REQUEST, NEWS_GET_SUCCESS, NEWS_POST_SUCCESS, NEWS_UPDATE_SUCCESS, NEWS_VIEW_SUCCESS, SIGNUP_USER_SUCCESS } from "../type"

let initialstate = {
    News: [],
    isLoading: false,
    error: null,
    id: null,
    admin: null,
    isLogin: false,
    userLogin: null,
    signUpUserData: [],
    dataAdded: false

}

export const newsReducer = (state = initialstate, action) => {
    switch (action.type) {
        case NEWS_GET_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null
            };
        case NEWS_GET_SUCCESS:
            return {
                ...state,
                isLoading: false,
                News: action.payload,

            };
        case NEWS_GET_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };

        case NEWS_POST_SUCCESS:

            return {
                ...state,
                isLoading: false,
                News: [...state.News, action.payload],
                dataAdded: true
            }

        case NEWS_DELETE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                News: state.News.filter((obj) => obj.id !== action.payload.id)
            }

        case NEWS_VIEW_SUCCESS:
            return {
                ...state,
                isLoading: false,
                id: action.payload
            }

        case NEWS_UPDATE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                News: state.News.map((val) => {
                    if (val.id === action.payload.id) {
                        return action.payload
                    }
                    else {
                        return val
                    }
                }),
                id: null
            }

        case NEWS_EMPTY_ID: {
            return {
                ...state,
                id: null
            }
        }

        case ADMIN_LOGIN_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                admin: action.payload,
                error: null,
                isLogin: true
            }
        }

        case ADMIN_LOGIN_FAIL: {
            return {
                ...state,
                error: alert(action.payload)
            }
        }

        case ADMIN_LOGOUT_SUCCESS: {
            // localStorage.removeItem("LoginData");
            return {
                ...state,
                isLogin: false,
                ...initialstate
            }
        }

        case SIGNUP_USER_SUCCESS:
            let newSignupData = [...state.signUpUserData, action.payload]
            return {
                ...state,
                isLoading: false,
                signUpUserData: newSignupData
            }

        default:
            return state;
    }
}


