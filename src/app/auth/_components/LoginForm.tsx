"use client";

import Button from "@/components/button/button";
import Input from "@/components/input/input";
import PasswordInput from "@/components/input/password-input";
import { user } from "@/constants/users";
import React, { useState } from "react";
import { verifyLoginAction } from "../actions";

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
    <div className="h-5/6 w-4/6 bg-white p-8 flex flex-col gap-16 rounded-lg">
      <div className="flex flex-col items-center gap-2">
        <p className="text-2xl">خوش آمدید به</p>
        <h1 className="text-primary text-4xl font-bold">کتابخانه مجازی</h1>
        <div className="flex flex-col gap-1 items-center">
          <span>تست</span>
          <span className="text-gray-400">ایمیل: {user.email}</span>
          <span className="text-gray-400">پسورد: {user.password}</span>
        </div>
      </div>
      <form
        onSubmit={onFormSubmit}
        className="flex flex-col justify-between h-full"
      >
        <div className="flex flex-col gap-4">
          <Input
            label="ایمیل"
            placeholder="لطفا ایمیل خود را وارد کنید"
            name="email"
            type="email"
            onError={setEmailError}
            setValue={setEmail}
            value={email}
            error={emailError}
          />
          <PasswordInput
            label="رمز عبور"
            name="password"
            placeholder="لطفا رمز عبور خود را وارد کنید"
            passwordShow={passwordShow}
            setValue={setPassword}
            value={password}
            showPasswordTrigger={() => setPasswordShow(!passwordShow)}
            error={passwordError}
            onError={setPasswordError}
          />
        </div>
        <Button className="rounded-lg py-6">ورود </Button>
      </form>
    </div>
  );
};

export default LoginForm;
