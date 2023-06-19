import { Post } from "../models/domain/post";
import HttpService from "./http.service";

const FEED_PATH='/NewFeed';
const GET_POST_PATH='/GetPost';

const getTopLatestPost=async()=>{
    let result:Post[]=[];
    const respond=await HttpService.get(FEED_PATH);
    if(respond?.status==200){
        const data=respond.data as Post[];
        if(data){
            if(data.length>0){
                console.log("Post get: "+ JSON.stringify(data[0]));
            }
            result=data??[];


            console.log("Post get: "+data.length)
        }    
        
    }
    return result;
}
const getPostByID=async(postID:string)=>{
    let result:Post|undefined=undefined;
    const respond=await HttpService.get(GET_POST_PATH,{params:{
        'PostID':postID,
    }});
    if(respond?.status==200){
        const data=respond.data as Post;
        result=data; 
        
    }
    return result;
}

export {
    FEED_PATH,
    getTopLatestPost,
    getPostByID,
}