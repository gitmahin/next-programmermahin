"use client"
import React from 'react'
import { useProcessMDX } from '@programmer/hooks'


export default function ProcessedContent({data}: {data: string}) {
    const {content, metaData} = useProcessMDX(data)
    
  return (
    <article className='prose prose-gray dark:prose-invert' dangerouslySetInnerHTML={{__html: content}}>
    </article>
  )
}


