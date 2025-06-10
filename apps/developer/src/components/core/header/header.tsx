import { PMLogo } from '@programmer/ui'
import Link from 'next/link'
import React from 'react'

type HeaderNavLinkType = {
    label: string;
    slug: string;
}

const HEADER_NAV_LINKS: HeaderNavLinkType[] = [
    {
        label: "Home",
        slug: "/"
    },
    {
        label: "Github",
        slug: "https://github.com/gitmahin"
    },
    {
        label: "Discord",
        slug: ""
    },
    {
        label: "Facebook",
        slug: "#"
    },
    {
        label: "Contact",
        slug: "https://programmermahin.com/contact"
    }
]

export const Header = () => {
  return (
    <header className='fixed top-0 left-0 w-full h-[50px] border-b z-50 border-border-color_800C bg-white px-5 flex justify-between items-center '>
        <div className='flex justify-center items-center'>
            <PMLogo size='sm' />
        <nav className='flex justify-center items-center w-fit gap-3 pl-10 text-read_2 font-medium'>
            {
                HEADER_NAV_LINKS.map((navLink, i) => {
                    return <Link href={`${navLink.slug}`} key={i} className='classic_link'>
                        {navLink.label}
                    </Link>
                })
            }
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

