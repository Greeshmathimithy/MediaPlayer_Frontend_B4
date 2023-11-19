import { commonAPI } from "./commonAPI"
import {serverURL} from "./serverURL"
//upload videos


export const uploadAllVideo = async (reqBody) =>{
   return await commonAPI('POST',`${serverURL}/videos`,reqBody)
}

//get all video from json server
export const getAllVideos = async()=> {
    return await commonAPI('GET',`${serverURL}/videos`,"")
}

//api to delete a video
export const deleteVideo = async(id)=> {
    return await commonAPI('DELETE',`${serverURL}/videos/${id}`,{})
}

//api to add data to watchhistory
export const addToHistory = async(videoDetails)=> {
    return await commonAPI('POST',`${serverURL}/history`,videoDetails)
}

//api to get all history from json-server
export const getAllHistory = async()=> {
    return await commonAPI('GET',`${serverURL}/history`,"")
}

//api delete history
export const deleteHistory = async(id)=> {
    return await commonAPI('DELETE',`${serverURL}/history/${id}`,{})
}

//api to add category 
export const addToCategory = async(body)=> {
    return await commonAPI('POST',`${serverURL}/category`,body)
} 

//api to get Category
export const getAllCategory = async()=> {
    return await commonAPI('GET',`${serverURL}/category`,"")
} 

//api to delete the category
export const deleteCategory = async(id)=> {
    return await commonAPI('DELETE',`${serverURL}/category/${id}`,{})
}

//api to a particular video
export const getVideo = async()=>{
   return await commonAPI('GET',`${serverURL}/videos/${id}`,"")
}

//api to update category
export const updateCategory = async(id, body)=>{
    return await commonAPI('PUT',`${serverURL}/category/${id}`,body)
}