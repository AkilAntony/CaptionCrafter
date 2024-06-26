import React, { useContext } from "react";
import { Context } from "../Utils/Context";
import InputMask from "react-input-mask";
import Button from "./Button";

function AddCaptions() {
  const {
    startTime,
    setStartTime,
    endTime,
    setEndTime,
    captions,
    setCaptions,
    caption,
    setCaption,
  } = useContext(Context);

  const handleSubmit = () => {
     
    const subTitles = {
    }
    // captions.push(caption);
    const newCaption = {caption,startTime,endTime}
 
    setCaptions([...captions,newCaption]);
    console.log(captions);
    // captions.map(data=>console.log(data.startTime))
   
  };
  console.log(captions);
  return (
    <div
      className="bg-neutral-600 rounded-lg flex flex-col shadow-2xl
            items-center justify-center p-5 max-w-xl m-auto text-neutral-300"
    >
      <div className="flex items-center justify-center">
        <label className="mr-4 w-24">Start Time :</label>
        <InputMask
          mask="99:99:99"
          value={startTime}
          placeholder="00:00:00"
          onChange={(e) => setStartTime(e.target.value)}
          className="w-32 items-center text-center justify-center
           bg-neutral-700 flex border-none outline-none rounded py-1"
        />
      </div>
      <div className="mt-3 flex items-start justify-center">
        <label className="mr-4 w-24">End Time :</label>
        <InputMask
          mask="99:99:99"
          value={endTime}
          placeholder="00:00:00"
          className="w-32 items-center text-center
           bg-neutral-700 justify-center flex border-none outline-none rounded p-1"
          onChange={(e) => {
            setEndTime(e.target.value);
          }}
        />
      </div>

      <div
        className="flex mt-3 flex-wrap
                    items-start justify-start w-60"
      >
        <label className="w-24 mb-1">Caption:</label>
        <textarea
          placeholder="Enter the captions"
          className="w-full p-1 rounded border-none outline-none bg-neutral-700"
          onChange={(e) => setCaption(e.target.value)}
        />
      </div>
      <Button
        styles="bg-neutral-800 text-neutral-300 rounded-md px-2 py-2 mt-3"
        buttonText="Add Captions"
        event={handleSubmit}
      />
    </div>
  );
}

export default AddCaptions;
