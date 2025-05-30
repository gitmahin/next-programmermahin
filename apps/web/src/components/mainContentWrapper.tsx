import React from 'react'

export const MainContentWrapper = ({children}: {children: React.ReactNode}) => {
  return (
    <main className='pt-[64px] w-full'>
      {children}
    </main>
  )
}
