import login from "../login";
import AWS from 'aws-sdk';
//Loads selected image and unencodes image bytes for Rekognition DetectFaces API
export default function ProcessImage() {
    login();
    var control : any = document.getElementById("fileToUpload");
    var file = control?.files[0];

    // Load base64 encoded image for display 
    var reader = new FileReader();
    reader.onload = (function (theFile) {
        return function (e: any) {
            //Call Rekognition  
            AWS.config.region = "eu-west-2";  
            var rekognition = new AWS.Rekognition();
            var params = {
                Image: {
                Bytes: e.target.result
            },
            Attributes: [
            'ALL',
            ]
            };
            rekognition.detectFaces(params, function (err: any, data: any) {
              var result: any = document.getElementById("opResult")
              if (err) console.log(err, err.stack); // an error occurred
              else {
               var table = "<table>AgeRange<tr><th>Low</th><th>High</th></tr>";
                // show each face and build out estimated age table
                for (var i = 0; i < data.FaceDetails.length; i++) {
                  table += '<tr><td>' + data.FaceDetails[i].AgeRange.Low +
                    '</td><td>' + data.FaceDetails[i].AgeRange.High + '</td></tr>';
                }
                table += "</table>";
                result.innerHTML = table;
                  }
                });
                rekognition.detectFaces(params, function (err: any, data: any) {
                  var result: any = document.getElementById("opResult1")
                  if (err) console.log(err, err.stack); // an error occurred
                  else {
                   var table = "<table>Smile<tr><th>Value</th><th>Confidence</th></tr>";
                    // show each face and build out estimated age table
                    for (var i = 0; i < data.FaceDetails.length; i++) {
                      table += '<tr><td>' + data.FaceDetails[i].Smile.Value +
                        '</td><td>' + data.FaceDetails[i].Smile.Confidence + '</td></tr>';
                    }
                    table += "</table>";
                    result.innerHTML = table;
                      }
                    });
                    rekognition.detectFaces(params, function (err: any, data: any) {
                      var result: any = document.getElementById("opResult2")
                      if (err) console.log(err, err.stack); // an error occurred
                      else {
                       var table = "<table>Eyglasses<tr><th>Value</th><th>Confidence</th></tr>";
                        // show each face and build out estimated age table
                        for (var i = 0; i < data.FaceDetails.length; i++) {
                          table += '<tr><td>' + data.FaceDetails[i].Eyeglasses.Value +
                            '</td><td>' + data.FaceDetails[i].Eyeglasses.Confidence + '</td></tr>';
                        }
                        table += "</table>";
                        result.innerHTML = table;
                          }
                        });
                        rekognition.detectFaces(params, function (err: any, data: any) {
                          var result: any = document.getElementById("opResult3")
                          if (err) console.log(err, err.stack); // an error occurred
                          else {
                           var table = "<table>Sunglasses<tr><th>Value</th><th>Confidence</th></tr>";
                            // show each face and build out estimated age table
                            for (var i = 0; i < data.FaceDetails.length; i++) {
                              table += '<tr><td>' + data.FaceDetails[i].Sunglasses.Value +
                                '</td><td>' + data.FaceDetails[i].Sunglasses.Confidence + '</td></tr>';
                            }
                            table += "</table>";
                            result.innerHTML = table;
                              }
                            });      
                            rekognition.detectFaces(params, function (err: any, data: any) {
                              var result: any = document.getElementById("opResult4")
                              if (err) console.log(err, err.stack); // an error occurred
                              else {
                               var table = "<table><tr>Gender<th>Value</th><th>Confidence</th></tr>";
                                // show each face and build out estimated age table
                                for (var i = 0; i < data.FaceDetails.length; i++) {
                                  table += '<tr><td>' + data.FaceDetails[i].Gender.Value +
                                    '</td><td>' + data.FaceDetails[i].Gender.Confidence + '</td></tr>';
                                }
                                table += "</table>";
                                result.innerHTML = table;
                                  }
                                });      
                                rekognition.detectFaces(params, function (err: any, data: any) {
                                  var result: any = document.getElementById("opResult5")
                                  if (err) console.log(err, err.stack); // an error occurred
                                  else {
                                   var table = "<table>Beard<tr><th>Value</th><th>Confidence</th></tr>";
                                    // show each face and build out estimated age table
                                    for (var i = 0; i < data.FaceDetails.length; i++) {
                                      table += '<tr><td>' + data.FaceDetails[i].Beard.Value +
                                        '</td><td>' + data.FaceDetails[i].Beard.Confidence + '</td></tr>';
                                    }
                                    table += "</table>";
                                    result.innerHTML = table;
                                      }
                                    });   
                                    rekognition.detectFaces(params, function (err: any, data: any) {
                                      var result: any = document.getElementById("opResult6")
                                      if (err) console.log(err, err.stack); // an error occurred
                                      else {
                                       var table = "<table>Mustache<tr><th>Value</th><th>Confidence</th></tr>";
                                        // show each face and build out estimated age table
                                        for (var i = 0; i < data.FaceDetails.length; i++) {
                                          table += '<tr><td>' + data.FaceDetails[i].Mustache.Value +
                                            '</td><td>' + data.FaceDetails[i].Mustache.Confidence + '</td></tr>';
                                        }   table += "</table>";
                                        result.innerHTML = table;
                                          }
                                        });   
                                        rekognition.detectFaces(params, function (err: any, data: any) {
                                          var result: any = document.getElementById("opResult6")
                                          if (err) console.log(err, err.stack); // an error occurred
                                          else {
                                           var table = "<table>EyesOpen<tr><th>Value</th><th>Confidence</th></tr>";
                                            // show each face and build out estimated age table
                                            for (var i = 0; i < data.FaceDetails.length; i++) {
                                              table += '<tr><td>' + data.FaceDetails[i].EyesOpen.Value +
                                                '</td><td>' + data.FaceDetails[i].EyesOpen.Confidence + '</td></tr>';
                                            }
                                            table += "</table>";
                                            result.innerHTML = table;
                                              }
                                            }); 
                                            rekognition.detectFaces(params, function (err: any, data: any) {
                                              var result: any = document.getElementById("opResult7")
                                              if (err) console.log(err, err.stack); // an error occurred
                                              else {
                                               var table = "<table>Emotions<tr><th>Type</th><th>Confidence</th></tr>";
                                                // show each face and build out estimated age table
                                                for (var i = 0; i < data.FaceDetails.length; i++) {
                                                  table += '<tr><td>' + data.FaceDetails[i].Emotions.Type +
                                                    '</td><td>' + data.FaceDetails[i].Emotions.Confidence + '</td></tr>';
                                                }
                                                table += "</table>";
                                                result.innerHTML = table;
                                                  }
                                                });   
                                                rekognition.detectFaces(params, function (err: any, data: any) {
                                                  var result: any = document.getElementById("opResult8")
                                                  if (err) console.log(err, err.stack); // an error occurred
                                                  else {
                                                   var table = "<table>Quality<tr><th>Type</th><th>Confidence</th></tr>";
                                                    // show each face and build out estimated age table
                                                    for (var i = 0; i < data.FaceDetails.length; i++) {
                                                      table += '<tr><td>' + data.FaceDetails[i].Quality.Brightness +
                                                        '</td><td>' + data.FaceDetails[i].Quality.Sharpness + '</td></tr>';
                                                    }
                                                    table += "</table>";
                                                    result.innerHTML = table;
                                                      }
                                                    });   
                                                    rekognition.detectFaces(params, function (err: any, data: any) {
                                                      var result: any = document.getElementById("opResult9")
                                                      if (err) console.log(err, err.stack); // an error occurred
                                                      else {
                                                       var table = "<table>BoundingBox<tr><th>Type</th><th>Confidence</th></tr>";
                                                        // show each face and build out estimated age table
                                                        for (var i = 0; i < data.FaceDetails.length; i++) {
                                                          table += '<tr><td>' + data.FaceDetails[i].BoundingBox.Width +
                                                            '</td><td>' + data.FaceDetails[i].Quality.Height + '</td></tr>';
                                                        }
                                                        table += "</table>";
                                                        result.innerHTML = table;
                                                          }
                                                        });   
        
    

                  };
                })(file);
                reader.readAsArrayBuffer(file)
}