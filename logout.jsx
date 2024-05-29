import {GoogleLogout} from "react-google-login";

const clientId = "212265629594-jmt62rr9hokov5ucsv7iu5p6dlmft00u.apps.googleusercontent.com";

function logout()
{
  const onSuccess =() =>{
    console.log("Log out Successfully");
    alert('Logout Done Successfully!');
  }
  return(
    <>
      <div id="signOutButton">
        <GoogleLogout 
          clientId={clientId}
          buttonText={"Logout from Google"}
          onLogoutSuccess={onSuccess}
        />
      </div>
    </>
  )
}
export default logout;