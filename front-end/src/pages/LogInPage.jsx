import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Welcome from "../assets/svg/welcome.svg";
import Input from '../components/Input';
import { ButtonBase } from '../components/Buttons';
import { MdLogin } from 'react-icons/md'

const LogInPage = () => {
  const [errMsg, setErrMsg] = useState('')
  const [emailVal, setEmailVal] = useState("");
  const [pwdVal, setPwdVal] = useState("");

  const navigate = useNavigate();

  const onLoginClick = async () => {
    alert('Login not implemented yet.');
  }

  const onEmailInput = (e) => setEmailVal(e.target.value)

  return (
    <div className="grid place-content-center h-screen bg-slate-100">
      <div className="overflow-hidden grid grid-cols-2 rounded-lg bg-white shadow-xl">
        <img src={Welcome} alt="Welcome" className="h-80 mx-12 my-16" />
        <div className="flex flex-col gap-4 p-10 border-l-2 border-green justify-center">
          <h1 className="text-2xl uppercase font-semibold">Log In</h1>
          {errMsg && <div className="text-red-500">{errMsg}</div>}
          <Input
            type="text"
            placeholder="Enter your email"
            value={emailVal}
            onChange={(e) => setEmailVal(e.target.value)}
          />
          <Input
            className="mb-3"
            type="password"
            placeholder="Enter Password"
            value={pwdVal}
            onChange={(e) => setPwdVal(e.target.value)}
          />
          <ButtonBase className="bg-blue-500 text-white" IconEnd={<MdLogin />} disabled={!emailVal || !pwdVal} onClick={onLoginClick}>Login</ButtonBase>
          <ButtonBase as="a" className="hover:underline underline-offset-2 hover:cursor-pointer -mb-6" onClick={() => navigate('/forgot-password')}>Forgot Password?</ButtonBase>
          <ButtonBase as="a" className="hover:underline underline-offset-2 hover:cursor-pointer" onClick={() => navigate('/signup')}>Don't have an account? Sign Up</ButtonBase>
        </div>
      </div>
    </div>
  );
};

export default LogInPage;