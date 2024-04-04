import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Add_News, Update_Data, fetchNews } from '../redux/store/Action/newsAction';
import axios from 'axios';

const Modal = () => {
  let NewsId= useSelector((state)=>state.NewsList.id)
  // console.log(NewsId, "selector");

const dispatch = useDispatch()
const [news, setNewsList] = useState({});

const inputHandle = (e) =>{
    setNewsList({...news, [e.target.name] : e.target.value})
}

const addData = () => {
    dispatch(Add_News(news));
}
useEffect(()=>{
  console.log(NewsId,"newsiddddd");
    if(NewsId && typeof NewsId === 'string'){
      console.log(NewsId, "modaaaalll");
      axios.get(`http://localhost:3030/NewsList/${NewsId}`).then((res)=>{
        // console.log(NewsId, "modaaaaal");
        setNewsList(res.data)
      })
    }
},[NewsId])

const UpdateData = () =>{
  dispatch(Update_Data(news))
  // setNewsList()

  
}

    
  return (
    <div>
      
<button type="button" class="btn btn-secondary m-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Add Topic
</button>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Add Product</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <lable>Title: </lable><input type="text" name='title' value={news.title} onChange={inputHandle} className='m-2'/><br/>
        <lable>Category: </lable><input type="text" name='category' value={news.category} onChange={inputHandle} className='m-2'/><br/>
        <lable>Description: </lable><input type="text" name='description' value={news.description} onChange={inputHandle} className='m-2'/>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={()=>{
          if(news.id && news){
            console.log(news.id);
            UpdateData()
          }
          else{
            addData()
          }
        }}>{news && news.id? "Update" : "Add"}</button>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Modal;
