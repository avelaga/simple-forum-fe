import Header from "../components/Header";
import './pages.css';

export default function Login() {

  function signUpClicked(e){
    e.preventDefault();
    console.log("sign up clicked")
  }

  function loginClicked(e){
    e.preventDefault();
    console.log("login clicked")
  }

  return (
    <div className="login">
      <Header login={true}/>
      <div className="login-box">
        <div className="post-title">be a part of something</div>
        <form>
          <input type="text" id="fname" name="fname" placeholder="username" className="login-field"/><br/>
          <input type="text" id="lname" name="lname" type="password" placeholder="password"/>
      </form>

      <div className="login-container">
        <button type="button" className="flex-button" onClick={signUpClicked}>sign up</button>
        <button type="button" className="login-button flex-button" onClick={loginClicked}>login</button>
      </div>

      </div>
    </div>
  );
}
