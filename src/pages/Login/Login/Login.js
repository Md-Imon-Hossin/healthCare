import React from 'react';
import useAuth from '../../hooks/useAuth';
import './Login.css'
const Login = () => {
    const {handleRegistration,handleEmailChange,handlePasswordChange,error,toggleLogin,isLogin,handleNameChange,signInUsingGoogle} = useAuth()
    return (
        <div className='form-container'>
            <form onSubmit={handleRegistration}>
                <h1 className='text-primary mb-4'>Please {isLogin ? 'Login' : 'Register'}</h1>         
  {!isLogin && <div className="row mb-3">
    <label htmlFor="inputName3" className="col-sm-2 col-form-label">Name</label>
    <div className="col-sm-10">
      <input onBlur={handleNameChange} type="text" className="form-control" id="inputName3"/>
    </div>
                </div>}     
  <div className="row mb-3">
    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
    <div className="col-sm-10">
      <input onBlur={handleEmailChange} type="email" className="form-control" id="inputEmail3"/>
    </div>
  </div>
  <div className="row mb-3">
    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
    <div className="col-sm-10">
      <input onBlur={handlePasswordChange} type="password" className="form-control" id="inputPassword3" required/>
    </div>
  </div>
  <div className="row mb-3">
    <div className="col-sm-10 offset-sm-2">
      <div className="form-check">
        <input onChange={toggleLogin} className="form-check-input" type="checkbox" id="gridCheck1" />
        <label className="form-check-label" htmlFor="gridCheck1">
          Already Registered ?
        </label>
      </div>
    </div>
                </div>
                <div className="row mb-3 text-danger">
                    {error}
                </div>
          <button type="submit" className="btn btn-primary mx-2">{isLogin ? "Login" : "Register"}</button>
          
          <button onClick={signInUsingGoogle} className='btn btn-secondary mx-1'>Google SignIn</button>
</form>
        </div>
    );
};
export default Login;