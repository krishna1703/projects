import React, { useState } from 'react'

const Bgchanger = () => {

    const [color , setColor] = useState("lightBlue")
  return (
    <div className='w-full h-screen flex justify-center items-center '
    style={{backgroundColor:color}}>
    

<div className='w-auto bg-black fixed bottom-10 p-4 rounded-xl text-white  gap-10 flex justify-center items-center  flex-wrap'>
<div className='bg-white rounded-xl w-auto px-2 p-2'><button className='p-2 px-5 bg-red-800 rounded-xl' onClick={()=>setColor("Red")}>Red</button></div>
<div className='bg-white rounded-xl w-auto px-2 p-2'><button className='px-5 p-2 bg-green-800 rounded-lg' onClick={()=>setColor("green")}>green</button></div>

<div className='bg-white rounded-xl w-auto px-2 p-2'><button className='p-2  px-5 bg-yellow-800 rounded-lg'onClick={()=>setColor("yellow")}>yellow</button></div>

<div className='bg-white rounded-xl w-auto px-2 p-2'><button className='p-2  px-5 bg-pink-800 rounded-lg'onClick={()=>setColor("pink")}>pink</button></div>

<div className='bg-white rounded-xl w-auto px-2 p-2'><button className='p-2  px-5 bg-gray-800 rounded-lg' onClick={()=>setColor("gray")}>gray</button></div>

<div className='bg-white rounded-xl w-auto px-2 p-2'><button className='p-2  px-5 bg-blue-800 rounded-lg'onClick={()=>setColor("blue")}> blue</button></div>


</div>
    </div>
  )
}

export default Bgchanger;