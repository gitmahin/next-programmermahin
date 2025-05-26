import { PMButton, PMLogo } from '@programmer/ui'
import React from 'react'

export const Header = () => {
  return (
    <header className='w-full bg-background-color_925C border-b border-border-color_800C h-[64px] fixed top-0 left-0 px-5'>
        <div className='layout_max_1200 mx-auto flex justify-between items-center h-full'>
               <PMLogo size="sm" />
               <nav>

               </nav>
               <div className='flex justify-end items-center gap-2'>
                <
                 <PMButton variant='secondary' className='px-3 py-1 rounded text-read_1 font-medium'>
                Log in
               </PMButton>
               <PMButton variant='primary' className='px-3 py-1 rounded text-read_1 font-medium'>
                Sign up
               </PMButton>
               </div>
        </div>
      
    </header>
  )
}

