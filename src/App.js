import './App.css';

function App() {
  return (
    <div className="App">
        <div className = "login-box">
            <form>
              <div className = "login-form">
                <div className = "alr-mem">
                  <p>Already Members</p>
                </div>
                <div className = "input-mail">
                  <input type = "email" placeholder = "Enter your email" />
                </div>
                <div className = "inp-pass">
                  <input type = "password" placeholder = "Enter the password" />
                </div>
                <div className = "inp-btn">
                  <input type = "submit" value = "Sign In" />
                </div>
              </div>
              <div className = "sign-up-sec">
                <p>Don't Have an Account?</p>
                <p>Sign Up</p>
              </div>
            </form>
        </div>
    </div>
  );
}

export default App;
