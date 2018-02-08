import React, { Component } from 'react';

class LoginForm extends Component {
    render(){
        return(
            <div>
      <form>
   <div className="container">
    <label for="uname"><b>Username</b></label>
 </div>
 <div className="container">
    <input type="text" placeholder="Enter Username" name="uname" required/>
</div>
<div className="container">
    <label for="psw"><b>Password</b></label>
</div> 
<div className="container">
    <input type="password" placeholder="Enter Password" name="psw" required/>
</div> 
<div className="container">
    <button type="submit" onClick={()=>{alert('you logged in!'); }}>Login</button>
    <label>
      <input type="checkbox" checked="checked" name="remember"/> Remember me
    </label>
</div>
<div className="container">
    <button type="button" className="cancelbtn">Cancel</button>
    <span className="psw">Forgot <a href="#">password?</a></span>
</div>
     </form>
            </div>
        )
    }
}


export default LoginForm; 