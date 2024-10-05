import React, { useCallback, useEffect, useState,useRef } from 'react'

const PasswordGen = () => {
  console.log("start")
  const [password ,setPassword] = useState("")
  const [length,setLength] = useState(8)
  const [includenumbers ,setIncludeNumbers] = useState(false)
  const [includespecialchar ,setIncludeSpecialChar] = useState(false)
 const passwordRef = useRef(null)


 const PasswordGenerator = useCallback(() => {
  console.log("useCallback")
    let pass = '';
    let str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

    if (includenumbers) {
      str += '0123456789';
    }

    if (includespecialchar) {
      str += '!@#$%^&*()_+~';
    }

    for (let i = 1; i <= length; i++) {
      pass += str.charAt(Math.floor(Math.random() * str.length));
    }

    setPassword(pass);
  }, [length, includenumbers, includespecialchar,setPassword]);


  useEffect(() => {
    console.log("useEffect")
    PasswordGenerator(); 
  
  },  [length, includenumbers, includespecialchar,PasswordGenerator]);

   const HandleCopy = useCallback (()=>{
    passwordRef.current?.select()

    // passwordRef.current?.setSelectionRange(0,50)  for a perticular length selector
    window.navigator.clipboard.writeText(password)
   },[password])
  
   console.log("end")
  return (
    <div className='bg-black w-full h-screen flex justify-center items-center flex-col'>
    <div className='bg-slate-500 w-1/2 p-3 rounded-2xl flex justify-center '>
    <input type='text' value={password}  ref={passwordRef} className='bg-white p-1 w-full rounded-l-xl' />
    <button className=' bg-blue-800 text-white p-5 px-5 rounded-r-xl' onClick={()=>HandleCopy()}>Copy </button>
    </div>
      <div className='mt-10  border-white border-2 rounded-xl w-1/2 p-3  flex  gap-5 items-center text-center justify-center'>
        <input type='range' className='w-52' min="8" max= "50" value={length} onChange={(e)=>setLength(e.target.value)}/>
        <label className='text-white text-xl'>length : {length}</label>
        <input type='checkbox' checked={includenumbers} onChange={()=> setIncludeNumbers(!includenumbers)}/>
        <label className='text-white text-xl'>Numbers</label>
      
        <input type='checkbox' checked={includespecialchar} onChange={()=> setIncludeSpecialChar(!includespecialchar)}/>
        <label className='text-white text-xl'>SpecialChar</label>
      </div>
    </div>
  )
}

export default PasswordGen;