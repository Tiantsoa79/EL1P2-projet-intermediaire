import AWS from 'aws-sdk';
import { useState } from 'react';

function DetectFaces(imageData: any) {
  AWS.config.region = "eu-west-2";
    var rekognition = new AWS.Rekognition();
    var params = {
      Image: {
        Bytes: imageData
      },
      Attributes: [
        'ALL',
      ]
    };
    rekognition.detectFaces(params, function (err:any,data:any){
      if (err) console.log(err, err.stack); // an error occurred
      else {
       var table = "<table><tr><th>Low</th><th>High</th></tr>";
        // show each face and build out estimated age table
        for (var i = 0; i < data.FaceDetails.length; i++) {
          table += '<tr><td>' + data.FaceDetails[i].AgeRange.Low +
            '</td><td>' + data.FaceDetails[i].AgeRange.High + '</td></tr>';
        }
        table += "</table>";
       const input= document.getElementById("opResult") as InnerHTML;
        if (input != null){
          console.log(table);
        }
      }
    });
  }

export default DetectFaces;