import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Add_News, Update_Data } from '../redux/store/Action/newsAction';
import axios from 'axios';
import Swal from 'sweetalert2'

const Modal = () => {
  let NewsId= useSelector((state)=>state.NewsList.id)
  let {dataAdded, News}= useSelector((state)=>state.NewsList)
  // console.log(NewsId, "selector");

const dispatch = useDispatch()
const [news, setNewsList] = useState({});

const inputHandle = (e) =>{
    setNewsList({...news, [e.target.name] : e.target.value})
}

const addData = () => {   
  const isDuplicate = News.some((item) => item.title === news.title);
    if(!news.title || !news.description || !news.category){
        alert("fill all the data")
    }
    else
    {
      if(isDuplicate){
        alert("title already exist")
      }
      else{
        dispatch(Add_News(news));
        setNewsList({
        title : '',
        description : '',
        category:''
      })
      }
      
    }
}

//Alert  
useEffect(() => {
  if (dataAdded) {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Your work has been added",
      showConfirmButton: false,
      timer: 1500,
      customClass: {
        popup: 'custom-alert-popup',        
        title : 'custom-alert-title',
        content : 'custom-alert-content'

      }
    });
  }
}, [dataAdded]);  

useEffect(()=>{
  // console.log(NewsId,"newsiddddd");
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
      
<button type="button" className="btn btn-secondary m-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Add Topic
</button>

<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Add Product</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <lable>Title: </lable><input type="text" name='title' value={news.title} onChange={inputHandle} className='m-2'/><br/>
        <lable>Category: </lable><input type="text" name='category' value={news.category} onChange={inputHandle} className='m-2'/><br/>
        <lable>Description: </lable><input type="text" name='description' value={news.description} onChange={inputHandle} className='m-2'/>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={()=>{
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
