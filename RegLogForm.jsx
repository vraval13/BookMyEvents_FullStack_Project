import styles from "./RegLogForm.module.css";
import loginpage from "../assets/loginpage.png";
import LoginButton from "../Components/login";
import signinpic from "../assets/signinpic.avif";
import { FcVoicemail } from "react-icons/fc";
import { Link } from "react-router-dom";
function RegLogForm() 
{
  function handleName()
  {
    alert('Login Sucessfully Done for ');
  }
  return (
    <>
      <div className={styles.bodyContain}>
        <center>
          <div className={styles.container}>
            <div className={styles.leftcontainer}>
              <div>
                <img
                  src="http://localhost:5173/src/assets/Logo.png"
                  style={{
                    width: "500px",
                    height: "230px",
                    marginTop: "-55px",
                  }}
                />
              </div>
              <h4
                class="text-2xl xl:text-3xl font-extrabold"
                style={{
                  marginTop: "-40px",
                }}
              >
                Sign up
              </h4>
              <br />
             <LoginButton/>             
              <br />
              <div
                style={{
                  fontSize: "22px",
                }}
              >
                <strong>Or sign-up with e-mail</strong>
              </div>
              <div>
                <form style={{
                  marginTop:"30px"
                }}>
                  <div class="mb-3">
                    {/* <label for="exampleInputEmail1" class="form-label">
                      Email address
                    </label> */}
                    <input
                      type="email"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Email"
                      style={{
                        width:"50%"
                      }}
                    />
                  </div>
                  <div class="mb-3">
                    {/* <label for="exampleInputPassword1" class="form-label">
                      Password
                    </label> */}
                    <input
                      type="password"
                      class="form-control"
                      id="exampleInputPassword1"
                      placeholder="Password"
                      style={{
                        width:"50%"
                      }}
                    />
                  </div>
                  
                  <Link to={'/'}>
                  <button type="submit" style={{
                    width:"50%"
                  }} onClick={() =>{
                    alert("Registered Successfully!");
                  }}>
                    <strong>Sign Up</strong>
                  </button>
                  </Link>
                </form>
              </div>
            </div>
            <div className={styles.rightcontainer}>
              <img
                src={loginpage}
                alt=""
                style={{
                  borderRadius: "0",
                  width: "100%",
                  height: "500px",
                  borderRadius: "10px",
                }}
              />
            </div>
          </div>
        </center>
      </div>
    </>
  );
}
export default RegLogForm;
