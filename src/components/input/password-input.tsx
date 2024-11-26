import React from "react";
import EyeSlashIcon from "../icons/eye-slash";
import EyeIcon from "../icons/eye";
import KeyIcon from "../icons/key";

interface PasswordInputProps {
  name: string;
  label: string;
  placeholder: string;
  passwordShow: boolean;
  showPasswordTrigger: () => void;
  error?: string;
  value: string;
  setValue: (e: string) => void;
  onError: (err: string) => void;
}

const PasswordInput = ({
  name,
  label,
  passwordShow,
  placeholder,
  showPasswordTrigger,
  error,
  onError,
  setValue,
  value,
}: PasswordInputProps) => {
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    if (value.length < 3) {
      onError("Please enter the password correctly.");
    } else {
      onError("");
    }
  };
  return (
    <div className="flex gap-2 bg-[#ECECEC] rounded-lg px-4 py-2 items-center">
      <div className="p-2">
        <KeyIcon />
      </div>
      <div className="flex flex-col gap-2 w-full">
        <label className="text-xs" htmlFor={name}>
          {label}
        </label>
        <div className="relative w-full">
          <input
            className="bg-transparent placeholder-gray-400 w-full outline-none"
            placeholder={placeholder}
            type={passwordShow === false ? "password" : "text"}
            onChange={(e) => onChangeHandler(e)}
          />
          <span
            onClick={() => showPasswordTrigger()}
            className="absolute right-0 cursor-pointer text-black"
          >
            {passwordShow ? <EyeSlashIcon /> : <EyeIcon />}
          </span>
        </div>
        <p className="text-sm text-error">{error}</p>
      </div>
    </div>
  );
};

export default PasswordInput;
