import React, { useCallback, useEffect, useRef, useState } from "react";

function PasswordGenratore() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [specialCharAllowed, setSpecialCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordref = useRef(null);
  const PasswordGenrator = useCallback(
    (length, numberAllowed, specialCharAllowed) => {
      let pass = "";
      let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
      if (numberAllowed) {
        str += "0123456789";
      }
      if (specialCharAllowed) {
        str += "!@#$%^&*()_+[]{}|;:,.<>?";
      }

      for (let index = 0; index < length; index++) {
        let char = Math.floor(Math.random() * str.length);
        pass += str.charAt(char);
      }

      setPassword(pass);
    },
    [length, numberAllowed, specialCharAllowed, setPassword]
  );

  const copypassowrdtoclickboard = useCallback(() => {
    passwordref.current?.select();
    passwordref.current?.setSelectionRange(0, 100);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    PasswordGenrator(length, numberAllowed, specialCharAllowed);
  }, [length, numberAllowed, specialCharAllowed, PasswordGenrator]);

  return (
    <div className="w-full max-w-md mx-auto show-md rounded-0lg px-4 py-3 mt-8 bg-gray-800 text-orange-500">
      <div className="text-white text-center">Password Genrator</div>
      <div className="flex show mt-3 overdlow-hidden mb-4 border-white border-1">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="Password"
          readOnly
          ref={passwordref}
        />
        <button
          onClick={copypassowrdtoclickboard}
          className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 curser-pointer"
        >
          Copy
        </button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className="curser-pointer"
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label htmlFor="">Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="">Number</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={specialCharAllowed}
            id="specialCharAllowed"
            onChange={() => {
              setSpecialCharAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="">Characters {length}</label>
        </div>
      </div>
    </div>
  );
}

export default PasswordGenratore;

//   const PasswordGenrator = () => {
//     let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     if (numberAllowed) {
//       chars += "0123456789";
//     }
//     if (specialCharAllowed) {
//       chars += "!@#$%^&*()_+[]{}|;:,.<>?";
//     }
//     let generatedPassword = "";
//     for (let i = 0; i < length; i++) {
//       const randomIndex = Math.floor(Math.random() * chars.length);
//       generatedPassword += chars[randomIndex];
//     }
//     setPassword(generatedPassword);
//   };
//   console.log(password);
//
