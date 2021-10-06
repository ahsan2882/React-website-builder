import React, {useState } from 'react'
import LoginPageCss from './LoginPage.module.css';
import loginBackground from '../assets/loginPageAssets/background-2.svg'
import { Link } from 'react-router-dom';


export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useState(false);
  const userEmail = 'demo@gmail.com';
  const userPassword = 'demo123';
  const submitForm = (e) => {
    e.preventDefault()
    if(email===userEmail && password===userPassword){
      setAuth(true);
    } else{
      setAuth(false);
      alert('Wrong username and password');
    }
  }

  return (
    <div className={LoginPageCss.bodyWrapper}>
      <div className={LoginPageCss.body} style={{ "background": `url(${loginBackground}) no-repeat center/cover` }}>
        <form onSubmit={submitForm}>
   
        <input type="email" name="Email" autoComplete="off" required value={email}
              onChange={(e) => setEmail(e.target.value)} placeholder="Email"/> 
        <input type="password" placeholder="Password" name="Email" autoComplete="off" required value={password}
              onChange={(e) => setPassword(e.target.value)}/>
          {/* <Link to='/select-template' className={LoginPageCss.button}> Login   </Link> */}
          {auth ? <Link to='/select-template'><button type="submit" className={LoginPageCss.button}>Login</button></Link> : <button type="submit" className={LoginPageCss.button}>Login</button>}
        </form>
      </div>
    </div>
  )
}


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
