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
      <Header />
      <div className="login-box">
        <div className="post-title">be a part of something</div>
        <form>
          <input type="text" id="fname" name="fname" placeholder="username"/><br/>
          <input type="text" id="lname" name="lname" type="password" placeholder="password"/>
      </form>

      <button type="button" onClick={signUpClicked}>sign up</button>
      <button type="button" className="login-button" onClick={loginClicked}>login</button>

      </div>
    </div>
  );
}
