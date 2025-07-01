import { useCallback, useEffect, useRef, useState } from "react";

function PasswordGenerator() {
  const [length, setLength] = useState(8);
  const [includeSpecialChars, setIncludeSpecialChars] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [password, setPassword] = useState("");

const passwordRef = useRef(null)


  const generatePassword = useCallback(() => {
    let passChars = "";
    const charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const charSetNumbers = "0123456789";
    passChars += charSet;
    let tempPassword = "";
    if (includeSpecialChars) {
      passChars += "!@#$%^&*()_+[]{}|;:,.<>?";
    }
    if (includeNumbers) {
      passChars += charSetNumbers;
    }
    for (let i = 1; i <= length; i++) {
      const randomIndex = Math.floor(Math.random() * passChars.length);
      tempPassword += passChars[randomIndex];
    }
    setPassword(tempPassword);
  }, [length, includeSpecialChars, includeNumbers]);

  useEffect(()=>{
    generatePassword();
  }, [length, includeSpecialChars, includeNumbers]);
  return (
    <div className="flex flex-col items-center gap-4 bg-gray-100">
      <div className="flex">
        <input
          type="text"
          value={password}
          placeholder="Password"
          className="bg-gray-500 rounded py-2 px-3"
          readOnly
          ref={passwordRef}
        />
        <button className="bg-blue-500 text-white rounded py-2 px-4"
        onClick={()=>{
            passwordRef.current.select();
            window.navigator.clipboard.writeText(passwordRef.current.value)
        }}>
          Copy
        </button>
      </div>
      <div className="flex gap-4">
        <label htmlFor="length">Password Length: {length}</label>
        <input type="range" id="length" min={8} max={15} value={length} onChange={(event)=>{
            setLength(event.target.value);
        }}/>

        <label htmlFor="includeSpecialChars">Include Special Characters</label>
        <input type="checkbox" id="includeSpecialChars" defaultChecked = {includeSpecialChars}  onChange={()=>{
            setIncludeSpecialChars(!includeSpecialChars);
        }}/>

        <label htmlFor="includeNumbers">Include Numbers</label>
        <input type="checkbox" id="includeNumbers" defaultChecked={includeNumbers} onChange={()=>{
            setIncludeNumbers(!includeNumbers);
        }} />
      </div>
    </div>
  );
}

export default PasswordGenerator;
