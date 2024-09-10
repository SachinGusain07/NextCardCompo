import React from 'react'
import MyCardComponent from '@/app/card/page'
const page = () => {
  return (
    <div className='w-full bg-slate-500 flex justify-center items-center h-full mt-20'>
    <div className='grid grid-cols-4'>
      
      <MyCardComponent/>
      <MyCardComponent/>
      <MyCardComponent/> 
      <MyCardComponent/>
      <MyCardComponent/>
      <MyCardComponent/>
      <MyCardComponent/>
      <MyCardComponent/> 
      <MyCardComponent/>
      <MyCardComponent/>
   
    </div>
    </div>
  )
}

export default page
