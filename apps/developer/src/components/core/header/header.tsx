import { PMLogo } from '@programmer/ui'
import React from 'react'

export const Header = () => {
  return (
    <header className='fixed top-0 left-0 w-full h-[50px] border-b z-50 border-border-color_800C bg-white px-5 flex justify-between items-center '>
        <div className='flex justify-center items-center'>
            <PMLogo size='sm' />
        <nav className='flex justify-center items-center w-fit gap-3 pl-10'>
            <button className='classic_button'>Home</button>
            <button className='classic_button'>Github</button>
            <button className='classic_button'>Discord</button>
            <button className='classic_button'>Facebook</button>
        </nav>
        </div>

        <div className='flex justify-center items-center gap-2'>
            <button className='classic_button'>
                Search
            </button>

            <input type="text" placeholder="Search" className='classic_input' />
        </div>
    </header>
  )
}

