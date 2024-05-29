import {GoogleLogin} from "react-google-login";

const clientId = "212265629594-jmt62rr9hokov5ucsv7iu5p6dlmft00u.apps.googleusercontent.com";

function login()
{
  const onSuccess =(res) =>{
    console.log("LOGIN SUCCESS! Current user: ",res.profileObj);
    alert("Login: Done Successfully! ");

  }

  const onFailure = (res) =>{
    console.log("LOGIN FAILED! res: ",res);
  }
  return(
    <>
      <div id="signInButton">
        <GoogleLogin 
          clientId={clientId}
          buttonText="Signup with Google"
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={'single_host_origin'}
          isSignedIn={true}
        />
      </div>
    </>
  )
}
export default login;