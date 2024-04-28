import { NEWS_DELETE_SUCCESS, NEWS_GET_FAIL, NEWS_GET_REQUEST, NEWS_GET_SUCCESS, NEWS_POST_SUCCESS, NEWS_UPDATE_SUCCESS, NEWS_VIEW_SUCCESS, NEWS_EMPTY_ID, ADMIN_LOGIN_REQUEST, ADMIN_LOGIN_SUCCESS, ADMIN_LOGIN_FAIL, ADMIN_LOGOUT_SUCCESS, SIGNUP_USER_SUCCESS, DUPLICATE_DATA } from "../type";
import axios from "axios";

//fetch-News
export const fetchNewsRequest = () => {
    return {
        type: NEWS_GET_REQUEST,
    }
}

export const fetchNewsSuccess = (news) => {
    return {
        type: NEWS_GET_SUCCESS,
        payload: news
    }
}

export const fetchNewsFail = (error) => {
    return {
        type: NEWS_GET_FAIL,
        payload: error
    }
}

export const fetchNews = () => {
    return async (dispatch) => {
        dispatch(fetchNewsRequest());

        let res = await axios.get('http://localhost:3030/NewsList')
        dispatch(fetchNewsSuccess(res.data))
        
    }
}

const addNewsSuccess = (data) => {
    return {
        type: NEWS_POST_SUCCESS,
        payload: data
    }
}


export const Add_News = (news) => {
   
    return async (dispatch) => {
    
            let res = await axios.post('http://localhost:3030/NewsList', news)
            dispatch(addNewsSuccess(res.data))        
    }
}


//delet-data
const deleteNewsSuccess = (id) => {
    return {
        type: NEWS_DELETE_SUCCESS,
        payload: id
    }
}

export const Delete_News = (id) => {
    return async (dispatch) => {
        let res = await axios.delete(`http://localhost:3030/NewsList/${id}`)
        dispatch(deleteNewsSuccess(res.data))        
    }
}


//viewdata
export const ViewData = (id) => {
    return {
        type: NEWS_VIEW_SUCCESS,
        payload: id
    }
}

//Updatedata
export const Update_Data = (news) => {
    return async (dispatch) => {
        let res = await axios.put(`http://localhost:3030/NewsList/${news.id}`, news)
        console.log(res, "put");
        dispatch({
            type: NEWS_UPDATE_SUCCESS,
            payload: news
        })        
    }
}

export const News_Empty_Id = () => {
    return async (dispatch) => {
        dispatch({
            type: NEWS_EMPTY_ID,
            payload: ''
        })        
    }
}

//Login-Admin
export const loginAdmin = (loginData) => {
    return async (dispatch) => {
        dispatch({ type: ADMIN_LOGIN_REQUEST })

        let res = await axios.get('http://localhost:3030/Login', {
            params: {
                email: loginData.email,
                password: loginData.password
            }
        });

        const admin = res.data[0]
        // console.log(res.data, "res.data");        
         const localLoginData = JSON.stringify(admin)
        localStorage.setItem("LoginData", localLoginData)   
        if (admin) {
            dispatch({
                type: ADMIN_LOGIN_SUCCESS,
                payload: admin
            })
        } else {
            dispatch({
                type: ADMIN_LOGIN_FAIL,
                payload: "invalid email or password"
            })
        }
    }
}

//Logout-Admin
export const logoutAdmin = () => {
    
    return {
        type: ADMIN_LOGOUT_SUCCESS,

    }
}


//Sign UP User
export const newSignUp = (signupData) => {
    return async (dispatch) => {
        let res = await axios.post('http://localhost:3030/Login', signupData)
        dispatch({
            type: SIGNUP_USER_SUCCESS,
            payload: res.data
        })

        // dispatch(newsFail(error.message))    
    }

}

export const duplicateData = () => {    
    return {
        type: DUPLICATE_DATA,

    }
}





