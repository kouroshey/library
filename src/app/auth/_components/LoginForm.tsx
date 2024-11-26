"use client";

import Button from "@/components/button/button";
import Input from "@/components/input/input";
import PasswordInput from "@/components/input/password-input";
import { user } from "@/constants/users";
import React, { useState } from "react";
import { verifyLoginAction } from "../actions";
import SmsIcon from "@/components/icons/sms";

export interface LoginParams {
  email: string;
  password: string;
}

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordShow, setPasswordShow] = useState(false);

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    verifyLoginAction({ email, password });
  };

  return (
    <div className="h-5/6 w-full md:w-[80%] bg-white p-8 flex flex-col gap-16 rounded-lg">
      <div className="flex flex-col items-center gap-2">
        <p className="text-2xl">Welcome to</p>
        <h1 className="text-primary text-4xl font-bold">Online Library</h1>
      </div>
      <form
        onSubmit={onFormSubmit}
        className="flex flex-col justify-between h-full"
      >
        <div className="flex flex-col gap-4">
          <Input
            label="Email"
            placeholder="your email..."
            name="email"
            type="email"
            onError={setEmailError}
            setValue={setEmail}
            value={email}
            error={emailError}
            icon={<SmsIcon />}
          />
          <PasswordInput
            label="Password"
            name="password"
            placeholder="your password..."
            passwordShow={passwordShow}
            setValue={setPassword}
            value={password}
            showPasswordTrigger={() => setPasswordShow(!passwordShow)}
            error={passwordError}
            onError={setPasswordError}
          />
          <div className="flex flex-col gap-1 items-center">
            <span>test</span>
            <span className="text-gray-400">email: {user.email}</span>
            <span className="text-gray-400">password: {user.password}</span>
          </div>
        </div>
        <Button
          isDisable={!email || !password || !!emailError || !!passwordError}
          className="rounded-lg py-6"
        >
          Login
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;
