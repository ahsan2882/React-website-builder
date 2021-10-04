import React, { useState } from 'react'
import LoginPageCss from './LoginPage.module.css';


export const Basic = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [allEntry, setAllEntry] = useState([]);
const submitForm = (e) => {
  e.preventDefault();
   const newEntry = {email:email , password:password};
   setAllEntry([...allEntry, newEntry]);
   console.log(allEntry);
}



  return (

    <form onSubmit={submitForm}>
      <h1 className="text-white text-3xl"> Login </h1>
      <div className="form">
        <input type="Email" name="Email" autoComplete="off" required value={email}
          onChange={(e) => setEmail(e.target.value)} />


        <label htmlFor="name" className="labelName">
          <span className="contentName">  Email </span>


        </label>

     



      </div>
      
    <div className="form">
    <input  type="password" name="Email" autoComplete="off" required value={password}
          onChange={(e) => setPassword(e.target.value)} />
        <label htmlFor="name" className="labelName">
          <span className="contentName">  Password </span>


        </label>

      </div>




      
      <button type="submit"> Login   </button>
<div>
{
  allEntry.map((curEle) => {
    return(
      <div>
<p className="text-white">  Email :{curEle.email} </p>
<p className="text-white"> Password : {curEle.password} </p>

        </div>
    )
  })
}



</div>
    </form>



  )
}
