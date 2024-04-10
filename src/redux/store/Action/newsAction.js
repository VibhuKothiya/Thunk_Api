import { NEWS_DELETE_SUCCESS, NEWS_GET_FAIL, NEWS_GET_REQUEST, NEWS_GET_SUCCESS, NEWS_POST_FAIL, NEWS_POST_SUCCESS, NEWS_UPDATE_SUCCESS, NEWS_VIEW_SUCCESS, NEWS_EMPTY_ID, ADMIN_LOGIN_REQUEST, ADMIN_LOGIN_SUCCESS, ADMIN_LOGIN_FAIL } from "../type";
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

            // .catch((error) => {
            //     dispatch(fetchNewsFail(error.message))
            // })
    }

}
// console.log(res);

//Add-news

const addNewsSuccess = (data) =>{
    return {
        type : NEWS_POST_SUCCESS,
        payload : data
    }
}

const newsFail = (error) =>{
    return {
        type :  NEWS_POST_FAIL,
        payload : error
    }
}
export const Add_News = (news) =>{
    return async (dispatch) =>{
        
        let res = await axios.post('http://localhost:3030/NewsList', news)
        dispatch(addNewsSuccess(res.data))

        // dispatch(newsFail(error.message))


    }
}


//delet-data
const deleteNewsSuccess = (id) =>{
    return {
        type : NEWS_DELETE_SUCCESS,
        payload : id
    }
}

export const Delete_News = (id) =>{
    return async (dispatch) =>{
        
        let res = await axios.delete(`http://localhost:3030/NewsList/${id}`)
        dispatch(deleteNewsSuccess(res.data))

        // dispatch(newsFail(error.message))
    }
}


//viewdata
export const ViewData = (id) =>{
    return {
        type : NEWS_VIEW_SUCCESS,
        payload : id
    }
}

//Updatedata

export const Update_Data = (news) =>{
    return async (dispatch) =>{
        
        let res = await axios.put(`http://localhost:3030/NewsList/${news.id}`, news)
        dispatch({
            type : NEWS_UPDATE_SUCCESS,
            payload : news
        })

        // dispatch(newsFail(error.message))


    }
}

export const News_Empty_Id = () =>{
    return async (dispatch) =>{
        
        
        dispatch({
            type : NEWS_EMPTY_ID,
            payload : ''
        })

        // dispatch(newsFail(error.message))


    }
}

//Login-Admin
export const loginAdmin = (loginData) =>{
    return async (dispatch) => {
        dispatch({type : ADMIN_LOGIN_REQUEST})
        let res = await axios.get('http://localhost:3030/Login', {
            params : loginData
        });

        const admin = res.data[0]
        console.log(admin, "from admin");
        if(admin){
            dispatch({
                type : ADMIN_LOGIN_SUCCESS,
                payload : admin
            })
        }
        else{
            dispatch({
                type : ADMIN_LOGIN_FAIL,
                payload : "invalid email or password"
            })
        }
    }
}






