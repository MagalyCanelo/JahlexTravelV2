"use client";
import React, { InputHTMLAttributes, useState } from "react";
import { LuEye } from "react-icons/lu";
import { TbLockPassword } from "react-icons/tb";

interface PasswordInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  containerClassName?: string;
}

const PasswordInput: React.FC<PasswordInputProps> = ({
  label = "Contraseña",
  error,
  containerClassName = "",
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={`flex flex-col relative text-black ${containerClassName}`}>
      <label
        htmlFor="password"
        className={`absolute text-base transition-all duration-200 ${
          isFocused || props.value?.toString() !== ""
            ? "oliva-c font-bold -top-3 !bg-white z-10 px-2 left-3 "
            : "text-gray-700 top-3 left-3"
        }`}
      >
        {label}
      </label>

      <div
        className={`w-full px-4 py-3 border-2 rounded-md focus:outline-none ${
          error ? "border-red-500" : "border-oliva-c"
        } transition-all duration-200 flex flex-row items-center gap-2`}
      >
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className=""
        >
          {showPassword ? <TbLockPassword /> : <LuEye />}
        </button>
        <input
          id="password"
          name="password"
          className="outline-none"
          type={showPassword ? "text" : "password"}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...props}
        />
      </div>

      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
};

export default PasswordInput;
