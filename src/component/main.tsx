
import React from "react";
import Beard from "./Values/Beard";
import Eyeglasses from "./Values/Eyeglasses";
import Gender from "./Values/Gender";
import ProcessImage from "./Values/ProcessImage";
import Smile from "./Values/Smile";
import Sunglasses from "./Values/Sunglasses";
import Mustache from "./Values/Mustache";
import EyesOpen from "./Values/EyesOpen";
import Emotion from "./Values/Emotion";
import { useState } from "react";
import './styles/styles.css';

function Test(){
  const [image,setImage] =useState<string>();
  const changeImage = (e :any) => {
      setImage(URL.createObjectURL(e.target.files[0]))
  }
  const type= document.getElementById("fileToUpload");
  type?.addEventListener("change", function (event: any) {
    ProcessImage();
    Smile();
    Eyeglasses();
    Sunglasses();
    Gender();
    Beard();
    Mustache();
    EyesOpen();
    Emotion();
  }, false);

    return(
      <div>
      <h1 className="Title">AWS FACIAL REKOGNITION</h1>
<div className="container">
  <div>
   <input className="Image" type="file" name="fileToUpload" id="fileToUpload" accept="image/*" onChange={changeImage}></input>
   <img id="Image"src={image} alt="description"></img>
  </div>
 <div>
  <p id="opResult"></p>
  <p id="opResult1"></p>
  <p id="opResult2"></p>
  <p id="opResult3"></p>
  <p id="opResult4"></p>
  <p id="opResult5"></p>
  <p id="opResult6"></p>
  <p id="opResult7"></p>
  <p id="opResult8"></p>
  <p id="opResult9"></p>
  </div>
  </div>
</div>
    );
    
}
export default Test;
