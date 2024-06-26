import React,{useState} from "react";
import VideoPlayer from "./Components/VideoPlayer";
import { Context } from "./Utils/Context.js";
import AddCaptions from "./Components/AddCaptions";
function App() {
    const [startTime,setStartTime] = useState('');
    const [endTime,setEndTime] = useState('');
    const [captions,setCaptions] = useState([]);
    const [caption,setCaption] = useState(null);
  return (
    <div className="App p-2 bg-neutral-700 min-h-[100vh] ">
        <div className="m-2">
          <Context.Provider 
            value = {
              {startTime,setStartTime,
              endTime,setEndTime,
              caption,setCaption,
              captions,setCaptions}}> 
     
              <VideoPlayer/>
              {/* <AddCaptions/> */}
          </Context.Provider>
        </div>
      
    </div>
  );
}

export default App;
 
