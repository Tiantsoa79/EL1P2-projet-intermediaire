import AWS from 'aws-sdk';


const login:()=>void=()=>{
AWS.config.region = process.env.REACT_APP_REGION; // Region
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: process.env.REACT_APP_POOL_ID as string
});
AWS.config.getCredentials(function () {
  // Credentials will be available when this function is called.
  var accessKeyId = AWS.config.credentials?.accessKeyId;
  var secretAccessKey = AWS.config.credentials?.secretAccessKey;
  var sessionToken = AWS.config.credentials?.sessionToken;
});
}


  export default login;