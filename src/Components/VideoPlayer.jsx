import React, { useContext, useRef, useState } from 'react'
import ReactPlayer from "react-player";
import Warning from './Warning';
import { Context } from '../Utils/Context';
import AddCaptions from './AddCaptions';
function VideoPlayer() {
  const [warning,setWarning] = useState(null);
  const [url,setUrl] = useState(null);
  const [isVideoAvailable,setIsVideoAvailable] = useState(false);

  // function to get a video based on the URL
  const getVideo = (videoLink)=>{
    setWarning(null)
    if(!url){
      return setWarning("Please Enter the Valid URL");
    }
    const status = ReactPlayer.canPlay(url);
    if(!status) {
      setIsVideoAvailable(status)
      return setWarning('No Video Found')
    }
    setIsVideoAvailable(status);
    // checks whether the url contain a video
  
  }

 
  return (
    <div>
      <div className='w-full flex justify-center mt-5 mb-2 '>
        <input 
          type="url" name="url" id='url'
          placeholder='Enter video URL'
          className='rounded-3xl
                   w-full  md:w-4/12  p-3 outline-none 
                   border-none text-neutral-300
                  rounded-r-none bg-neutral-800'
          onChange={(e)=>setUrl(e.target.value)}
        />
        <button 
          className='bg-neutral-500  px-2 rounded-3xl
            rounded-l-none text-neutral-300 shadow-lg w-20'
          onClick={getVideo}>
          Search
        </button>
        </div>
         
      {/* Warning Component */}
      <div className='flex items-center justify-center mb-5'>
        <Warning message ={warning} />
      </div>
      
      {/* Video Player*/}
      {isVideoAvailable ?
      
        <div className="w-auto flex justify-start 
               flex-wrap">
          <ReactPlayer 
            url= {url}  
            width='400px'
            controls={true}
            light ={false}/>
            <div className='p-6'>
            <AddCaptions />
          </div>
        </div> : ''
      }
       {/* {isVideoAvailable && 
          
        }  */}
    
        
     </div>
   )
 }
 
 export default VideoPlayer
