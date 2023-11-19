import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom';
import { deleteHistory, getAllHistory } from '../services/allAPI';

function WatchHistory() {
const [history , setHistory] = useState([])

  const WatchHistory = async()=>{
    const {data} = await getAllHistory()
    /* console.log(data);*/
    setHistory(data)
  }
  console.log(history);

  //function to remove a particular history
  const removeHistory = async (id)=>{
    await deleteHistory(id)
    //to get the remaining history
    WatchHistory()
  }

  useEffect(()=>{
    WatchHistory()
  },[])

  return (
    <>
    <div className='container mt-5 d-flex justify-content-between'>
      <h3>Watch History</h3>
      <Link to={'/home'} className="d-flex align-items-center" style={{textDecoration:'none',color:'white',fontSize:'20px'}}><i class="fa-solid fa-arrow-left fa-beat me-2"></i>Back to home</Link>
      </div>

      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Caption</th>
            <th>URL</th>
            <th>Time Stamp</th>
            <th>Action</th>
          </tr>
        </thead>
        <tBody>
          {history?.length>0?
          history.map((item ,index)=>(
          <tr>
            <td>{index+1}</td>
            <td>{item.caption}</td>
            <td><a href={item.embedLink} target='_blank'>{item.embedLink}</a> </td>
            <td>{item.timestamp}</td>
            <td><button onClick={()=>removeHistory(item?.id)} className='btn btn-danger'><i class="fa-solid fa-trash-can"></i></button>
</td>
          </tr>))
           :
          <p className='fw-bolder fs-5 text-danger m-4'>Nothing to Display</p>
             }
        </tBody>
      </table>
    </>
  )
}

export default WatchHistory