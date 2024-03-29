import { NEWS_FAIL, NEWS_REQUEST, NEWS_SUCCESS } from "../type";
import axios from "axios";

export const fetchNewsRequest = () => {
    return {
        type: NEWS_REQUEST
    }
}

export const fetchNewsSuccess = (news) => {
    return {
        type: NEWS_SUCCESS,
        payload: news
    }
}

export const fetchNewsFail = (error) => {
    return {
        type: NEWS_FAIL,
        payload: error
    }
}


export const fetchNews = () => {
    return async (dispatch) => {
        dispatch(fetchNewsRequest());

        let res = await axios.get('https://jsonplaceholder.typicode.com/todos')
        dispatch(fetchNewsSuccess(res.data))

            // .catch((error) => {
            //     dispatch(fetchNewsFail(error.message))
            // })
    }

}
// console.log(res);

