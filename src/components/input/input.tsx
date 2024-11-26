import { validateEmail } from "@/lib/helpers/validators";
import React from "react";

interface InputProps {
  name: string;
  label?: string;
  placeholder: string;
  error?: string;
  onError: (err: string) => void;
  setValue: (e: string) => void;
  value: string;
  type: string;
  icon?: React.JSX.Element;
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
  icon,
}: InputProps) => {
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    if (value.length < 3) {
      onError("You must enter 3 characters at least.");
    }
    if (type === "email" && !validateEmail(value)) {
      onError("Please enter the email correctly.");
    } else {
      onError("");
    }
  };
  return (
    <div className="flex gap-2 bg-[#ECECEC] rounded-lg px-4 py-2 items-center">
      <div className="p-2">{icon}</div>
      <div className="flex flex-col w-full">
        {label && (
          <label className="text-xs mb-2" htmlFor={name}>
            {label}
          </label>
        )}
        <div className="relative w-full">
          <input
            className="bg-transparent placeholder-gray-400 w-full outline-none"
            placeholder={placeholder}
            type={type}
            onChange={(e) => onChangeHandler(e)}
          />
        </div>
        {error && <p className="text-sm text-error mt-2">{error}</p>}
      </div>
    </div>
  );
};

export default Input;
