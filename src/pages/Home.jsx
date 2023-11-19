import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import Add from '../components/Add'
import View from '../components/View'
import Category from '../components/Category'


function Home() {
  const [UploadVideoStatus , setupUploadVideoStatus] = useState({})

  return (
    <>
    <div className='container mt-5 mb-5 d-flex justify-conetent-between align-items-center'>
    <div className='add-videos'>
      <Add setupUploadVideoStatus={setupUploadVideoStatus}/>
    </div>
    <Link to={'/watchhistory'} style={{textDecoration:'none',color:'white',fontSize:'30px'}}>Watch History</Link>
    </div>

    <div className='container-fluid w-100 mt-5 mb-5 d-flex justify-conetent-between'>
     <div className='all-videos col-lg-9'>
      <h4 className='mb-5'>All Videos</h4>
      <View UploadVideoStatus={UploadVideoStatus}/>
     </div>
     <div className='category col-lg-3'>
      <Category/>
     </div>
    </div>
    </>
  )
}

export default Home