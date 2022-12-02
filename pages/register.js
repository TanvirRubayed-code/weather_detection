 


function Register(){
return <div class="login-form">
<form>
  <h1>Register</h1>
  <div class="content">
	<div class="input-field">
	  <input type="email" placeholder="Email" autocomplete="nope"/>
	</div>

    <div class="input-field">
	  <input type="username or e-mail" placeholder="username or e-mail" autocomplete="nope"/>
	</div>
    
     <div class="input-field">
            <input type="text" placeholder="Enter your number" required/>
          </div>

	<div class="input-field">
	  <input type="password" placeholder="Password" autocomplete="new-password"/>
	</div>

    <div class="input-field">
	  <input type="Confirm Password" placeholder="Confirm Password" autocomplete="new-password"/>
	</div>


    {/* <div class="gender-details">
          <input type="radio" name="gender" id="dot-1"/>
          <input type="radio" name="gender" id="dot-2"/>
          <input type="radio" name="gender" id="dot-3"/>
          <span class="gender-title">Gender</span>
          <div class="category">
            <label for="dot-1">
            <span class="dot one"></span>
            <span class="gender">Male</span>
          </label>
          <label for="dot-2">
            <span class="dot two"></span>
            <span class="gender">Female</span>
          </label>
          <label for="dot-3">
            <span class="dot three"></span>
            <span class="gender">Prefer not to say</span>
            </label>
          </div>
          </div> */}
        
        <div class="container signin">
    <p>Already have an account? <a href="#">Sign in</a>.</p>
  </div>
  <h6>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</h6>   

  </div>
  <div class="action">
  
	<button>Register</button>
	
  </div>
</form>
</div>

}

export default Register