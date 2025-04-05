import React, { useRef, useState } from 'react'
import { LuCalendarPlus2 } from "react-icons/lu";
import { MdAddBox,MdOutlinePlaylistAdd,MdDeleteForever } from "react-icons/md";
import { RiAddCircleLine } from "react-icons/ri";

export const ToDoList = () => {
const [Todo,setToDo]=useState([]);
const inputRef=useRef();
const delRef=useRef();
const add=()=>{
  const inputText=inputRef.current.value.trim();
  if(inputText==="")
    alert("No Input Given")
  else
  {
    setToDo((preve)=>([...preve,inputText]))
    inputRef.current.value=""
  }
}
const del=(item)=>{
  console.log(item)
  setToDo((preveToDo)=>(
    preveToDo.filter((todo)=>todo!==item)
  ))
}
  return (
    <div className='bg-stone-900 grid py-4 min-h-screen'>
        <div className='bg-white place-self-center w-11/12 max-w-md
        flex flex-col p-7 min-h-[550px] rounded-xl'>
            <div className='flex items-center mt-7 gap-2'>
              <LuCalendarPlus2 className='text-3xl '/>
              <h1 className='text-3xl font-semibold'>To-Do List</h1>
            </div>
            {/* Input text */}
            <div className='bg-gray-300 my-4 flex rounded-full px-2'>
              <input ref={inputRef} type='text' className='border-none outline-none 
              bg-transparent w-[350px] ' 
              placeholder='Events To Do'/>
              <button className='hover:bg-white rounded-full'
              onClick={add}><MdAddBox className='text-3xl'/></button>
            </div>
            {/* display text palce */}
            {Todo.map((item,index)=>(
              <div key={index} className='bg-gray-300 px-2 my-3 rounded-lg 
              flex items-center'>
                  <input type='checkbox' className='mr-2 mt-0.5'/>
                  <p className='w-[320px]'>{item}</p>
                  <button onClick={()=>del(item)} className='hover:bg-white rounded-full'><MdDeleteForever className='text-3xl'/></button>
              </div> 
            ))}
            
        </div>
    </div>
    
  )
}
// const [state,setstate]=useState([]);
// const itemref=useRef();
// const itemindex=useRef();
// let add=()=>{
//   const inputText=itemref.current.value.trim();
//   console.log(inputText)
//   setstate((prev)=>[...prev, inputText])
//   itemref.current.value = ""
// }
// let del=()=>{
//   console.log(state.splice(itemindex.current.value,1))
// }
// { <div className='bg-gray-500 justify-center mx-auto w-[100vw] h-[100vh] pt-[10vh]'>
// <div className='w-[350px] mx-auto min-h-[550px] rounded-2xl bg-white py-6'>
//     <span className='flex flex-row justify-start gap-3 items-center pl-6'>
//     <LuCalendarPlus2 className='text-3xl'/>
//     <h1 className='font-semibold text-3xl text-gray-900'>To-Do-List</h1>
//     </span>
//     <div className='flex w-[250px] px-2 items-center ml-6 rounded-md 
//     bg-gray-600 my-4 '>
//       <input className='rounded-md border-none outline-none w-[210px] 
//       bg-transparent text-white' ref={itemref} type='text' 
//       placeholder='task to do'/>
//       <button onClick={add}>
//       <MdAddBox className='text-2xl hover:bg-white rounded-full'/></button>
//     </div>
//     {state.map((item,index)=>(
//       <div key={index} className='flex justify-between w-[250px] 
//       bg-gray-600 my-4 items-center ml-6 px-2 rounded-md'>
//         <input type='checkbox'/>
//         <p className='text-white'>{item}</p>
//         <input ref={itemindex} type='hidden' value={index}/>
//         <button onClick={del}><MdDeleteForever className='text-2xl 
//         hover:bg-white 
// rounded-full'/></button>
//       </div>
//     ))
//     }
// </div>
// </div> }