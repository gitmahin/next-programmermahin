import Link from 'next/link'
import React from 'react'

export default function ErrorResolvingLayout  ({
  children,
  modal
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}){
  return (
    <div className='w-full pt-[64px] px-5'>
      <div className='layout_max_1200  mx-auto '>
       {children}
       {modal}
      </div>
    </div>
  )
}