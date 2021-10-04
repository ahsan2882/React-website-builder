import React, {useState } from 'react'
import LoginPageCss from './LoginPage.module.css';
import loginBackground from '../assets/loginPageAssets/backgrouned.svg'
import {withRouter } from 'react-router-dom';


export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const userEmail = 'demo@gmail.com';
  const userPassword = 'demo123';
  const submitForm = (e) => {
    e.preventDefault()
    if(email===userEmail && password===userPassword){
      this.props.history.push('/login');
    }
  }

  return (
    <div className={LoginPageCss.bodyWrapper}>
      <div className={LoginPageCss.body} style={{ "background": `url(${loginBackground}) no-repeat center/cover` }}>
        <form onSubmit={submitForm.bind(this)}>
          <h1 className="text-white text-3xl"> Login </h1>
          <div className={LoginPageCss.form}>
            <input type="Email" name="Email" autoComplete="off" required value={email}
              onChange={(e) => setEmail(e.target.value)} />
            <label htmlFor="name" className={LoginPageCss.labelName}>
              <span className={LoginPageCss.contentName}>  Email </span>
            </label>
          </div>
          <div className={LoginPageCss.form}>
            <input type="password" name="Email" autoComplete="off" required value={password}
              onChange={(e) => setPassword(e.target.value)} />
            <label htmlFor="name" className={LoginPageCss.labelName}>
              <span className={LoginPageCss.contentName}>  Password </span>
            </label>
          </div>
          {/* <Link to='/select-template' className={LoginPageCss.button}> Login   </Link> */}
          <button type="submit" className={LoginPageCss.button}>Login</button>
        </form>
      </div>
    </div>
  )
}
export default withRouter(LoginPage);

// export default class LoginPage extends Component {
//   onSubmit = () => {
//     if (email === userEmail && password === userPassword) {
//       return <Redirect to="/posts/" />
//     }
//   }
//   render() {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     return (
//       <div>
        
//       </div>
//     )
//   }
// }
