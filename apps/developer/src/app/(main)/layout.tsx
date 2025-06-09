import { Header } from '@/components/core/header'
import { Sidebar } from '@/components/sidebar'
import React from 'react'

export default function Layout({
    children
}: {children: React.ReactNode}) {
  return (
    <div>
      <Header/>
      <Sidebar/>
    </div>
  )
}


