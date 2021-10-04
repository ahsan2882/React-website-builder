import React, { useState } from 'react'
import LoginPageCss from './LoginPage.module.css';
import loginBackground from '../assets/loginPageAssets/backgrouned.svg'
import { Link } from 'react-router-dom';


export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [allEntry, setAllEntry] = useState([]);
  const submitForm = (e) => {
    e.preventDefault();
    const newEntry = { email: email, password: password };
    setAllEntry([...allEntry, newEntry]);
    console.log(allEntry);
  }



  return (
    <div className={LoginPageCss.bodyWrapper}>
      <div className={LoginPageCss.body} style={{ "background": `url(${loginBackground}) no-repeat center/cover`}}>
        <form onSubmit={submitForm}>
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





          <Link to='/select-template' className={LoginPageCss.button}> Login   </Link>
          <div>
            {
              allEntry.map((curEle) => {
                return (
                  <div>
                    <p className="text-white">  Email :{curEle.email} </p>
                    <p className="text-white"> Password : {curEle.password} </p>

                  </div>
                )
              })
            }



          </div>
        </form>
      </div>
    </div>
  )
}
