import React from 'react'
import SignupCss from './Signup.module.css'
import loginBackground from '../assets/loginPageAssets/background-2.svg'
export default function Signup() {
    return (
        <div className={SignupCss.bodyWrapper}style={{ "background": `url(${loginBackground}) no-repeat center/cover` }}>
         
        <div className={SignupCss.bodySign}>
          <form>
         
            <input type="text" name="text" autoComplete="off"  placeholder="Firstname" />
            <input type="text" name="text" autoComplete="off"  placeholder="Lastname" />
            <input type="email" name="email" autoComplete="off"  placeholder="Enter your Email" />
            <input type="email" name="email" autoComplete="off"  placeholder="Confirm Email" />
            <input type="password" placeholder=" Create Password" name="Email" autoComplete="off" />
       
          
           <button type="submit" className={SignupCss.button}>Signup</button>
           
          </form>
        </div>
      </div>
    )
}
