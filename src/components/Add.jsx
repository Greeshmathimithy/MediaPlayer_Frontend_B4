import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { uploadAllVideo } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Add({setupUploadVideoStatus}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [videos,setVideos] = useState({
    id:"",
    caption:"",
    url:"",
    embedLink:""
  })
  console.log(videos);

  const embedVideoLink = (e)=>{
    const {value} = e.target
    console.log(value.slice(-11));
    const link = `https://www.youtube.com/embed/${value.slice(-11)}`
    setVideos({...videos, embedLink:link})
  }
const handleUpload = async ()=>{
  const {id,caption,url,embedLink} = videos
  //if there is no value in input box
  if(!id || !caption || !url || !embedLink){
    toast.warning("please fill the form completely")
  }
  else{
   const response = await uploadAllVideo(videos)
   console.log(response);

   //if value in input
   if(response.status>=200 && response.status<300){
    setupUploadVideoStatus(response.data)
    console.log(response);
    toast.success(`${response.data.caption} is successfully uploaded`)

    //to make state into initial value
    setVideos({
      id:"",
      caption:"",
      url:"",
      embedLink:""
    })
    handleClose()//to clse the modal
   }
   else{
    console.log(response);
   toast.error ("something went wrong .Try again")
   }
  }
}

  return (
    <>
    <div className='d-flex align-items-center'>
      <h5>Upload New Video</h5>
      <button onClick={handleShow} className='btn'><i class="fa-solid fa-cloud-arrow-up fs-5"></i></button>
    </div>

    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton> 
          <Modal.Title><i class="fa-solid fa-film me-2 text-warning"></i> Upload Videos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <p>Please fill the following details</p>
        <form className='border border-secondary rounded p-3'>

        <Form.Group className="mb-3" controlId="formBasicEmail">
           <Form.Control type="text" placeholder="Enter Video ID" onChange={(e)=>setVideos({...videos,id:e.target.value})}/>      
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
           <Form.Control type="text" placeholder="Enter Video Caption" onChange={(e)=>setVideos({...videos,caption:e.target.value})}/>      
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
           <Form.Control type="text" placeholder="Enter Video Image Url"onChange={(e)=>setVideos({...videos,url:e.target.value})} />      
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
           <Form.Control type="text" placeholder="Enter Youtube Video link" onChange={embedVideoLink}/>      
        </Form.Group>
        </form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="success" onClick={handleUpload}>Upload</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position='top-center' theme='colored' autoClose={2000}/>
    </>
  )
}

export default Add

//https://www.youtube.com/watch?v=IqwIOlhfCak

//https://www.youtube.com/embed/IqwIOlhfCak
