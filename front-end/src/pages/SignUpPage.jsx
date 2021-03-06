import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from '../components/Input';
import { ButtonBase } from '../components/Buttons'
import { MdPersonAddAlt } from 'react-icons/md'
import Welcome from "../assets/svg/welcome.svg";

const SignUpPage = () => {
  const [errMsg, setErrMsg] = useState('')
  const [emailVal, setEmailVal] = useState("");
  const [pwdVal, setPwdVal] = useState("");
  const [confirmPwdVal, setConfirmPwdVal] = useState("");

  const navigate = useNavigate();

  const onSignUpClick = async () => {
    alert('Sign Up not implemented yet.');
  }

  return (
    <div className="grid place-content-center h-[calc(100vh-3rem)] bg-slate-100">
      <div className="overflow-hidden grid grid-cols-2 rounded-lg bg-white shadow-xl">
        <img src={Welcome} alt="Welcome" className="h-80 mx-12 my-16" />
        <div className="flex flex-col gap-4 p-10 border-l-2 border-green justify-center">
          <h1 className="text-2xl uppercase font-semibold">Sign Up</h1>
          {errMsg && <div className="text-red-500">{errMsg}</div>}
          <Input
            className="px-5 py-4 bg-slate-100 "
            type="text"
            placeholder="Enter your email"
            value={emailVal}
            onChange={(e) => setEmailVal(e.target.value)}
          />
          <Input
            className="px-5 py-4 bg-slate-100"
            type="password"
            placeholder="Enter Password"
            value={pwdVal}
            onChange={(e) => setPwdVal(e.target.value)}
          />
          <Input
            className="px-5 py-4 mb-3 bg-slate-100"
            type="password"
            placeholder="Repeat Password"
            value={confirmPwdVal}
            onChange={(e) => setConfirmPwdVal(e.target.value)}
          />
          <ButtonBase
            className="bg-blue-500 text-xl rounded-lg py-2 text-white"
            disabled={!emailVal || !pwdVal || pwdVal !== confirmPwdVal}
            onClick={onSignUpClick}
            IconEnd={<MdPersonAddAlt />}
          >
            Sign Up
          </ButtonBase>
          <ButtonBase
            as="a"
            className="hover:underline underline-offset-2 hover:cursor-pointer"
            onClick={() => navigate('/login')}
          >
            Already have an account? Log In
          </ButtonBase>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;