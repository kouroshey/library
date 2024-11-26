import React from "react";
import SmsIcon from "../icons/sms";

interface InputProps {
  name: string;
  label: string;
  placeholder: string;
  error?: string;
  onError: (err: string) => void;
  setValue: (e: string) => void;
  value: string;
  type: string;
}

const Input = ({
  label,
  name,
  placeholder,
  error,
  onError,
  value,
  setValue,
  type,
}: InputProps) => {
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    if (value.length < 3) {
      onError("لطفا ایمیل را به درستی وارد کنید");
    } else {
      onError("");
    }
  };
  return (
    <div className="flex gap-2 bg-[#ECECEC] rounded-lg px-4 py-2 items-center">
      <div className="p-2">
        <SmsIcon />
      </div>
      <div className="flex flex-col gap-2 w-full">
        <label className="text-xs" htmlFor={name}>
          {label}
        </label>
        <div className="relative w-full">
          <input
            className="bg-transparent placeholder-gray-600 w-full outline-none"
            placeholder={placeholder}
            type={type}
            onChange={(e) => onChangeHandler(e)}
          />
        </div>
        <p className="text-sm text-error">{error}</p>
      </div>
    </div>
  );
};

export default Input;
