import React from 'react'
import Card from 'react-bootstrap/Card';
import { addToHistory, deleteVideo } from '../services/allAPI';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';

function VideoCard(displayVideo ,setDeleteVideoStatus, isPresent) {
  const [show, setShow] = useState(false);
  
  const handleClose =  () => setShow(false);
  const handleShow = async() => {

    const {caption , embedLink} = displayVideo
    const today = new Date()
    let timestamp = new Intl.DateTimeFormat('en-US',{year:'numeric',month:'2-digit', day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit'}).format(today)
    console.log(timestamp);

    let videoDetails = {
      caption , embedLink , timestamp
    }

    const response = await addToHistory(videoDetails)
    console.log(response);
  }

  const removeVideo = async(id)=>{
    const response = await deleteVideo(id)
    setDeleteVideoStatus(true)
  }
//function to drag a particular card
const dragstart = (e,id)=>{
  console.log(`card that dragged is :${id}`);
  //to transfer id from videocard to category
  e.dataTransfer.setData("videoID",id)
}

  return (
    <>
    <Card style={{ width: '100%',height:'380px'}} className='mb-4' draggable onDragStart={(e)=>dragstart(e,displayVideo?.id)}>
      <Card.Img onClick={handleShow} height={'280px'} variant="top" src={displayVideo.url} />
      <Card.Body>
        <Card.Title className='d-flex justify-content-between align-items-center'>
          <h6>{displayVideo.caption}</h6>
          {!isPresent ?  <button onClick={()=>removeVideo(displayVideo?.id)} className='btn btn-danger'><i class="fa-solid fa-trash-can"></i></button>:<button onClick={()=>removeVideo(displayVideo?.id)} className='btn btn-warning'><i class="fa-solid fa-trash-can"></i></button>}
        </Card.Title>
      </Card.Body>
    </Card>

    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{displayVideo.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="530" src={`${displayVideo.embedLink}?autoplay=1`} title={displayVideo.caption} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullScreen></iframe>
        </Modal.Body>
      </Modal>
    </>
  )
}
 
export default VideoCard