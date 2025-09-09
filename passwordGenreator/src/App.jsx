import { useCallback, useEffect, useRef, useState, useref } from 'react'
import { RiLockPasswordFill } from "react-icons/ri";



export function App() {
  const [length,setLength] = useState(6)
  const[numAllow,setNumAllow] = useState(false)
  const[charAllow,setCharAllow] = useState(false)
  const[password,setPassword] = useState()

  const passwordRef = useRef(null) 

const passwordGenerator = useCallback(() => {
  let pass = ""
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqurstuvwxyz"

  if (numAllow) str += "0123456789"
  if (charAllow) str += "!@#$%^&*()_+=-~`?"

  for (let i = 1; i<= length; i++) {
   let char = Math.floor(Math.random() * str.length + 1)  
   pass += str.charAt(char)  
  }

  setPassword(pass)

}, [length, numAllow, charAllow, setPassword])

const copypassword = useCallback(() => {
  passwordRef.current?.select()
  window.navigator.clipboard.writeText(password)
},[password])

useEffect(() => {
  passwordGenerator()
}, [length, numAllow, charAllow, passwordGenerator])



  return (
    <>
    <div>
      <div className='bg-[#7E3AF2] py-1'>
        <nav>
          <div className=' flex container w-12 mx-[20px]'>
            <RiLockPasswordFill size={50}/>
          </div>      
        </nav>
      </div>
    <div className='w-[1000px] max-w-screen-md mx-[250px] shadow-md rounded-lg px-4 py-5 my-[110px] text-[black] bg-[#cae6cd]'>
      <h1 className=' text-center text-black my-5 text-3xl font-mono'>PASSWORD GENERATOR</h1>
          <div className='flex shadow rounded-lg overflow-hidden mb-7'>
        <input type="text"
        value={password}
        className='outline-none w-full py-5 px-4 text-2xl'
        placeholder='password'
        readOnly  
        ref={passwordRef}
        />
        <button onClick={copypassword} className='outline-none bg-[#FACA15] text-black text-[26px] px-8 py-1 shrink-1 font-mono'>copy</button>
          </div>
          <div className='flex text-lg gap-x-4'>
          <div className='flex items-center gap-x-2'>
            <input 
            type="range" 
            min={6} 
            max={100} 
            value={length} 
              className='cursorpointer' 
              onChange={(e)  =>  {setLength(e.target.value)}}
              />
              <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-3'>
          <input 
          type="checkbox"
          className='size-5'
          defaultChecked={numAllow}
          id='numberInput'
          onChange={() => {
            setNumAllow((prev) => !prev);
          }}
           />
          <label htmlFor="numbersInput">NUMBERS</label>
          </div>
          <div className='flex items-center gap-x-2 '>
          <input 
          type="checkbox"
          className='size-5'
          defaultChecked={charAllow}
          id='charInput'
          onChange={() => {
            setCharAllow((prev) => !prev);
          }}
           />
           <label htmlFor="charInput">CHARACTERS</label>
          </div>
          </div>


    </div>
    </div>
    </>
  )
}









